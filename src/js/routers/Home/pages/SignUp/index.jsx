import React, { Component } from 'react';
import axios from 'axios';
import Panel from 'components/Panel';
import SignUpForm from 'components/SignUpForm';

class SignUp extends Component {
  handleSignUpSubmit = (values) => {
    axios.post('/signup', values)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('error works');
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <Panel title="Sign Up">
          <SignUpForm onSubmit={this.handleSignUpSubmit} />
        </Panel>
      </div>
    )
  }
}

export default SignUp;
