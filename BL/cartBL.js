const cartBL = require("../DL/controllers/cartControllers")

async function read() {
    const carts= await cartBL.read()
    if(carts.length==0) throw "not found cart"
    return carts
}

function create(newCart) {
    return cartBL.create(newCart)
}

async function updata(_id, newData) {
    const cart = await read(_id)
    if (!cart) throw "not found cart"
    return cartBL.updata(_id, newData)
}

async function del(_id) {
    const cart = await read(_id)
    if (!cart) throw "not found cart"
    return cartBL.del(_id)
}


module.exports = { read, create, updata, del }