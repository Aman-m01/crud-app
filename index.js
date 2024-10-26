// here we build a basics rest apis
// it perform CRUD operations on the users 

require('dotenv').config();
const express = require("express")

const { logReqRes } = require('./middlewares')
const userRouter = require('./routes/user')

const mongoose = require('mongoose')
mongoose.set("strictQuery", true);


const app = express()
const port = process.env.PORT || 2000;
const mongoUrl = process.env.MONGO_URL;

//connect mongoDb
mongoose.connect(mongoUrl).then(() => console.log("DB connected"))
//middlewares
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"))

app.use('/api/users', userRouter)
app.listen(port, () => {
    console.log("Server Started")
    console.log(`server is running on:    http://localhost:${port}`)
})