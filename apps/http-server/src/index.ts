import express from 'express';
import {prisma} from '@repo/db/client';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello from http server");
})

app.get('/register',async (req,res)=>{
    const {username,password} = req.body;
    try{
        const result = await prisma.user.create({
            data:{ username, password}
        })
        res.status(200).json({
            msg:"User created successfully",
            id:result.id
        })
    } catch(e){
        console.log(e);
    }
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})
