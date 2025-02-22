const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors());

const connectToDB = require('./db/db');
connectToDB();

const userRoutes=require("./routes/user.routes");


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/user',userRoutes);

module.exports = app;