const mongoose=require("mongoose")

const CartSchema=new mongoose.Schema({
    products:[{type:mongoose.Types.ObjectId,ref:"products"}],
    date:{type:Date,default:new Date()},
    isClientActive:{type:Boolean,default:true}
})

module.exports = new mongoose.model("Carts",CartSchema)

