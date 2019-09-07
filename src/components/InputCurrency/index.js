import React from 'react';
import { maskMoney } from 'helpers';
import { Input } from 'antd';

const InputCurrency = ({ onChange, value, onBlur}) => (<Input  value={value} onBlur={onBlur} onChange={(e) => {
  const {value} = e.target;
  onChange(maskMoney(value))
}}/>)

export default InputCurrency;
