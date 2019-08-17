import { Modal, Row, Col } from 'antd';
import { Field, withFormik, Form } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { ThemeProvider } from 'styled-components';
import {
  ModalHeader,
  Button,
  ModalHeaderTitle,
  ModalHeaderIconClose,
} from './styles';
import { isRequired } from '../ValidateFields/ValidateFields';
import {
  AntDatePicker,
  AntInput,
  AntSelect,
  AntInputCurrency,
} from '../CreateAntFields/CreateAntFields';
import {
  Creators,
  ModalTransactionTypes,
} from '../../store/ducks/modalTransactionReducer';
import { Creators as TransactionsCreators } from '../../store/ducks/transactionsReducer';
import 'moment/locale/pt-br';

moment.locale('pt-br');

const ModalTransaction = ({
  visable,
  closeModal,
  submitCount,
  handleSubmit,
  accounts,
  categories,
  modalTransactionType,
}) => (
  <div>
    <ThemeProvider
      theme={
        modalTransactionType === ModalTransactionTypes.RECIPE
          ? { primary: 'green' }
          : { primary: 'red' }
      }
    >
      <Modal
        onOk={handleSubmit}
        bodyStyle={{ padding: 0 }}
        closable={false}
        width="700px"
        visible={visable}
        footer={(
          <>
            <Button key="back" onClick={closeModal}>
              Cancelar
            </Button>
            <Button key="submit" onClick={handleSubmit}>
              Salvar
            </Button>
          </>
)}
        okButtonProps={{ style: { backgroundColor: 'green' } }}
      >
        <ModalHeader>
          <ModalHeaderTitle>
            {modalTransactionType === ModalTransactionTypes.RECIPE
              ? 'Criar Receita'
              : 'Criar despesa'}{' '}
          </ModalHeaderTitle>
          <ModalHeaderIconClose onClick={closeModal} type="close" />
        </ModalHeader>
        <Form style={{ padding: '20px' }} className="ant-advanced-search-form">
          <Row gutter={12}>
            <Col span={12}>
              <Field
                style={{ width: '100%' }}
                component={AntInputCurrency}
                name="value"
                label="Valor"
                validate={isRequired}
                submitCount={submitCount}
                hasFeedback
              />
            </Col>
            <Col span={12}>
              <Field
                style={{ width: '100%' }}
                placeholder="Selecione a data"
                component={AntDatePicker}
                name="createdAt"
                format="DD/MM/YYYY"
                label="Data"
                today={false}
                validate={isRequired}
                submitCount={submitCount}
                hasFeedback
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Field
                component={AntInput}
                name="description"
                type="text"
                label="Descrição"
                validate={isRequired}
                submitCount={submitCount}
                hasFeedback
              />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Field
                style={{ width: '100%' }}
                component={AntSelect}
                name="category"
                label="Categoria"
                defaultValue="Gabriel"
                selectOptions={
                  modalTransactionType === ModalTransactionTypes.RECIPE
                    ? categories.recipe
                    : categories.expense
                }
                validate={isRequired}
                submitCount={submitCount}
                tokenSeparators={[',']}
                hasFeedback
              />
            </Col>
            <Col span={12}>
              <Field
                style={{ width: '100%' }}
                component={AntSelect}
                name="account"
                label="Conta"
                defaultValue="Gabriel"
                selectOptions={accounts}
                validate={isRequired}
                submitCount={submitCount}
                tokenSeparators={[',']}
                hasFeedback
              />
            </Col>
          </Row>
        </Form>
      </Modal>
    </ThemeProvider>
  </div>
);
const mapStateToProps = state => ({
  visable: state.modalTransactionReducer.visable,
  modalTransactionType: state.modalTransactionReducer.transactionType,
  accounts: state.accountsReducer.data,
  categories: state.categoriesReducer.data,
  loading: state.transactionsReducer.loadingTransaction,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    closeModal: Creators.closeModal,
    postTransaction: TransactionsCreators.postTransaction,
  },
  dispatch,
);

const ModalTransactionsFormik = withFormik({
  handleSubmit: (values, { props: { postTransaction, modalTransactionType } }) => {
    let { createdAt, ...rest } = values;
    createdAt = moment(createdAt).toISOString();
    delete rest.accounts;
    delete rest.categories;
    delete rest.visable;
    const transaction = { createdAt, ...rest, type: modalTransactionType   };
    postTransaction(transaction);
  },
})(ModalTransaction);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalTransactionsFormik);
