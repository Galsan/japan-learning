import { connectToDB } from "@/pages/utils/mongooseImp";
import { getSession } from "next-auth/react";

export const config = {
    api: {
        bodyParser: false
    }
};

export default async function handler(req, res) {
    const dummyData = {
        course: [
            {
                name: "Curriculum name",
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

        const session = await getSession({ req });

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