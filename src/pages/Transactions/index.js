import React, { Component } from 'react';
import { Table, Icon } from 'antd';
import TagTransactionType from 'components/TagTransactionType';
import 'font-awesome/css/font-awesome.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Creators as modalTransactionCreators } from 'store/ducks/modalTransactionReducer';
import { Creators as modalTransactionDeleteCreators } from 'store/ducks/modalTransactionDeleteReducer';
import { colors } from 'styles';
import { TransactionValue } from './styles';

class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          title: 'Data',
          dataIndex: 'createdAt',
          key: 'date',
          render: text => moment(text).format('DD/MM/YYYY'),
        },
        {
          title: 'Tipo',
          dataIndex: 'category',
          key: 'category',
          render: category => {
            return <TagTransactionType type={category.type} />;
          },
        },
        {
          title: 'Descrição',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Categoria',
          dataIndex: 'category',
          key: 'category',
          render: text => `${text.name}`,
        },
        {
          title: 'Conta',
          dataIndex: 'account',
          key: 'account',
          render: text => `${text.name}`,
        },
        {
          title: 'Valor',
          dataIndex: 'value',
          key: 'value',
          render: (text, transaction) => {
            let value = parseFloat(text);
            value = Math.abs(value);
            value = value.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            });
            return (
              <TransactionValue type={transaction.category.type}>
                {value}
              </TransactionValue>
            );
          },
        },
        {
          title: 'Ações',
          dataIndex: 'action',
          render: (text, transaction) => (
            <>
              <button
                type="button"
                onClick={() => {
                  this.props.modalOpen(
                    transaction.category.type,
                    transaction,
                    true
                  );
                }}
              >
                <Icon
                  type="edit"
                  style={{
                    fontSize: '20px',
                    marginRight: '10px',
                    color: colors.BLUE_PRIMARY,
                  }}
                />
              </button>
              <button
                onClick={() => this.props.modalDeleteOpen(transaction)}
                type="button"
              >
                <Icon
                  type="delete"
                  style={{ fontSize: '20px', color: colors.EXPENSE_COLOR }}
                />
              </button>
            </>
          ),
        },
      ],
    };
  }

  render() {
    const { transactions, error } = this.props;
    const { columns } = this.state;
    return (
      <>
        <h1 style={{ fontSize: '25px' }}>transações</h1>
        {error && <span>Aconteceu um erro ao buscar</span>}
        <Table
          pagination={{ position: 'top', pageSize: 10 }}
          dataSource={transactions}
          scroll={{ y: 400 }}
          columns={columns}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactionsReducer.data,
  error: state.transactionsReducer.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modalOpen: modalTransactionCreators.openModal,
      modalDeleteOpen: modalTransactionDeleteCreators.open,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
