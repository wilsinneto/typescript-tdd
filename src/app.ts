import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

let products: Array<Object> = [{
  name: 'Default product',
  description: 'product description',
  price: 100
}];

app.get('/', (_, res: any) => res.send('Hello World!'));
app.get("/products", (_, res: any) => res.send(products));

export default app;
