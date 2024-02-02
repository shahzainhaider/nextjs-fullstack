import { Timestamp } from 'mongodb'
import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
},{Timestamp:true});

const Contact = mongoose.models.contacts || mongoose.model('contacts', contactSchema)

export default Contact