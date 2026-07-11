const express=require('express')
const cors=require('cors')


const connectDB =
require("./src/config/db");
connectDB();

const app=express()

app.use(cors())
app.use(express.json())

app.listen(8000,()=>{
    console.log("server listening")
})