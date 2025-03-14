import express from "express";
const router = express.Router();
import employeesControllers from '../controllers/employeesControllers.js';

router.route('/')
.get(employeesControllers.getEmployees)
.post(employeesControllers.createEmployees);

 router.route('/:id')
 .get(employeesControllers.getEmployee)
 .put(employeesControllers.updateEmployees)
 .delete(employeesControllers.deleteEmployees);

 export default router;
 