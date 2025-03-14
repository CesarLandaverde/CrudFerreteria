import express from "express";
const router = express.Router();
import clientsControllers from "../controllers/clientsControllers.js";


router.route("/")
.get(clientsControllers.getClients)
.post(clientsControllers.postClients);

router.route("/:id")
.get(clientsControllers.getClient)
.put(clientsControllers.putClients)
.delete(clientsControllers.deleteClients);

 export default router;