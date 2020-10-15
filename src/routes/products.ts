import app, { Request, Response } from "express";
import ProductsController from "@src/controllers/products";

const router = app.Router();

interface Product {
  name: string;
  description: string;
  price: number;
}

const productController = new ProductsController();

router.get(
  "/",
  (req: Request, res: Response): Array<Product> =>
    productController.get(req, res)
);

export default router;
