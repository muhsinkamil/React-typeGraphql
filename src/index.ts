require("dotenv").config();
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema, Int, Query, Resolver } from "type-graphql";
import setUpDb from "../models";
import { Environment } from "types";

@Resolver()
class HelloResolver {
  @Query(() => String)
  hello() {
    return "hello world";
  }

  @Query(() => Int)
  heyThere() {
    return 2;
  }
}

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
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
