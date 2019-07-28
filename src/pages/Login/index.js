import React from 'react';

// import { Container } from './styles';

const Login = (props) => {
  const {
    history: { push },
  } = props;
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => push('/beamir')}>not found</button>
      <button onClick={() => push('/')}>home</button>
    </div>
  );
};

export default Login;
