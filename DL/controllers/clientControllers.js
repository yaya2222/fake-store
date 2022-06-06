const ClientModel = require("../model/modelClient")

function read(filter = {}) {
    return ClientModel.find(filter)
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

module.exports={read,create,updata,del}