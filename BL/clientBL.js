const clientDL=require("../DL/controllers/clientControllers")

async function read(email){
if(email) {
    const client= await clientDL.readOne(email)
if(!client)throw `not fount client ${email}`
return client
}
return clientDL.read()
}
//צריך להוסיף בדיקות
function create(newClient){
const {name,email,password}=newClient;
console.log(name,email,password);
if(!name||!email||!password) throw `missing data`
return clientDL.create(newClient)
}

async function updata(email,newData){
const client=await read(email)
if(!client)  throw `not found client ${email}`
return clientDL.updata(email,newData)
}

async function del(email){
    const client=await read(email)
    if(!client)  throw `not found client ${email}`
    return clientDL.del(email)   
}

module.exports={read,create,updata,del}