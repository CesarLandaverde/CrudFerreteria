import express from "express";
const router = express.Router();
import employeesRoutes from '../controllers/employeesControllers.js';

router.route('/')
.get(employeesRoutes.getEmployees)
.post(employeesRoutes.createEmployees);

 router.route('/:id')
 .get(employeesRoutes.getEmployee)
 .put(employeesRoutes.updateEmployees)
 .delete(employeesRoutes.deleteEmployees);

 export default router;
 