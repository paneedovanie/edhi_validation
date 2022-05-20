# Validation

Simple, easy to use and small size package for validation

## Installation

```
npm install edhi_validation
```

## Usage

Using synchronous validation

```
import Rules, { validateAll } from 'edhi_validation';

class UserSchema {
	id = new Rules({ default: 1 }).isNumber();
	fullname = new Rules().isRequired().isString();
	age = new Rules().isRequired().isNumber();
}

const data = {};

validateAll(UserSchema, data); // { fullname: [ 'The field fullname is required', 'The field fullname must be a string' ], age: [ 'The field age is required', 'The field age must be a number' ] }

data; // { id: 1 }
```

Using asynchronous validation

```
import Rules, { validateAllAsync } from 'edhi_validation';

class CredentialSchema {
	email = new Rules({ name: 'E-mail' })
		.isRequired()
		.isEmail()
		.newRule(
			async () => false,
			(name: string) => `The field ${name} is already exists`
		);
	password = new Rules().isRequired().isString().isMin(6);
}

const data = {
	email: 'samplewrong@email.com',
};

(async () => {
	await validateAllAsync(CredentialSchema, data); // { email: [ 'The field E-mail is already exists' ], password: [ 'The field password is required', 'The field password must be a string', 'The field password minimum is 6' ] }
	data; // { email: 'samplewrong@email.com' }
})();
```

The arrangement of rules from schema will be the arrangement of error massages

```
  ...
  password = new Rules().isString().isMin(6).isRequired();
  ...

  ...
  await validateAllAsync(CredentialSchema, data); // { email: [ 'The field E-mail is already exists' ], password: [ 'The field password must be a string', 'The field password minimum is 6','The field password is required' ] }
  ...
```

## Methods

- newRule(condition: (value: any, values: InputType) => boolean, message: string
  | (name: string) => string)

- isRequired(message: string | (name: string) => string)

- isNumber(message: string | (name: string) => string)

- isBoolean(message: string | (name: string) => string)

- isEmail(message: string | (name: string) => string)

- isObject(message: string | (name: string) => string)

- isArray(message: string | (name: string) => string)

- isMin(minValue: number, message: string | (name: string) => string)

- isMax(maxValue: number, message: string | (name: string) => string)

Help me improve this package
[GitHub Repository](https://github.com/paneedovanie/edhi_validation)
