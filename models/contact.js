const mongoose= require("mongoose");

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    subject: String,
    course: String,
    // message: String,
    });

module.exports= mongoose.model("Contact",contactSchema);