const express = require('express')
const app = express()
const { z } = require('zod')
const { Router } = require('express')
const mongoose = require('mongoose')
const userRouter = Router()
const bcrypt = require('bcrypt')
const session = require('express-session')
const { userModel, todoModel } = require('../config/db')
const MongoStore = require('connect-mongo').default

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

userRouter.post('/signup', async (req, res) => {
    const requiredInput = z.object({
        email: z.string().email(),
        name: z.string().min(10).max(30),
        password: z.string().min(8).max(20)
            .refine(v => [...v].some(c => c >= 'A' && c <= 'Z'), {
                message: "Password must contain at least one uppercase letter"
            })
            .refine(v => [...v].some(c => c >= 'a' && c <= 'z'), {
                message: "Password must contain at least one lowercase letter"
            })
            .refine(v => [...v].some(c => c >= '0' && c <= '9'), {
                message: "Password must contain at least one numeric letter"
            })
            .refine(v => [...v].some(c => c == "@" || c == "!" || c == "&" || c == "%" || c == "^" || c == "$" || c == "#" || c == "~"), {
                message: "Password must contain at least one special character"
            })
    })
    const parsedData = requiredInput.safeParse(req.body)
    if (!parsedData.success) {
        res.json({
            message: "Incorrect format",
            error: parsedData.error.issues
        })
        return
    }
    const { name, email, password } = parsedData.data
    try {
        const checkUserExist = await userModel.findOne({ email })
        if (checkUserExist) {
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await userModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })
        res.json({ message: "You are signed up" })
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
})

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
           return res.status(403).json({
            message: "Incorrect credentials"
        });
    }
    req.session.userId = user._id
      res.json({
        message: "Logged in successfully",
        sessionId: req.session.id   
    });
})

module.exports = {
    userRouter
}