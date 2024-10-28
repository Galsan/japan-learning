import { connectToDB } from "../../utils/mongooseImp";
import User from "../../models";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        await connectToDB();

        try {
            const users = await User.find({ role: "user" });
            console.log("users:", users)

            res.status(200).json({ data: users });
        } catch (error) {
            res.status(500).json({ message: 'Error finding user', error });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}