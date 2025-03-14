//Importar todo lo de la libreria express
//falta exportar las rutas de branches

import express from 'express';
import productsRoutes from "./src/routers/products.js"
import clientsRoutes from "./src/routers/clients.js";
import employeesRoutes from "./src/routers/employees.js";
import branchesRoutes from './src/routers/branches.js';
import reviewsRoutes from './src/routers/reviews.js';

//Creo una constante que es igual a la libreria
const app = express();
//Exporto la constante para poder usar express en otros archivos
app.use(express.json());
app.use("/api/products",productsRoutes);
//Se define la ruta de clientes:
app.use("/api/clients",clientsRoutes);
//Se define la ruta de empleados:
app.use("/api/employees",employeesRoutes);
//Se define la ruta de sucursales:
app.use("/api/branches",branchesRoutes);
//Se define la ruta de reviews:
app.use("/api/reviews",reviewsRoutes);



export default app;
