const cartDL = require("../DL/controllers/cartControllers")

async function read(_id) {
    if (_id) {
        const cart = await cartDL.readOne(_id)
        if (!cart) throw `not found cart with id:${_id}`
        return cart
    }
    const carts = await cartDL.read()
    if (carts.length == 0) throw "not found cart"
    return carts
}

function create(newCart) {
    return cartDL.create(newCart)
}

async function updata(_id, newData) {
    const cart = await read(_id)
    if (!cart) throw "not found cart"
    return cartDL.updata(_id, newData)
}

async function del(_id) {
    const cart = await read(_id)
    if (!cart) throw "not found cart"
    return cartDL.del(_id)
}


module.exports = { read, create, del, updata }