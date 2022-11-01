
const mongoose =  require('mongoose');

const TransportersSchema = new mongoose.Schema({ 
    name:{
        type: String,
        required: true,
        min: 7,
        max: 50
    },
    email:{
        type: String,
        required: true, 
        max: 100
    },
    password:{
        type: String,
        required: true,
        min: 7,
        max: 1040
    },    
    phone: {
        type: Number,
        required: true,
    },
    created_Date: {
        type: Date,
        default: Date.now,
        
    },
    company_name: {
        type: String,
        required: true,
        },
    number_of_busses: {
        type: Number,
        required: true,
        
    },
    // created_Date: {
    //     type: Date,
    //     default: Date.now,
        
    // }
 })


 module.exports = mongoose.model("Transporters", TransportersSchema) 