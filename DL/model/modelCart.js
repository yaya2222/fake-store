const mongoose=require("mongoose")

const CartSchema=new mongoose.Schema({
    products:[{type:mongoose.Types.ObjectId,ref:"products"}],
    date:{type:Date,default:new Date()},
    client:{type:mongoose.Types.ObjectId,ref:"Clients"},
    isActive:{type:Boolean,default:true}
})

module.exports = new mongoose.model("Carts",CartSchema)

