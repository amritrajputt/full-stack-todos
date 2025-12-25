const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo').default
const cors = require("cors");
const session = require('express-session')

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
}));

app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    })
}));

const { userRouter } = require('./routes/user')
const { todoRouter } = require('./routes/todo')
app.use('/api/v1/user', userRouter)
app.use('/api/v1/todo', todoRouter)

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB is connected");
    } catch (error) {
        console.log("Failed to connect to the database", error)
    }
}

app.listen(3000, () => {
    console.log("server is running...");
})

connectDB()