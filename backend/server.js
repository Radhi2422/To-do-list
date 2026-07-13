require("dotenv").config()
const express=require("express")
const cors=require("cors")
const problemRoutes=require("./src/routes/problemRoutes")


const app=express()
app.use(cors())
app.use(express.json())
app.use("/problems",problemRoutes)
const connectDB =require("./src/config/db");
connectDB();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});