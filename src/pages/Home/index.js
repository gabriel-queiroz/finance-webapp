import React, { Component } from 'react';
import { Card, Row, Col, Icon } from 'antd';
import { connect } from 'react-redux';
import { Statistic, AnimatedCurrency } from './styles';
import * as Selectors from '../../store/selectors/transactions';

class Home extends Component {
  componentDidMount() {}

  formatValue = value =>
    value.toLocaleString('pt-br', {
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
          <Col span={8}>
            <Card>
              <Statistic
                title="Receitas"
                value={this.props.recipes}
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
          <Col span={8}>
            <Card>
              <Statistic
                title="Despesas"
                value={this.props.expenses}
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
          <Col span={8}>
            <Card>
              <Statistic
                title="Balanço do Mês"
                value={this.props.recipes - this.props.expenses}
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

const mapStateToProps = state => ({
  transactions: state.transactionsReducer.data,
  expenses: Selectors.sumExpenses(state),
  recipes: Selectors.sumRecipes(state),
});

export default connect(
  mapStateToProps,
  null
)(Home);
