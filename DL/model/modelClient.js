const mongoose = require("mongoose")

const ClientSchema = new mongoose.Schema({
    name: { type: String, required:true },
    email:{type:String, unique:true},
    password:{type:String, required:true},
    addres: {
        city: String,
        street: String,
        houseNumber: Number
    },
    isActive:{type:Boolean,default:true}
})

module.exports=new mongoose.model("Clients",ClientSchema)