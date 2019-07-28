import styled from 'styled-components';
import { Statistic as StatisticAntd, Icon as IconAnt } from 'antd';

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
