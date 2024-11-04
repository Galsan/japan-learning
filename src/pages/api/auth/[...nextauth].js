import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/pages/models";
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
            name: "Mongo Sign In",
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
                if (!credentials || !credentials.email || !credentials.password)
                    //email password baihgui uyd butsaah response
                    return null

                const user = await findUserByEmail(credentials.email);

                if (user && await bcrypt.compare(credentials.password, user.password)) {
                    return { id: user._id, email: user.email, username: user.username, role: user.role };
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
        async signIn({ user, account, profile }) {

            const dbUser = await findUserByEmail(user.email);

            if (dbUser) {
                // User already exists
                return true;
            } else {
                return `/newUser?email=${user.email}`;
            }
            // if (account.provider === "google") {
            //     return profile.email_verified && profile.email.endsWith("@example.com")
            // }
            // return true // Do different verification for other providers that don't have `email_verified`
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.username = user.username;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.username = token.username;
            session.user.role = token.role;
            return session;
        }
    }
}

export default NextAuth(authOptions)