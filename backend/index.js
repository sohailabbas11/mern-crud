const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Books = require('./schema');
const cors = require('cors');
app.use(cors());


app.get('/books', async (req, res) => {
    try {
        const books = await Books.find(req.body);
        res.json(books);
    }
    catch (err) {
        console.log(err);
    }
})

app.post('/books/add', async (req, res) => {
    try {
        const book = new Books({
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price,
            cover: req.body.cover,
        });
        await book.save();
        res.json(book);
    }
    catch (err) {
        console.log(err);
    }
})

app.put('/books/:id', async (req, res) => {
    try {
        const book = await Books.findByIdAndUpdate
            (req.params.id, req.body);
        book.save();
        res.json(book);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.delete('/books/:id', async (req, res) => {
    try {
        const book = await Books.findByIdAndDelete(req.params.id);
        if (!book) res.status(404).json("No item found");
        res.status(200).json("Item deleted");
    } catch (error) {
        res.status(500).json(error);
    }
})

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(8800, () => {
    console.log('Server running on port 8800');
})