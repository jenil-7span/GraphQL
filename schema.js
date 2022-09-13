import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
      id: ID
      productName: String
      price: Int
      category: String
      productToppings: [productTopping]
    }

    type productTopping {
      firstTopping: String
      secondTopping: String
    }

    type Query{
      getProduct(id: ID): Product
      
    }

    input ProductInput {
      id: ID
      productName: String!
      price: Int!
      category: String
      productToppings: [productToppingInput]!
    }

    input productToppingInput {
      firstTopping: String
      secondTopping: String
    }

    type Mutation{
      createProduct(input: ProductInput): Product
    }
`);

export default schema;
