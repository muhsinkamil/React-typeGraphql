import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema, Int, Query, Resolver } from "type-graphql";

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

  const apolloServer = new ApolloServer({ schema });
  const app = Express();

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/api/graphql" });

  app.listen(3000, () =>
    console.log(
      `app started in http://localhost:3000${apolloServer.graphqlPath} `
    )
  );
};

main();
