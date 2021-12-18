require("dotenv").config();
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "type-graphql";
import setUpDb from "../models";
import { Environment } from "types";
import resolvers from "modules";

const main = async () => {
  const schema = await buildSchema({
    resolvers,
  });

  setUpDb(process.env.ENVIRONMENT as Environment);
  const apolloServer = new ApolloServer({ schema });
  const app = Express();

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/api/graphql" });

  app.listen(process.env.APP_PORT, () =>
    console.log(
      `app started in ${process.env.BASE_PATH}${apolloServer.graphqlPath} `
    )
  );
};

main();
