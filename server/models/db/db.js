import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const connectToDatabase = () => {
    const uri = process.env.MONGO_URI; // Fetch MONGO_URI from .env
    if (!uri) {
        throw new Error('MONGO_URI is not defined in the environment variables');
    }
    mongoose.connect(uri)
        .then(() => console.log('Database connected successfully'))
        .catch(err => console.error('Database connection error:', err));
};

export default connectToDatabase;