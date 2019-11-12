import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { colors } from 'styles';
import { Container, Title } from './styles';

const Loading = ({ isDashboard }) => (
  <Container isDashboard={isDashboard}>
    <ClipLoader
      sizeUnit="px"
      color={isDashboard ? colors.BLUE_PRIMARY : colors.WHITE}
      size={50}
      loading
    />
    {!isDashboard && <Title>Carregando...</Title>}
  </Container>
);

export default Loading;
