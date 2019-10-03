import React from 'react';
import { maskMoney } from 'helpers';
import { Input } from 'antd';

const InputCurrency = ({ onChange, value, onBlur }) => (
  <Input
    value={
      value
        ? value.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })
        : 0
    }
    onBlur={onBlur}
    onChange={e => {
      const { number } = e.target;
      onChange(maskMoney(number));
    }}
  />
);
export default InputCurrency;
