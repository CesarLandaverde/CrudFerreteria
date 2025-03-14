import express from "express";
const router = express.Router();
import clientsRoutes from "../controllers/clientsControllers.js";


router.route("/")
.get(clientsRoutes.getClients)
.post(clientsRoutes.postClients);

router.route("/:id")
.get(clientsRoutes.getClient)
.put(clientsRoutes.putClients)
.delete(clientsRoutes.deleteClients);

 export default router;