import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/pages/models";
import bcrypt from "bcrypt";
import { connectToDB } from "@/pages/utils/mongooseImp";

const findUserByEmail = async (email) => {
    try {
        await connectToDB();

        const user = await User.findOne({ email: email });
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        throw error
    }
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Sign in",
            Credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials) {

                if (!credentials || !credentials.email || !credentials.password) return null

                //here find our user from db or ldap by email
                const user = await findUserByEmail(credentials.email);
                // console.log("user", user)
                // console.log("credenTials", credentials)

                //here login authentication
                if (user && await bcrypt.compare(credentials.password, user.password)) {

                    // console.log("it comes over here, aiiiiin its working ", user)
                    return { id: user._id, email: user.email, name: user.username };
                }

                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    csrf: true,
    secret: process.env.NEXTAUTH_SECRET, // Reference the secret
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60 * 0 + 60 * 60, // 30 days
    },
    callbacks: {
        // async signIn({ account, profile }) {
        //     if (account.provider === "google") {
        //         return profile.email_verified && profile.email.endsWith("@example.com")
        //     }
        //     return true // Do different verification for other providers that don't have `email_verified`
        // },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
            }
            //todo     access token uusgeed terniigee onooh
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.name = token.name;
            session.accessToken = token;
            return session;
        }
    }
}

export default NextAuth(authOptions)