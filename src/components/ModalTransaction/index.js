import React, { useEffect } from 'react';
import { Modal, Row, Col, Input, Form, DatePicker, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';
import { ThemeProvider } from 'styled-components';
import {
  Creators as ModalTransactionsCreators,
  ModalTransactionTypes,
} from 'store/ducks/modalTransactionReducer';
import { Creators as TransactionsCreators } from 'store/ducks/transactionsReducer';
import { BRLtoFloat, maskMoney, formatCurrencyBRL } from 'helpers';
import {
  ModalHeader,
  Button,
  ModalHeaderTitle,
  ModalHeaderIconClose,
} from './styles';
import 'moment/locale/pt-br';

const { Option } = Select;

moment.locale('pt-br');

const ModalTransaction = ({
  form: { getFieldDecorator, validateFields, validateFieldsAndScroll },
}) => {
  const {
    transactionType,
    visable,
    transactionLoading,
    isEdit,
    transaction,
  } = useSelector(store => store.modalTransactionReducer);

  const categories = useSelector(store => {
    if (transactionType === ModalTransactionTypes.RECIPE)
      return store.categoriesReducer.data.recipe || [];
    return store.categoriesReducer.data.expense || [];
  });
  const accounts = useSelector(store => store.accountsReducer.data);

  useEffect(() => {
    validateFields(['value']);
  }, []);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(ModalTransactionsCreators.closeModal());
  };

  const handleFormSubmit = () => {
    try {
      validateFieldsAndScroll((err, transactionSubmit) => {
        if (!err) {
          if (isEdit) {
            return dispatch(
              TransactionsCreators.updateTransaction({
                ...transactionSubmit,
                value: BRLtoFloat(transactionSubmit.transaction_value),
                created_at: transactionSubmit.created_at.toISOString(),
                id: transaction.id,
              })
            );
          }
          dispatch(
            TransactionsCreators.postTransaction({
              ...transactionSubmit,
              value: BRLtoFloat(transactionSubmit.transaction_value),
              created_at: transactionSubmit.created_at.toISOString(),
            })
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ThemeProvider
        theme={
          transactionType === ModalTransactionTypes.RECIPE
            ? { primary: 'green' }
            : { primary: 'red' }
        }
      >
        <Modal
          bodyStyle={{ padding: 0 }}
          closable={false}
          width="700px"
          visible={visable}
          destroyOnClose
          footer={
            <>
              <Button
                key="back"
                onClick={() => {
                  handleCloseModal();
                }}
              >
                Cancelar
              </Button>
              <Button
                loading={transactionLoading}
                key="submit"
                onClick={() => {
                  handleFormSubmit();
                }}
              >
                Salvar
              </Button>
            </>
          }
          okButtonProps={{ style: { backgroundColor: 'green' } }}
        >
          <ModalHeader>
            <ModalHeaderTitle>
              {transactionType === ModalTransactionTypes.RECIPE
                ? isEdit
                  ? 'Editar Receita'
                  : 'Criar Receita'
                : isEdit
                ? 'Editar Despesa'
                : 'Criar Despesa'}
            </ModalHeaderTitle>
            <ModalHeaderIconClose
              onClick={() => {
                handleCloseModal();
              }}
              type="close"
            />
          </ModalHeader>
          <Form
            style={{ padding: '20px' }}
            className="ant-advanced-search-form"
          >
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item label="Valor">
                  {getFieldDecorator('transaction_value', {
                    initialValue: formatCurrencyBRL(transaction.value),
                    normalize: value => {
                      return maskMoney(value);
                    },
                    rules: [
                      {
                        required: true,
                        message: 'O valor é obrigatório',
                      },
                      {
                        validator: (rule, value, callback) => {
                          const transactionValue = BRLtoFloat(value);
                          if (transactionValue <= 0)
                            callback('O valor não pode ser zero');
                          else callback();
                        },
                      },
                    ],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Data">
                  {getFieldDecorator('created_at', {
                    initialValue: moment(),
                    rules: [
                      {
                        required: 'true',
                        message: 'A data é obrigatória',
                      },
                    ],
                  })(
                    <DatePicker
                      style={{ width: '100%' }}
                      placeholder="Seleciona a data"
                      format="DD/MM/YYYY"
                      showToday={false}
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item label="Descrição" hasFeedback>
                  {getFieldDecorator('description', {
                    initialValue: transaction.description,
                    rules: [
                      {
                        required: true,
                        message: 'A descrição é obrigatória',
                      },
                    ],
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="Categoria" hasFeedback>
                  {getFieldDecorator('category_id', {
                    initialValue: transaction.category_id,
                    rules: [
                      {
                        required: true,
                        message: 'A categoria é obrigatória',
                      },
                    ],
                  })(
                    <Select placeholder="Seleciona a categoria">
                      {categories.map(category => (
                        <Option key={category.id} value={category.id}>
                          {category.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Conta" hasFeedback>
                  {getFieldDecorator('account_id', {
                    initialValue: transaction.account_id,
                    rules: [
                      {
                        required: true,
                        message: 'A  conta é obrigatória',
                      },
                    ],
                  })(
                    <Select placeholder="Seleciona a conta">
                      {accounts.map(account => (
                        <Option key={account.id} value={account.id}>
                          {account.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

const FormModalTransaction = Form.create({ name: 'modalTransaction' })(
  ModalTransaction
);

export default FormModalTransaction;
