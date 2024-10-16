import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
                const myUser = {
                    email: "Galsan",
                    password: "1234"
                }

                //here login authentication
                if (myUser && myUser.password === credentials.password) {
                    return myUser
                }

                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],

    // callbacks: {
    //     async signIn({ account, profile }) {
    //         if (account.provider === "google") {
    //             return profile.email_verified && profile.email.endsWith("@example.com")
    //         }
    //         return true // Do different verification for other providers that don't have `email_verified`
    //     },
    // }
}

export default NextAuth(authOptions)