import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose.connect(process.env.MONGO_URL as string)//casting
.then(()=>console.log("Connected To MongoDB"));

const app=express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user",myUserRoute);
app.listen(7000,()=>{
    console.log("server started on loclalhost:7000");
});