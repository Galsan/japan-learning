import { connectToDB } from "../../utils/mongooseImp";
import { User } from "../../models";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await connectToDB();

        const { username, password, email } = req.body;
        try {
            const newUser = new User({ username, password, email, role: "user" });
            await newUser.save();

            res.status(201).json({ message: 'User created successfully', newUser });
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}