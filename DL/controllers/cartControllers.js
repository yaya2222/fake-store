const CartModel = require("../model/modelCart")

function read(filter = {}) {

    return CartModel.find({ ...filter, isClientActive: true })
}

function create(newCart) {
    return CartModel.create(newCart)
}

function updata(_id, newData) {
    return CartModel.findOneAndUpdate({ _id }, newData, { new: true })
}

function del(_id) {
    return CartModel.findOneAndUpdate({ _id }, { isClientActive: false })
}

module.exports={read,create,updata,del}