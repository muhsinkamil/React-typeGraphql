import { Arg, Mutation, Query, Resolver } from "type-graphql";
import * as argon2 from "argon2";
import { User } from "models";
import { RegisterUserInputType } from "./registerInput";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  hello() {
    return "Hello";
  }

  @Mutation(() => User)
  async register(
    @Arg("data")
    { firstName, lastName, email, password, age }: RegisterUserInputType
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
