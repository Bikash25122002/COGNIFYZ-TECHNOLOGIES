const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    username: { type: String, required: true },
    zip: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: Number, required: true },
   
})




module.exports = mongoose.model("Userdetails", userSchema)