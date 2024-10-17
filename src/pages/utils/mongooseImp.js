import mongoose from "mongoose";

export async function connectToDB() {
    if (mongoose.connection.readyState >= 1) return;

    return mongoose.connect(process.env.MONGODB_URI, {}).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
}