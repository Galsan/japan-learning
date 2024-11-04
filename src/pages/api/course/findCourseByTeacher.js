import { connectToDB } from "@/pages/utils/mongooseImp";
import { getSession } from "next-auth/react";
import { Course } from "@/pages/models";

export default async function handler(req, res) {
    const session = getSession({ req });
    if (req.method === 'GET') {
        await connectToDB();

        try {
            const courses = await Course.find({ teacherId: session?.user?.id });
            console.log("courses:", courses)

            res.status(200).json({ courses });
        } catch (error) {
            res.status(500).json({ message: 'Error finding course', error });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}