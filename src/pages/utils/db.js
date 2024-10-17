import { config } from 'dotenv';
import { MongoClient } from 'mongodb';
config();

const client = new MongoClient(process.env.MONGODB_URI, {});

const connection = async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');``
        // You can perform database operations here
    } catch (err) {
        console.error('MongoDB connection error:', err);
    } finally {
        await client.close();
    }
}

export default connection