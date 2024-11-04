import { connectToDB } from "@/pages/utils/mongooseImp";
import { User } from "@/pages/models";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        await connectToDB();
        console.log("req.query.role",)

        try {
            const users = await User.find({ role: req.query.role });
            console.log("users:", users)

            res.status(200).json({ users });
        } catch (error) {
            res.status(500).json({ message: 'Error finding user', error });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}