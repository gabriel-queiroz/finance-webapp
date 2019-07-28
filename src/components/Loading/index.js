import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Container, Title } from './styles';

const Loading = () => (
  <Container>
    <ClipLoader sizeUnit="px" color="#ffffff" size={50} loading />
    <Title>Carregando...</Title>
  </Container>
);

export default Loading;
