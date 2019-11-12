import styled from 'styled-components';
import { Tag as TagAnt } from 'antd';
import { transactionTypes } from 'helpers';
import { colors } from 'styles';

export const Tag = styled(TagAnt).attrs(props => ({
  color:
    props.type === transactionTypes.EXPENSE
      ? colors.EXPENSE_COLOR
      : colors.RECIPE_COLOR,
}))``;
