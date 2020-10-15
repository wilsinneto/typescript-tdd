import request, { Response } from "supertest";
import app from "@src/app";

interface Product {
  name: string;
  description: string;
  price: number;
}

describe("Routes: Products", () => {
  const defaultProduct: Product = {
    name: "Default product",
    description: "product description",
    price: 100,
  };

  describe("GET /products", () => {
    it("should return a list of products", () => {
      request(app)
        .get("/products")
        .end((_: Response, res: Response): void => {
          expect(res.body[0]).toEqual(defaultProduct);
        });
    });
  });
});
