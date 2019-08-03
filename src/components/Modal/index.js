import { Modal } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../store/ducks/modalReducer';

const modal = ({ visable, closeModal }) => (
  <div>
    <Modal title="Basic Modal" visible={visable} onCancel={closeModal} />
  </div>
);

const mapStateToProps = state => ({
  visable: state.modalReducer.visable,
});

const mapDispatchToProps = dispatch => bindActionCreators({ closeModal: modalActions.closeModal }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(modal);
