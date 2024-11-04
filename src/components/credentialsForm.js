"use client";

import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CredentialsForm() {
    const router = useRouter();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const signInResponse = await signIn("credentials", {
            email: data.get("email"),
            password: data.get("password"),
            redirect: false,
        });

        console.log("signInResponse", signInResponse);
        const session = await getSession();
        console.log("User session Info:", session); // { id, email, name, role }
        // console.log("Token:", session.accessToken);

        if (signInResponse && !signInResponse.error) {
            //Redirect to somewhere (/maybe started point)
            if (session.user.role === "admin") {
                router.push("/admin");
            } else if (session.user.role === "teacher") {
                // router.push(`/teacher/${session.user.email}`);
                router.push(`/teacher`);
            }
            else
                router.push("/user");
        } else {
            console.log("Error: ", signInResponse);
            setError("Your Email or Password is wrong!");
        }
    };

    return (
        <form
            className="w-full mt-8 text-xl text-black font-semibold flex flex-col"
            onSubmit={handleSubmit}
        >
            {error && (
                <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">
                    {error}
                </span>
            )}
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
            />

            <button
                type="submit"
                className="w-full h-12 px-6 mt-4 text-lg text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
            >
                Log in
            </button>
        </form>
    );
}