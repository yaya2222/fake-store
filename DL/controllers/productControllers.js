const ProductModel = require("../model/product")
// require("../../db")()

function readAll() {
    return ProductModel.find({ isActive: true })
}

function readOne(id) {
    return ProductModel.findOne({ id, isActive: true })
}

function findByCategory(category) {
    return ProductModel.find({ category, isActive: true })
}

function create(product) {
    return ProductModel.create(product)
}

function updataOne(id, newData) {
    return ProductModel.findOneAndUpdate(id, newData, { new: true })
}

 function del(id){
    return ProductModel.findOneAndUpdate(id,{isActive:false},{new:true})
}

async function updataByCatergory(category,newDate){
return ProductModel.updateMany({category},newDate) 
}

 


module.exports = { readAll, readOne, findByCategory, create,updataOne,del,updataByCatergory }
