import { Modal, Row, Col } from 'antd';
import { Field, withFormik, Form } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { ThemeProvider } from 'styled-components';
import {
  Creators,
  ModalTransactionTypes,
} from 'store/ducks/modalTransactionReducer';
import { Creators as TransactionsCreators } from 'store/ducks/transactionsReducer';
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
  resetForm,
  transactionLoading,
  values,
  isEdit,
}) => {
  console.log(values);
return(
  <div>
    <ThemeProvider
      theme={
        modalTransactionType === ModalTransactionTypes.RECIPE
          ? { primary: 'green' }
          : { primary: 'red' }
      }
    >
      <Modal
        bodyStyle={{ padding: 0 }}
        closable={false}
        width="700px"
        visible={visable}
        footer={(
          <>
            <Button
              key="back"
              onClick={() => {
                resetForm();
                closeModal();
              }}
            >
              Cancelar
            </Button>
            <Button
              loading={transactionLoading}
              key="submit"
              onClick={() => {
                handleSubmit();
              }}
            >
              Salvar
            </Button>
          </>
)}
        okButtonProps={{ style: { backgroundColor: 'green' } }}
      >
        <ModalHeader>
          <ModalHeaderTitle>
            {modalTransactionType === ModalTransactionTypes.RECIPE
              ? isEdit ? 'Editar Receita': 'Criar Receita' : isEdit ? 'Editar Despesa':'Criar Despesa'} 
          </ModalHeaderTitle>
          <ModalHeaderIconClose
            onClick={() => {
              resetForm();
              closeModal();
            }}
            type="close"
          />
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
)};
const mapStateToProps = state => ({
  visable: state.modalTransactionReducer.visable,
  transactionLoading: state.transactionsReducer.loading,
  initialValues: state.modalTransactionReducer.transaction,
  isEdit: state.modalTransactionReducer.isEdit,
  modalTransactionType: state.modalTransactionReducer.transactionType,
  accounts: state.accountsReducer.data,
  categories: state.categoriesReducer.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    closeModal: Creators.closeModal,
    postTransaction: TransactionsCreators.postTransaction,
    updateTransaction: TransactionsCreators.updateTransaction,
  },
  dispatch,
);

const ModalTransactionsFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    return { ...props.initialValues }
  },
  handleSubmit: (
    values,
    { props: { postTransaction, updateTransaction, modalTransactionType } },
  ) => {
    let { createdAt, ...rest } = values;
    createdAt = moment(createdAt).toISOString();
    delete rest.accounts;
    delete rest.categories;
    delete rest.visable;
    const transaction = { createdAt, ...rest, type: modalTransactionType };

    if(transaction._id){
      updateTransaction(transaction);
    }
    else{
      postTransaction(transaction);
    }
  },
})(ModalTransaction);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalTransactionsFormik);
