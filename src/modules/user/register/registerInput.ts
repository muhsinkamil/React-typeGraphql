import { MaxLength, Length, isEmail, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterUserInputType {
  @Field()
  @MaxLength(255)
  firstName: string;

  @Field()
  @MaxLength(255)
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  age: number;
}
