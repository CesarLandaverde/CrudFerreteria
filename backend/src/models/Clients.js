/*
Crear campos:
name
  lastName
  birthday
  email
  password
  telephone
  dui
  isVerified (esto es booleano)
  */
import { Schema,model } from "mongoose";
const clientsSchema = new Schema(
    {
    lastname:{
        type:String,
        require:true
    },birthday:{
        type:Date,
        require:true
    },email:{
        type:String,
        require:true
    },password:{
        type:String,
        require:true
    },telephone:{
        type:String,
        require:true
    },dui:{
        type:String,
        require:true
    },isVerified:{
        type:Boolean,
        require:true
    }

},{
    timestamps:true,
    strict:false
}


);

export default model("Clients",clientsSchema)

