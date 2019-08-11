import React from 'react';
import 'antd/dist/antd.css';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import {
  Creators as modalTransactioCreators,
  ModalTransactionTypes,
} from '../../store/ducks/modalTransactionReducer';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Header,
  Sider,
  SiderHeader,
  Content,
  Menu,
  Footer,
  Icon,
  User,
  UserName,
  UserImage,
} from './styles';
import ModalTransaction from '../ModalTransaction';

class Dashboard extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  renderHeader = () => (
    <Header>
      <Icon type="menu" style={{ fontSize: '20px' }} onClick={this.toggle} />
      <User>
        <UserName>Bem vindo, Gabriel Queiroz</UserName>
        <UserImage src="https://scontent.fnat10-1.fna.fbcdn.net/v/t1.0-1/p160x160/49748572_2233664623334166_926535011090300928_n.jpg?_nc_cat=103&_nc_oc=AQm2uLo9oJCHnkm47qdcL52Qsvlq5E6UixN3oEEiy7IoQRDsNpz__Ux-DN0kCb3XKn4&_nc_ht=scontent.fnat10-1.fna&oh=26a7cf13577175b16a4cf8615f3c3803&oe=5DA309FA" />
      </User>
    </Header>
  );

  render() {
    const { push } = this.props.history;
    return (
      <>
        <Container>
          <Sider
            width="300"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <SiderHeader>
              <div>
                <img
                  src="https://web.mobills.com.br/static/media/logo.39958c11.svg"
                  alt=""
                />
                {!this.state.collapsed && <h1>Firebase</h1>}
              </div>
            </SiderHeader>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
              <Menu.Item key="0" onClick={() => push('/')}>
                <Icon type="home" />
                <span>Home</span>
              </Menu.Item>
              <Menu.Item key="1" onClick={() => push('/transacoes')}>
                <Icon type="unordered-list" />
                <span>Transações</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={() => push('/contas')}>
                <Icon type="bank" />
                <span>Contas</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={() => push('')}>
                <Icon type="bar-chart" />
                <span>Relatórios</span>
              </Menu.Item>
              <Menu.Item key="4" onClick={() => push('')}>
                <Icon type="appstore" />
                <span>Categorias</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Container>
            {this.renderHeader()}
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
                height: 'auto',
              }}
            >
              {this.props.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Desenvolvido por Gabriel Queiróz
            </Footer>
          </Container>
          <ModalTransaction />
          <Fab
            mainButtonStyles={{ backgroundColor: '#1890ff' }}
            icon={<Icon type="plus" />}
          >
            <Action
              onClick={() => this.props.openModalTransation(ModalTransactionTypes.RECIPE)
              }
              style={{ backgroundColor: 'green' }}
              text="Nova Receita"
            >
              <Icon type="plus" />
            </Action>
            <Action
              onClick={() => this.props.openModalTransation(ModalTransactionTypes.EXPENSE)
              }
              style={{ backgroundColor: 'red' }}
              text="Nova Despesa"
            >
              <Icon type="minus" />
            </Action>
          </Fab>
        </Container>
        <ToastContainer />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { openModalTransation: modalTransactioCreators.openModal },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Dashboard);
