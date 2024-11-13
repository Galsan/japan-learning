import { connectToDB } from "@/pages/utils/mongooseImp";
import { TeacherRequest } from "@/pages/models";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        await connectToDB();

        try {
            const teacherRequests = await TeacherRequest.find();

            res.status(200).json({ teacherRequests });
        } catch (error) {
            res.status(500).json({ message: 'Error finding teacherRequests', error });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}