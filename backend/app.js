//Importar todo lo de la libreria express
import express from 'express';
import productsRoutes from "./src/routers/products.js"
//Creo una constante que es igual a la libreria
const app = express();
//Exporto la constante para poder usar express en otros archivos
app.use(express.json());
app.use("/api/products",productsRoutes);



export default app;
