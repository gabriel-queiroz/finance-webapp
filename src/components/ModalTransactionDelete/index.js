import React from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { Creators } from 'store/ducks/modalTransactionDeleteReducer';
 import { bindActionCreators } from 'redux';
import {
  Container, Title, Content, Type, Description, Value,
} from './styles';
import { formatCurrencyBRL } from 'helpers';

const ModalTransactionDelete = ({ visible, closeModal, transaction }) => (
  <Modal width="400px" okButtonProps={{loading: true}}	 onCancel={closeModal} cancelText="Cancelar" okType="danger" okText="Excluir" closable onCancel={closeModal} visible={visible}>
    <Container>
      <Title style={{color:"rgba(0, 0, 0, 0.65)"}}>Deseja realmente apagar ?</Title>
      <Content>
        <Description>Descrição: {transaction.description}</Description>
        <Type>Tipo: {transaction.type === "RECIPE" ? "Receita": "Despesa"}</Type>
        <Value>Valor: {formatCurrencyBRL(transaction.value)}</Value>
      </Content>
    </Container>
  </Modal>
);


 const mapDispatchToProps = dispatch => 
   bindActionCreators( { closeModal: Creators.close }, dispatch);

const mapStateToProps = state => ({
  visible: state.modalTransactionDeleteReducer.visible,
  transaction:state.modalTransactionDeleteReducer.transaction
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalTransactionDelete);
