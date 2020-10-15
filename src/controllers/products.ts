import { Request, Response } from "express";

interface Product {
  name: string;
  description: string;
  price: number;
}

class ProductsControllers {
  // constructor() {
  //   this.get;
  // }

  public get(req: Request, res: Response): Response<Product> {
    const defaultProduct: Array<Product> = [
      {
        name: "Default product",
        description: "product description",
        price: 100,
      },
    ];
    return res.send(defaultProduct);
  }
}

export default ProductsControllers;
