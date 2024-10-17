// import { connection } from "../utils/db"
import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {});

config();
export default async function handler(req, res) {
    // Simulate a list of users (you can replace this with your actual data)
    console.log("Hello worlds");

    // console.log(connection);
    console.log("(-----------------------------------------------------------------------------");

    // await connection();
    let data = [];

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db('sample_mflix');  // Replace <DBNAME> with your actual database name
        const collection = database.collection('movies');  // Replace <COLLECTION> with your actual collection name

        const query = {
            title: "Miss Lulu Bett"
        };  // You can define your query here

        data = await collection.find(query).toArray();

        console.log("data", data)


        // You can perform database operations here
    } catch (err) {
        console.error('MongoDB connection error:', err);
    } finally {
        await client.close();
    }
    res.status(200).json({ res: data, message: 'Connected to MongoDB' });
    // Respond with the list of users as JSON
}