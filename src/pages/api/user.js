import { connectToDB } from "../utils/mongooseImp";
import User from "../models";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Connect to database
        await connectToDB();

        // Extract data from request body
        const { username, password } = req.body;

        try {
            // Create new user
            const newUser = new User({ username, password });
            await newUser.save();

            // Send success response
            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            // Send error response
            res.status(500).json({ message: 'Error creating user', error });
        }
    } else {
        // Handle other HTTP methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}