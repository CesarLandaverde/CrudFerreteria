import mongoose from "mongoose";

const URL ="mongodb://localhost:27017/FerreteriaEPA20230355";

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open",()=>{

    console.log("DB is connected")
})

connection.on("disconnected",()=>{
    console.log("Error en la conexion")
})

connection.on("error",()=>{
    console.log("Error en la conexion")
})

