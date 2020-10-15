import app, { Request, Response } from "express";
import productsRoute from "./products";

const router = app.Router();

router.get(
  "/",
  (req: Request, res: Response): Response => res.send("Hello World!")
);

router.use("/products", productsRoute);

export default router;
