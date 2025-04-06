import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js'
import connectToDatabase from './models/db/db.js';

connectToDatabase();

const Port = process.env.PORT;

const app = express();
app.use(cors(), express.json());
app.use('/api/auth', authRouter)

app.listen(Port, ()=>{
    console.log(`Server is running at ${Port}`);
})