const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { email, string } = require('zod')
dotenv.config()

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: true
})

const todoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, default: false }
}, {
    timestamps: true
})

const userModel = mongoose.model("User", userSchema)
const todoModel = mongoose.model("Todo", todoSchema)

module.exports = {
    userModel,
    todoModel
}