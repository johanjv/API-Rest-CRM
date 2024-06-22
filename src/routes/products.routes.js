import { Router } from "express";
import * as productsCtrl from "../controllers/products.controller.js";
import { authJwt } from "../middlewares/index.js";

const router = Router();

router.get('/', productsCtrl.getProducts);

router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.createProduct);

router.get('/:productId', productsCtrl.getProductById);

router.put('/:productId', productsCtrl.updateProductById);

router.delete('/:productId', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.deleteProductById);

export default router;
