import React, { Component } from 'react';
import { Table, Icon } from 'antd';
import 'antd/dist/antd.css';

export default class Transactions extends Component {
  render() {
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
            <Icon style={{ marginRight: '10px' }} type="edit" />

            <Icon type="delete" />
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
  }
}
