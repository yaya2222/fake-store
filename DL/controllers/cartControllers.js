const CartModel = require("../model/modelCart")

async function read() {
    const orders = await CartModel.find({isActive:true })
    return orders
}
function create(newCart) {
    return CartModel.create(newCart)
}

function updata(_id, newData) {
    return CartModel.findOneAndUpdate({ _id }, newData, { new: true })
}

function del(_id) {
    return CartModel.findOneAndUpdate({ _id }, { isActive: false })
}

module.exports = { read, create, updata, del }