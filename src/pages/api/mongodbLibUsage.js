import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {});

config();
export default async function handler(req, res) {
    let data = [];
    let status;

    try {
        await client.connect();
        const database = client.db('sample_mflix');
        const collection = database.collection('movies');

        const query = {
            title: "Miss Lulu Bett"
        };
        data = await collection.find(query).toArray();
        status = 200;
    } catch (err) {
        console.error('MongoDB connection error:', err);
        data.push({ result: "Internal server error" });
        status = 503;
    } finally {
        await client.close();
        res.status(status).json({ res: data, message: 'Connected to MongoDB' });
    }
}