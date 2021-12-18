import { Id, Model } from "objection";

export default class User extends Model {
  id: Id;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;

  static jsonSchema = {
    type: "object",
    required: ["firstName", "lastname", "email", "password"],

    properties: {
      id: { type: "integer" },
      firstName: { type: "string", minLength: 1, maxLength: 255 },
      lastName: { type: "string", minLength: 1, maxLength: 255 },
      email: { type: "string", minLength: 1, maxLength: 255, unique: true },
      password: { type: "string", minLength: 1, maxLength: 255 },
      age: { type: "number" },
    },
  };

  // Table name is the only required property.
  static tableName = "users";
}
