const mongoose = require('mongoose');

// rating, season, imageUrl
const JokesSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, "Title is required!"]
    },
    price: {
        type: String,
        required: [true, "price is required"]
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },

}, {timestamps : true})


module.exports = mongoose.model('Jokes', JokesSchema);