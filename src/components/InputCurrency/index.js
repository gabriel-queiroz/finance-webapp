import React from 'react';
import { maskMoney } from 'helpers';
import { Input } from 'antd';

const InputCurrency = ({ onChange, onBlur, value }) => {
  return (
    <Input
      onBlur={onBlur}
      onChange={e => {
        onChange(maskMoney(e.target.value));
      }}
      value={maskMoney(value)}
    />
  );
};
export default InputCurrency;
