import {
  Modal,
  Row,
  Col,
  Icon,
} from 'antd';
import { Field, withFormik, Form } from 'formik';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import {
  isRequired,
} from '../ValidateFields/ValidateFields';
import {
  AntDatePicker,
  AntInput,
  AntSelect,
} from '../CreateAntFields/CreateAntFields';
import * as modalActions from '../../store/ducks/modalReducer';
import 'moment/locale/pt-br';


moment.locale('pt-br');

const Forma = ({
  visable,
  closeModal,
  submitCount,
  handleSubmit
}) => {
  return (
    <div>
      <Modal
        onOk={handleSubmit}
        bodyStyle={{ padding: 0 }}
        closable={false}
        width="700px"
        title={null}
        visible={visable}
        onCancel={closeModal}
        okText="Salvar"
        cancelText="Cancelar"
        okButtonProps={{ style: { backgroundColor: 'green' } }}
      >
        <header
          style={{
            height: '70px',
            width: '100%',
            backgroundColor: 'green',
            color: '#ffffff',
            display: 'flex',
            padding: '10px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h1 style={{ color: '#ffffff', margin: 0 }}>Criar despesa</h1>
          <Icon
            onClick={closeModal}
            style={{
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '30px',
              cursor: 'pointer',
            }}
            type="close"
          />
        </header>
        <Form
          style={{ padding: '20px' }}
          className="ant-advanced-search-form"
        >
          <Row gutter={12}>
            <Col span={12}>
              <Field
                component={AntInput}
                name="value"
                type="number"
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
                name="date"
                label="Data"
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
               style={{width:'100%'}}
                component={AntSelect}
                name="category"
                label="Categoria"
                defaultValue="Gabriel"
                selectOptions={['Gabriel', 'Lucia', 'Daniel']}
                validate={isRequired}
                submitCount={submitCount}
                tokenSeparators={[',']}
                hasFeedback
              />
            </Col>
            <Col span={12}>
              <Field
                style={{width:'100%'}}
                component={AntSelect}
                name="account"
                label="Conta"
                defaultValue="Gabriel"
                selectOptions={['Gabriel', 'Lucia', 'Daniel']}
                validate={isRequired}
                submitCount={submitCount}
                tokenSeparators={[',']}
                hasFeedback
              />
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => ({
  visable: state.modalReducer.visable,
});

const mapDispatchToProps = dispatch => bindActionCreators({ closeModal: modalActions.closeModal }, dispatch);

const Formik = withFormik({
  handleSubmit: () => {},
  validate: (values, props) => {
    const errors = {};
    if (!values.value) {
      errors.value = 'O valor é obrigatório';
    }
    if (!values.date) {
      errors.date = 'A data é obrigatoria';
    }
    if (!values.description) {
      errors.description = 'A descrição é obrigatoria';
    }
    return errors;
  },
})(Forma);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Formik);
