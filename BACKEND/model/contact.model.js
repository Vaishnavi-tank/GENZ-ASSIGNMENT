import mongoose from "mongoose";
const contactSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    title: {
        type: String,
    }

})
const Contact = mongoose.model("Contact", contactSchema);
export default Contact;