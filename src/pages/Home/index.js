import React, { Component } from 'react';
import {
  Card, Row, Col, Icon,
} from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Statistic, AnimatedCurrency } from './styles';
import { Creators } from '../../store/ducks/transactionsReducer';

class Home extends Component {
  componentDidMount() {
    const { getTransactions } = this.props;
    getTransactions();
  }

  formatValue = value => value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  render() {
    return (
      <div
        style={{
          padding: '30px',
        }}
      >
        <Row justify="space-around" gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="Saldo Atual"
                value={1100.28}
                formatter={value => (
                  <AnimatedCurrency
                    value={value}
                    formatValue={this.formatValue}
                  />
                )}
                prefix={<Icon type="bank" />}
                valueColor="#0076be"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Receitas"
                value={1700.28}
                valueColor="#3f8600"
                prefix={<Icon type="arrow-up" />}
                formatter={value => (
                  <AnimatedCurrency
                    value={value}
                    formatValue={this.formatValue}
                  />
                )}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Despesas"
                value={900.32}
                valueColor="#cf1322"
                prefix={<Icon type="arrow-down" />}
                formatter={value => (
                  <AnimatedCurrency
                    value={value}
                    formatValue={this.formatValue}
                  />
                )}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Balanço do Mês"
                value={2000.3}
                valueColor="#009688"
                prefix={<Icon type="arrow-right" />}
                formatter={value => (
                  <AnimatedCurrency
                    value={value}
                    formatValue={this.formatValue}
                  />
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getTransactions: Creators.getTransactions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Home);
