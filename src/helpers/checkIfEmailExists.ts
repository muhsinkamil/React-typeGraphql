import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { User } from "models";

@ValidatorConstraint({ async: true })
export class checkIfEmailExistsConstraint
  implements ValidatorConstraintInterface
{
  validate(email: string) {
    return User.query()
      .findOne({ email })
      .then((user) => {
        if (user) return false;
        return true;
      });
  }
}

export function checkIfEmailExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: checkIfEmailExistsConstraint,
    });
  };
}
