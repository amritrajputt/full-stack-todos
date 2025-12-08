const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const mongoose = require('mongoose')

const cors = require("cors");
app.use(cors())
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
  credentials: true
}));

const main = async() => {
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
main()