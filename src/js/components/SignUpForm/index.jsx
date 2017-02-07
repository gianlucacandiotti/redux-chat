import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form/immutable';
import Button from 'components/Button';

export const SignUpForm = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field name="confirmPassword" component="input" type="password" />
      </div>
      <Button className="button is-primary">
        Sign Up!
      </Button>
    </form>
  </div>
);

export default reduxForm({
  form: 'signup',
})(SignUpForm);
