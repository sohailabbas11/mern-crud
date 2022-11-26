const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        desc: { type: String, required: true },
        price: { type: Number, required: true },
        cover: { type: String, },
    })

module.exports = mongoose.model("Books", bookSchema);