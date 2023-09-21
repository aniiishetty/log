const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "visitor"
    }
})

const logModel = mongoose.model("logs", logSchema)
module.exports = logModel