import React from 'react';
import NavBar from 'components/NavBar/NavBar';

const Login = () => {
  const navRight = [
    {
      text: 'Login',
      link: 'login',
    },
    {
      text: 'Sign Up',
      link: 'signup',
    },
  ];

  return (
    <div>
      <NavBar navRight={navRight} />
      <section className="section">
        <div className="container">
          Login!
        </div>
      </section>
    </div>
  );
};

export default Login;
