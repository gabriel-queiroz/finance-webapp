import React from 'react';
import { Modal, Divider } from 'antd';
import { connect } from 'react-redux';
import { Creators } from 'store/ducks/modalTransactionDeleteReducer';
import { Creators as TransactionsCreators } from 'store/ducks/transactionsReducer';
import { bindActionCreators } from 'redux';
import { formatCurrencyBRL } from 'helpers';
import { Container, Title, Content, Type, Description, Value } from './styles';

const ModalTransactionDelete = ({
  visible,
  closeModal,
  transaction,
  loading,
  deleteTransaction,
}) => (
  <Modal
    width="400px"
    onOk={() => deleteTransaction(transaction.id)}
    okButtonProps={{ loading }}
    cancelText="Cancelar"
    okType="danger"
    okText="Excluir"
    closable
    onCancel={closeModal}
    visible={visible}
  >
    <Container>
      <Title style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
        Deseja realmente apagar ?
      </Title>
      <Content>
        <Description>Descrição: {transaction.description}</Description>
        <Divider />
        <Type>
          Tipo: {transaction.type === 'RECIPE' ? 'Receita' : 'Despesa'}
        </Type>
        <Divider />
        <Value>Valor: {formatCurrencyBRL(transaction.value)}</Value>
      </Content>
    </Container>
  </Modal>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeModal: Creators.close,
      deleteTransaction: TransactionsCreators.deleteTransaction,
    },
    dispatch
  );

const mapStateToProps = state => ({
  visible: state.modalTransactionDeleteReducer.visible,
  loading: state.transactionsReducer.loading,
  transaction: state.modalTransactionDeleteReducer.transaction,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalTransactionDelete);
