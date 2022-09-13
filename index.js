import express from "express";
import resolvers from "./resolvers.js";
import schema from "./schema.js";
import { graphqlHTTP } from "express-graphql";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello");
});

const rootValue = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server started at port http://localhost:${PORT}`);
});
