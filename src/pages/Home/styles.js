import styled from 'styled-components';
import { Statistic as StatisticAntd } from 'antd';
import AnimatedNumber from 'animated-number-react';

export const Statistic = styled(StatisticAntd).attrs(props => ({
  decimalSeparator: ',',
  groupSeparator: '.',
  precision: 2,
  valueStyle: {
    color: props.valueColor,
  },
}))`
  text-transform: uppercase;
  margin-left: 10px;
  font-weight: bold;
`;

export const Currency = styled.span`
  margin-left: 10px;
`;

export const AnimatedCurrency = styled(AnimatedNumber).attrs({
  duration: 300,
  delay: 300,
})``;
