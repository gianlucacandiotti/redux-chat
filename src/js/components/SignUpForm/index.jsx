import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import generateValidations from 'utils/generateValidations';
import Input from 'components/Input';
import Button from 'components/Button';

const validationRules = {
  email: [
    'required',
    'email',
  ],
};

export const SignUpForm = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <Field name="email" component={Input} type="email" label="Email" />
      <Field name="name" component={Input} type="text" label="Name" />
      <Field name="password" component={Input} type="password" label="Password" />
      <Field name="confirmPassword" component={Input} type="password" label="Confirm Password" />
      <Button className="button is-primary">
        Sign Up!
      </Button>
    </form>
  </div>
);

export default reduxForm({
  form: 'signup',
  validate: generateValidations(validationRules),
})(SignUpForm);
