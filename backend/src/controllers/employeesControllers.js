//controlador de empleados

const employeesControllers = {};
import { json } from "express";
import employeesModel from "../models/Employees.js";

//mostrar:
employeesControllers.getEmployees = async (req, res) => {
  const employees = await employeesModel.find();
  res.json(employees);
};

// crear:
employeesControllers.createEmployees = async (req, res) => {

  const {name,lastName,birthday,email,address,hireDate,password,telephone,dui,isssNumber,isVerified} = req.body;

  const newEmployee = new employeesModel({name,lastName,birthday,email,address,hireDate,password,telephone,dui,isssNumber,isVerified});

  await newEmployee.save();
  res.json({ message: "Employee GUARDADO" });
};

// delete:  

employeesControllers.deleteEmployees = async (req, res) => {

const deleteEmployee = await employeesModel.findByIdAndDelete(req.params.id);

res.json({ message: "Employee Eliminado" });

};

// update:
employeesControllers.updateEmployees = async (req, res) => {

 const {name,lastName,birthday,email,address,hireDate,password,telephone,dui,isssNumber,isVerified} = req.body;

  const updateEmployee = await employeesModel.findByIdAndUpdate(req.params.id,
    
    {name,lastName,birthday,email,address,hireDate,password,telephone,dui,isssNumber,isVerified}, { new: true }
  );
  res.json({ message: "Employee Actualizado" });
};

// mostrar un solo empleado:

employeesControllers.getEmployee = async (req, res) => {
  const employee = await employeesModel.findById(req.params.id);
  res.json(employee);
}

export default employeesControllers;
