import "dotenv/config";
import "./database/connectDB.js";
import express from "express";
//import cors from "cors";
//import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";

const app = express();

app.get("/", (req,res)=> {
    res.json({ok:true})
})

//app.listen(5000, ()=> {})

//app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", authRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log("😍😍 http://localhost:" + PORT));