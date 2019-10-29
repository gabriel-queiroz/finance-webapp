/* eslint-disable react/prop-types */
import React from 'react';
import { DatePicker, Form, Input, InputNumber, TimePicker, Select } from 'antd';
import InputCurrency from '../InputCurrency';

const FormItem = Form.Item;
const { Option } = Select;

const CreateAntField = AntComponent => ({
  field,
  form,
  hasFeedback,
  label,
  selectOptions,
  submitCount,
  type,

  ...props
}) => {
  let onInputChange;
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  if (field.name === 'value') {
    onInputChange = value => form.setFieldValue(field.name, value);
  } else {
    onInputChange = ({ target: { value } }) =>
      form.setFieldValue(field.name, value);
  }
  const onChange = value => form.setFieldValue(field.name, value);
  const onBlur = () => form.setFieldTouched(field.name, true);
  return (
    <div className="field-container">
      <FormItem
        label={label}
        hasFeedback={!!((hasFeedback && submitted) || (hasFeedback && touched))}
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? 'error' : 'success'}
      >
        <AntComponent
          {...field}
          {...props}
          onBlur={onBlur}
          onChange={type ? onInputChange : onChange}
        >
          {selectOptions &&
            selectOptions.map(item => (
              // eslint-disable-next-line no-underscore-dangle
              <Option key={item.id}>{item.name}</Option>
            ))}
        </AntComponent>
      </FormItem>
    </div>
  );
};

export const AntSelect = CreateAntField(Select);
export const AntDatePicker = CreateAntField(DatePicker);
export const AntInput = CreateAntField(Input);
export const AntInputNumber = CreateAntField(InputNumber);
export const AntTimePicker = CreateAntField(TimePicker);
export const AntInputCurrency = CreateAntField(InputCurrency);
