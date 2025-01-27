const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/ToDoRoute");


require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>
    console.log("Connected to mongoDB....")
    )
.catch((err)=>console.log(err))


app.use(routes)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})