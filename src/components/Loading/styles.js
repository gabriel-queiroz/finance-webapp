import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: ${props => (props.isDashboard ? '100%' : '100vh')};
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDashboard ? '#ffffff' : '#1890ff')};
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${props => (props.isDashboard ? '#1890ff' : '#ffffff')};
  font-size: 35px;
  font-weight: bold;
`;
