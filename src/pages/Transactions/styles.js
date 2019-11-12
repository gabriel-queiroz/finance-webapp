import styled from 'styled-components';
import { colors } from 'styles';
import { transactionTypes } from 'helpers';

export const TransactionValue = styled.span`
  color: ${props =>
    props.type === transactionTypes.EXPENSE
      ? colors.EXPENSE_COLOR
      : colors.RECIPE_COLOR};
  font-weight: bold;
`;
