import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import departmentRouter from './routes/department.js';
import connectToDatabase from './models/db/db.js';

// Load environment variables
dotenv.config();

// Connect to the database
connectToDatabase();

const Port = process.env.PORT || 4000; // Fallback to port 3000 if PORT is not set

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/department', departmentRouter);



// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
});

// Start the server
app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
});