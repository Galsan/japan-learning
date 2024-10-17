import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/pages/models";
import { connectToDB } from "@/pages/utils/mongooseImp";
const bcrypt = require('bcrypt');

const findUserByEmail = async (email) => {
    try {
        console.log("in find by email", email);
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

const comparePasswords = async (plainPassword, hashedPassword) => {
    try {
        const match = await bcrypt.compare(plainPassword, hashedPassword);
        if (match) {
            console.log('Password matches!');
            return true;
        } else {
            console.log('Password does not match.');
            return false;
        }
    } catch (error) {
        console.error('Error comparing passwords:', error);
        throw error;
    }
};

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

                console.log("credenTials", credentials)

                //here find our user from db or ldap by email
                const myUser = await findUserByEmail(credentials.email);
                console.log("myUser", myUser)
                console.log("credenTials", credentials)


                // const salt = await bcrypt.genSalt(10);
                // credentials.password = await bcrypt.hash(credentials.password, salt);
                // console.log(myUser.password === credentials.password);
                // console.log("it credentials password", credentials.password);

                //here login authentication
                if (myUser && await bcrypt.compare(credentials.password, myUser.password)) {

                    console.log("it comes over here, aiiiiin its working ")
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