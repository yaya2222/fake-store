const { json } = require("express")
const productDL = require("../DL/controllers/productControllers")

async function readAll(filter) {
    const res = await productDL.readAll(filter)
    if (res.length == 0) throw "not found"
    return res
}

async function readOne(id) {
    const product = await productDL.readOne(id)
    if (!product) throw `this id: ${id} is not exsit`
    return product
}

async function fixInput(data){
const arrKeys=Object.keys(data)
console.log(arrKeys);
const arrTest=["rating","_id","id","title","price","description","category","image","count","discount"]
if(!arrKeys.every(key=>arrTest.includes(key)))
throw `inpot not fix`
}

async function create(product) {
     fixInput(product)
    if((await readOne(product.id))) throw `this id:${product.id} exsit`
    return productDL.create(product)
}

async function del(id) {
    const product = await readOne(id)
    if (!product) throw `this id: ${id} is not exsit`
    return productDL.del({ id })
}

async function updataOne(id, newData) {
    fixInput(newData)
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
    fixInput(newData)
const arrCategories=await readAllCategory()
if(!arrCategories.includes(category)) throw `not found category :${category}`
return productDL.updataByCatergory(category,newData)
}

module.exports = { readAll, readOne,create, del, updataOne,
    readAllCategory,updataByCategory}
