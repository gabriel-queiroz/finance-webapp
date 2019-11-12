import React from 'react';

// import { Container } from './styles';

const NotFound = props => {
  const {
    history: { push },
  } = props;
  return (
    <div>
      <h1>Not found</h1>
      <button onClick={() => push('/beamir')}>not found</button>
      <button onClick={() => push('/login')}>login</button>
    </div>
  );
};

export default NotFound;
