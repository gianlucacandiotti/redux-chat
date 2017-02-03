import React, { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Form from 'factories/Form';

class SignUp extends Component {
  state = {
    form: Form({
      email: {
        name: 'email',
        type: 'email',
        label: 'Email:',
        required: true,
      },
      username: {
        name: 'username',
        type: 'text',
        label: 'Username:',
        required: true,
      },
      password: {
        name: 'password',
        type: 'password',
        label: 'Password:',
        required: true,
      },
      passwordConfirm: {
        name: 'passwordConfirm',
        type: 'password',
        label: 'Confirm Password:',
        required: true,
      },
    }),
  };

  setValue = (key, value) => {
    const {
      form,
    } = this.state;

    this.setState({
      form: form.updateValue(key, value),
    });
  };

  validateInput = (key) => {
    const {
      form,
    } = this.state;


  };

  isValid = () => (
    Object.keys(this.state).reduce((prev, next) => (
      prev && !!this.state[next]
    ), true)
  );

  render() {
    const {
      form,
    } = this.state;

    return (
      <div>
        <Panel title="Sign Up">
          <form>
            <Input
              data={form.email}
              onChangeHandler={this.setValue}
              onBlurHandler={this.validateInput}
            />
            <Input
              data={form.username}
              onChangeHandler={this.setValue}
            />
            <Input
              data={form.password}
              onChangeHandler={this.setValue}
            />
            <Input
              data={form.passwordConfirm}
              onChangeHandler={this.setValue}
            />
            <Button className="button is-primary" disabled={!this.isValid()}>
              Sign Up!
            </Button>
          </form>
        </Panel>
      </div>
    )
  }
}

export default SignUp;
