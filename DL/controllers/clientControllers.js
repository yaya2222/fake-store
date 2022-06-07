const ClientModel = require("../model/modelClient")

function read() {
    return ClientModel.find({isActive:true})
}

function readOne(email){
    return ClientModel.findOne({email,isActive:true})
}

function create(client) {
    return ClientModel.create(client)
}

function updata(email, newData) {
    return ClientModel.findOneAndUpdate({ email }, newData, { new: true })
}

function del(email){
    return ClientModel.findOneAndUpdate({email},{isActive:false})
}

module.exports={read,readOne,create,updata,del}