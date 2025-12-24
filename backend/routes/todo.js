const { Router } = require('express')
const { todoModel } = require('../config/db')
const todoRouter = Router()
const { userMiddleware } = require('../middleware/usermiddleware')

todoRouter.post('/addtodo', userMiddleware, async (req, res) => {
    const { title, description, status } = req.body
    const userId = req.userId;
    if (!title || !description) {
        res.status(400).json({
            message: "Missing fields"
        })
    }
    const todo = await todoModel.create({
        title,
        description,
        userId,
        status: status || false
    })
    res.json({ message: "Todo added", todo })
})

todoRouter.delete('/deletetodo/:id', userMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        const todoid = req.params.id;
        const todo = await todoModel.findOneAndDelete({ _id: todoid, userId })
        if (!todo) {
            return res.status(404).json({ message: "Todo not found or not authorized" });
        }
        res.json({ message: "Todo deleted" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
})

todoRouter.patch('/updatetodo/:id', userMiddleware, async (req, res) => {
    try {
        const userId = req.userId
        const id = req.params.id
        const { title, description } = req.body
        const updatedTodo = await todoModel.findOneAndUpdate(
            { _id: id, userId },
            { $set: { title, description } },
            { new: true }
        )

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found or not authorized" });
        }
        res.json({ message: "Todo updated", updatedTodo });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
})
module.exports = {
    todoRouter
}