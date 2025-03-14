//metodos CRUDS:

const branchesControllers = {};
import { json } from "express";
import branchesModel from "../models/Branches.js";

//MOSTRAR:

branchesControllers.getBranches = async (req, res) => {
    const branches = await branchesModel.find();
    res.json(branches)

};

//CREAR:
branchesControllers.postBranches = async (req, res) => {
    const{name,address,telephone,schedule}= req.body;

    const newBranch = new branchesModel({name,address,telephone,schedule});

    await newBranch.save();
    res.json({message:"Branch Saved"});

};

//ELIMINAR:

branchesControllers.deleteBranches = async (req, res) => {

    const deleteBranch = await branchesModel.findByIdAndDelete(req.params.id);

    res.json({message:"Branch Deleted"});
};

//ACTUALIZAR:

branchesControllers.updateBranches = async (req, res) => {

 const{name,address,telephone,schedule}= req.body;

    const updateBranch = await branchesModel.findByIdAndUpdate(req.params.id,
        
        {name,address,telephone,schedule}, {new:true}
    );
    res.json({message:"Branch Updated"});
};

//MOSTRAR UNA SOLA SUCURSAL:  

branchesControllers.getBranch = async (req, res) => {

    const branch = await branchesModel.findById(req.params.id);
    res.json(branch);
};

export default branchesControllers;