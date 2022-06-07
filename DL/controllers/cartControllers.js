const { path } = require("express/lib/application")
const CartModel = require("../model/modelCart")

async function read() {
    const mongoose = require("mongoose")
    const orders = await CartModel.find({ isActive: true })
        .populate({ path: "products", select: ["title", "price"] })
        .populate({ path: "client", select: ["name", "email"] })
    return orders
}
async function readOne(_id){
    const mongoose = require("mongoose")
    const orders = await CartModel.findOne({_id: new mongoose.Types.ObjectId(_id) ,isActive: true })
        .populate({ path: "products", select: ["title", "price"] })
        .populate({ path: "client", select: ["name", "email"] })
    return orders 
}

function create(newCart) {
    return CartModel.create(newCart)
}

function updata(_id, newData) {
    const mongoose = require("mongoose")
    return CartModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(_id) }, newData, { new: true })
}

function del(_id) {
    const mongoose = require("mongoose")
    return CartModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(_id) },
        { isActive: false }, { new: true })
}


module.exports = { read, create,updata, del,readOne }