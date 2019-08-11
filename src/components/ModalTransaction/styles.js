import styled from 'styled-components';
import { Button as ButtonAnt, Icon } from 'antd';

export const ModalHeader = styled.header`
  height: 70px;
  width: 100%;
  background-color: ${props => props.theme.primary};
  color: #ffffff;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const ModalHeaderTitle = styled.h1`
  color: #ffffff;
  margin: 0;
`;

export const ModalHeaderIconClose = styled(Icon)`
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
`;

export const Button = styled(ButtonAnt)`
  background-color: ${props => props.theme.primary} !important;
  color: #ffffff !important;
  outline: none;
`;
