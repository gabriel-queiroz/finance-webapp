import styled from 'styled-components';
import { Layout, Menu as MenuAnt, Icon as IconAnt } from 'antd';

export const Container = styled(Layout)`
  height: 100vh;
`;

export const Header = styled(Layout.Header)`
  background-color: #ffffff !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Sider = styled(Layout.Sider)``;

export const SiderHeader = styled.div`
  height: 100px;
  div {
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  h1 {
    color: #ffffff;
    font-size: 30px;
    margin: 0;
  }
  img {
    height: 40px;
    width: 40px;
    margin: 0px 15px;
  }
`;

export const Content = styled(Layout.Content)``;

export const Menu = styled(MenuAnt)``;

export const Footer = styled(Layout.Footer)``;

export const Icon = styled(IconAnt)``;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 10px;
`;

export const UserName = styled.h2`
  margin: 0;
  padding: 0;
  color: #757575;
  font-size: 15px;
  font-weight: normal;
`;
