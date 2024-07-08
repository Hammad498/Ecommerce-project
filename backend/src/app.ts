import express from 'express';

import userRoute from './routes/user.js'

const app=express();


const port=3000;


app.get('/',(req,res)=>{

    res.send('Express is working');
})

app.use('/api/v1/user',userRoute);

app.listen(port,()=>{
    console.log(`Express is working on ${port}`)
})