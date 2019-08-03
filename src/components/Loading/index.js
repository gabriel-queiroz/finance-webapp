import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Container, Title } from './styles';

const Loading = ({ isDashboard }) => (
  <Container isDashboard={isDashboard}>
    <ClipLoader sizeUnit="px" color={isDashboard ? '#1890ff' : '#ffffff'} size={50} loading />
    {!isDashboard && <Title>Carregando...</Title>}
  </Container>
);

export default Loading;
