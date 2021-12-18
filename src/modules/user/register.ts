import { Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return "hello world";
  }

  @Mutation(() => Int)
  async register() {
    return 2;
  }
}
