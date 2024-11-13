import { connectToDB } from "../../utils/mongooseImp";
import { getServerSession } from "next-auth";
import { Course } from "../../models";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await connectToDB();

        const session = await getServerSession(req, res, authOptions);
        const teacherId = session?.user?.id;

        const { courseName, description, wholeDuration, durationOfEachClass, thumbnailUrl } = req.body;
        try {
            const newCourse = new Course(
                {
                    "name": courseName,
                    "description": description,
                    "_teacherId": teacherId,
                    "wholeDuration": wholeDuration,
                    "durationOfEachClass": durationOfEachClass,
                    "thumbnailUrl": thumbnailUrl
                });

            await newCourse.save();
            res.status(201).json({ message: 'Course created successfully', newCourse });
        } catch (error) {
            res.status(500).json({ message: 'Error creating course', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}