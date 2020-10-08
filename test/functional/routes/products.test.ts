import request from "supertest";
import app from "@src/app";

describe("Routes: Products", () => {
  
  const defaultProduct: Object = {
    name: 'Default product',
    description: 'product description',
    price: 100
  };

  describe("GET /products", () => {
    it("should return a list of products", () => {
      request(app).get("/products").end((_, res: any) => {
        expect(res.body[0]).toEqual(defaultProduct);
      });
    });
  });

});
