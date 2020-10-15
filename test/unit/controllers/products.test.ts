import ProductsController from "@src/controllers/products";

jest.createMockFromModule("@src/controllers/products");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Controllers: Products", () => {
  // it("We can check if the consumer called the class constructor", () => {
  //   const productController = new ProductsController();
  //   expect(productController).toHaveBeenCalledTimes(1);
  // });
  describe("get() products", () => {
    const defaultProduct = [
      {
        name: "Default product",
        description: "product description",
        price: 100,
      },
    ];
    it("should return a list of products", () => {
      const productControllers = new ProductsController();

      const req: any = {};
      const res: any = {
        send: jest.fn().mockReturnValue(defaultProduct),
      };

      const response = productControllers.get(req, res);
      expect(response).toEqual(defaultProduct);
    });
  });
});
