import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./resolvers/UserResolver";
import typeDefs from "./graphql/schema";
import { config } from "dotenv";
import { resolve } from "path";

// import mongoose from "mongoose";

config({ path: resolve(__dirname, "../.env.example") });

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.get("/", (_, res) => {
  res.send(
    "<p>This is the main route being served at <a href=\"localhost:8000\">http://localhost:8000</a><br/> go to <a href=\"localhost:8000/graphql\">http://localhost:8000/graphql</a> for GraphQL Client</p>"
  );
});

// try {
//   mongoose.connect(`${process.env.MONGO_URI}`, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   });
// } catch (error) {
//   console.log(error);
// }

app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
);
