import { Length, IsEmail } from "class-validator";
import { checkIfEmailExists } from "helpers";
import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterUserInputType {
  @Field()
  @Length(1, 255)
  firstName: string;

  @Field()
  @Length(1, 255)
  lastName: string;

  @Field()
  @IsEmail()
  @checkIfEmailExists({ message: "Email already in use" })
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  age: number;
}
