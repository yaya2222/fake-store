const mongoose=require("mongoose")

const ProductSchema= new mongoose.Schema({
id:{type:Number,unique:true},
title:{type:String,required:true},
price:{type:Number,required:true},
description:String,
category:{type:String,required:true},
image:String,
rating:{
rate:Number,
count:Number
},
count:{type:Number,default:1},
discount:{type:Number,default:0},
isActive:{type:Boolean,default:true}
})

module.exports=new mongoose.model("products",ProductSchema)

