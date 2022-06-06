const productDL = require("../DL/controllers/productControllers")

async function readAll() {
    const res = await productDL.readAll()
    if (!res) throw "not found"
    return res
}

async function readOne(id) {
    const product = await productDL.readOne(id)
    if (!product) throw `this id: ${id} is not exsit`
    return product
}

async function findByCategory(Category) {
    const arrCategory = await productDL.findByCategory(Category)
    if (arrCategory.length == 0) throw "not found cstegoties"
    return arrCategory
}

function create(product) {
    return productDL.create(product)
}

async function del(id) {
    const product = await readOne(id)
    if (!product) throw `this id: ${id} is not exsit`
    return productDL.del({ id })
}

async function updataOne(id, newData) {
    const product = await readOne(id)
    if (!product) throw `this id: ${id} is not exsit`
    return productDL.updataOne({ id }, newData)
}

async function readAllCategory() {
    const products = await readAll()
    const arrCategories = []
    products.map(val => val.category)
        .forEach(category => {
            if (!arrCategories.includes(category))
                arrCategories.push(category)
        });
    return arrCategories
}

    
async function updataByCategory(category, newData) {
const arrCategories=await readAllCategory()
if(!arrCategories.includes(category)) throw `not found category :${category}`
return productDL.updataByCatergory(category,newData)
}

module.exports = { readAll, readOne, findByCategory, create, del, updataOne,
    readAllCategory,updataByCategory }