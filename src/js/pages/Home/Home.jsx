import React from 'react';
import NavBar from 'components/NavBar/NavBar';

const Home = (props) => {
  const navRight = [
    {
      text: 'About',
      link: '/',
      index: true,
    },
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
          {props.children}
        </div>
      </section>
    </div>
  );
};

export default Home;
