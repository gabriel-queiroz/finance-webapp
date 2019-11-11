import React from 'react';
import { Tag } from 'antd';

const transactionTypes = {
  RECIPE: 'RECIPE',
  EXPENSE: 'EXPENSE',
};

const TagTransactionType = ({ type }) => (
  <span>
    <Tag color={type === transactionTypes.EXPENSE ? 'red' : 'green'}>
      {type === transactionTypes.EXPENSE ? 'DESPESA' : 'RECEITA'}
    </Tag>
  </span>
);

export default TagTransactionType;
