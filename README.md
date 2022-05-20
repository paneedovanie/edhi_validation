# Validation

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

<p style="color: red; background-color: #f5f5f5; padding: 5px; border-radius: 3px;">newRule(condition: (value: any, values: InputType) => boolean, message: string | (name: string) => string)</p>

<p style="color: red; background-color: #f5f5f5; padding: 5px; border-radius: 3px;">isRequired(message: string | (name: string) => string)</p>

<p style="color: red; background-color: #f5f5f5; padding: 5px; border-radius: 3px;">isNumber(message: string | (name: string) => string)</p>

<p style="color: red; background-color: #f5f5f5; padding: 5px; border-radius: 3px;">isBoolean(message: string | (name: string) => string)</p>

<p style="color: red; background-color: #f5f5f5; padding: 5px; border-radius: 3px;">isEmail(message: string | (name: string) => string)</p>

<p style="color: red; background-color: #f5f5f5; padding: 5px; border-radius: 3px;">isObject(message: string | (name: string) => string)</p>

<p style="color: red; background-color: #f5f5f5; padding: 5px; border-radius: 3px;">isArray(message: string | (name: string) => string)</p>

<p style="color: red; background-color: #f5f5f5; padding: 5px; border-radius: 3px;">isMin(minValue: number, message: string | (name: string) => string)</p>

<p style="color: red; background-color: #f5f5f5; padding: 5px; border-radius: 3px;">isMax(maxValue: number, message: string | (name: string) => string)</p>
