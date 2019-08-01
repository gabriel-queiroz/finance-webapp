import React from 'react';
import { Table, Icon } from 'antd';
import 'font-awesome/css/font-awesome.css';

const Transactions = () => {
  const dataSource = [
    {
      key: '1',
      date: '20/11/2018',
      description: 32,
      category: 'almoço Jardim',
      account: 'Neon',
      value: -10.12,
    },
    {
      key: '2',
      date: 'John',
      description: 42,
      category: '10 Downing Street',
      account: 'Nubank',
      value: 20.12,
    },
  ];

  const columns = [
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
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
    },
    {
      title: 'Conta',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: 'Valor',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Ações',
      dataIndex: 'action',
      render: () => (
        <>
          <button onClick={() => alert('foo')}>
            <Icon type="edit" style={{ fontSize: '20px', marginRight: '10px', color: '#1890ff' }} />
          </button>
          <button nClick={() => alert('foo')}>
            <Icon type="delete" style={{ fontSize: '20px', color: 'red' }} />
          </button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1>transações</h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Transactions;
