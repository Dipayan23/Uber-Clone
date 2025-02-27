const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const cors = require("cors");
app.use(cors());

const connectToDB = require('./db/db');
connectToDB();

const userRoutes=require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/user',userRoutes);
app.use('/captain',captainRoutes);

module.exports = app;