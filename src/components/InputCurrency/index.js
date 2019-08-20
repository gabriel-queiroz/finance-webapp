import React from 'react';
import NumberFormat from 'react-number-format';
import { Input } from 'antd';

const InputCurrency = ({ onChange, onBlur }) => (
  <NumberFormat
    customInput={Input}
    thousandSeparator="."
    decimalSeparator=","
    decimalScale={2}
    prefix="R$ "
    onValueChange={(values) => {
      const { value } = values;
      onChange(value);
    }}
    onBlur={onBlur}
  />
);

export default InputCurrency;
