const mongoose = require("mongoose")

const ClientSchema = new mongoose.Schema({
    name: { type: String, required },
    addres: {
        city: String,
        street: String,
        houseNumber: Number
    },
    carts:[{type:mongoose.Types.ObjectId,ref:"Carts"}],
    isActive:{type:Boolean,default:true}
})

module.exports=new mongoose.model("Clients",ClientSchema)