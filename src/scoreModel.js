const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    score: {
        type: Number,
        require: true,
    }
})

module.exports = mongoose.model('scores', scoreSchema);