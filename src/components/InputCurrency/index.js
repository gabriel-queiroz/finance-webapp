import React from 'react';
import NumberFormat from 'react-number-format';
import { Input } from 'antd';

const InputCurrency = ({ onChange, onBlur, value }) => (
  <NumberFormat
    customInput={Input}
    decimalSeparator=","
    value={Math.abs(value)}
    decimalScale={2}
    prefix="R$ "
    onValueChange={(values) => {
      const { value, floatValue } = values;
      onChange(floatValue);
    }}
    onBlur={onBlur}
  />
);

export default InputCurrency;
