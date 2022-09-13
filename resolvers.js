import { nanoid } from "nanoid";

class Product {
  constructor(id, { productName, price, category, productToppings }) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.category = category;
    this.productToppings = productToppings;
  }
}

const productHolder = {};

const resolvers = {
  getProduct: ({ id }) => {
    console.log("Product Holder: ", productHolder[id].price);
    return new Product(id, productHolder[id]);
  },
  createProduct: ({ input }) => {
    let id = nanoid();
    productHolder[id] = input;
    return new Product(id, input);
  },
};

export default resolvers;
