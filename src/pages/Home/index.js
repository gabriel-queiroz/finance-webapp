import React from 'react';
import {
  Card, Row, Col, Icon,
} from 'antd';
import { Statistic, Currency } from './styles';

// import { Container } from './styles';

const Home = (props) => {
  const {
    history: { push },
  } = props;
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
              valueColor="#0076be"
              prefix={(
                <>
                  {' '}
                  <Icon type="bank" /> <Currency>R$</Currency>{' '}
                </>
)}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Receitas"
              value={1700.28}
              valueColor="#3f8600"
              prefix={(
                <>
                  {' '}
                  <Icon type="arrow-up" />
                  <Currency>R$</Currency>{' '}
                </>
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
              prefix={(
                <>
                  {' '}
                  <Icon type="arrow-down" />
                  <Currency>R$</Currency>{' '}
                </>
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
              prefix={(
                <>
                  {' '}
                  <Icon type="arrow-right" />
                  <Currency>R$</Currency>{' '}
                </>
)}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
