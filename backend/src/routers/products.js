import express from "express";

const router = express.Router();
import productsController from "../controllers/productsControllers.js";

router.route("/")
.get(productsController.getProducts)
.post(productsController.createProducts)

router.route("/:id")
.get(productsController.getProduct)
.put(productsController.updateProducts)
.delete(productsController.deleteProducts);

export default router;
