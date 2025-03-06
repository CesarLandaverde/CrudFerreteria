//aqui esta el controlador ,iran todos los metodos
//CRUD

const productsController ={};
import { json } from "express";
import productsModel from "../models/Products.js";
//mostrar:
productsController.getProducts =async(req,res)=>{
    const products= await productsModel.find();
    res.json(products)
}
//crear:
productsController.createProducts = async (req,res)=>{

    const{name,description,price,stock}= req.body;

    const newProduct = new productsModel({name,description,price,stock})

    await newProduct.save();
    res.json({message:"Product GUARDADO"})
}
//delete:
productsController.deleteProducts= async (req,res)=>{
    const deleteProduct = await productsModel.findByIdandDelete(req.params.id);
    res.json({message:"Product Eliminado"})
}
//update:
productsController.updateProducts = async(req,res)=>{
    const updateProduct = await productsModel.findByIdandUpdate(req.params.id,
        {name,description,price,stock},{new:true}
    );
    res.json({message:"Product Actualizado"})
}


productsController.getProduct = async(req,res)=>{
    const product = await productsModel.findbyId(req.params.id);
    res.json(product)
}

export default productsController