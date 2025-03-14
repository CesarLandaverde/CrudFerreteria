//metodos CRUDS:

const clientsController = {};
import { json } from "express";
import clientsModel from "../models/Clients.js";


//mostrar:

clientsController.getClients = async (req, res) => {
    const clients = await clientsModel.find();
    res.json(clients)
};

//Crear:

clientsController.postClients = async (req, res) => {
    const{lastname,birthday,email,password,telephone,dui,isVerified}= req.body;
    const newClient = new clientsModel({lastname,birthday,email,password,telephone,dui,isVerified});
    await newClient.save();
    res.json({message:"Client Saved"});
};

//Delete:

clientsController.deleteClients = async (req, res) => {
    const deleteClient = await clientsModel.findByIdAndDelete(req.params.id);
    
    res.json({message:"Client Deleted"});
};

//Update:

clientsController.putClients = async (req, res) => {
    const{lastname,birthday,email,password,telephone,dui,isVerified}= req.body;
    
    const updateClient = await clientsModel.findByIdAndUpdate(req.params.id,
        {lastname,birthday,email,password,telephone,dui,isVerified},{new:true}
    );
    res.json({message:"Client Updated"});
};

//mostrar un solo cliente:

clientsController.getClient = async (req, res) => {
 const client = await clientsModel.findById(req.params.id);
 res.json(clients)
};

export default clientsController;