import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import * as argon2 from "argon2";
import { User } from "models";

@Resolver(User)
export class RegisterResolver {
  @Query(() => String)
  hello() {
    return "hello world";
  }

  @FieldResolver()
  name(@Root() parent: User) {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Mutation(() => User)
  async register(
    @Arg("password") password: string,
    @Arg("firstname") firstName: string,
    @Arg("lastname") lastName: string,
    @Arg("email") email: string,
    @Arg("age") age: number
  ): Promise<User> {
    const hashedPassword = await argon2.hash(password);

    const user = await User.query().insert({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      age,
    });

    return user;
  }
}
