import { Id, Model } from "objection";
import { Field, ID, ObjectType, Root } from "type-graphql";

@ObjectType()
export default class User extends Model {
  @Field(() => ID)
  id: Id;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => String)
  name(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Field()
  email: string;

  password: string;

  @Field()
  age: number;

  static jsonSchema = {
    type: "object",
    required: ["firstName", "lastName", "email", "password"],

    properties: {
      id: { type: "integer" },
      firstName: { type: "string", minLength: 1, maxLength: 255 },
      lastName: { type: "string", minLength: 1, maxLength: 255 },
      email: { type: "string", minLength: 1, maxLength: 255 },
      password: { type: "string", minLength: 1, maxLength: 255 },
      age: { type: "number" },
    },
  };

  // Table name is the only required property.
  static tableName = "users";
}
