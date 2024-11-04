import { connectToDB } from "@/pages/utils/mongooseImp";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(req, res) {
    const dummyData = {
        course: [
            {
                name: "Course name",
                description: "Description",
                teacher: "Teacher name",
                wholeDuration: "3000",
                durationOfEachClass: "60",
                thumbnail_url: "https://th.bing.com/th/id/OIP.CgWs10bTykKz7D60Ty0X8wHaE7?rs=1&pid=ImgDetMain",
            }
        ]
    }

    if (req.method === 'GET') {
        await connectToDB();

        const session = await getServerSession(req, res, authOptions);

        if (!session) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        res.status(200).json({ data: dummyData.course });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}