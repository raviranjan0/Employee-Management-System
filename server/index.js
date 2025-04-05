import express from 'express';
import cors from 'cors';

const Port = process.env.PORT;

const app = express();
app.use(cors(), express.json());

app.listen(Port, ()=>{
    console.log(`Server is running at ${Port}`);
})