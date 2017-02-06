import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form/immutable';

export const SignUpFormTest = ({ handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field name="confirmPassword" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default reduxForm({
  form: 'signUpTest'
})(SignUpFormTest);
