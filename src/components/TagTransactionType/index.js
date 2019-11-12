import React from 'react';
import { translateTransactionType } from 'helpers';
import { Tag } from './styles';

const TagTransactionType = ({ type }) => (
  <span>
    <Tag type={type}>{translateTransactionType(type)}</Tag>
  </span>
);

export default TagTransactionType;
