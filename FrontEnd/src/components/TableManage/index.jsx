import React from 'react';
import { Space, Table, Tag } from 'antd';
import { dataSource } from '../../constant';
const { Column } = Table;

const TableManage = () => (
  <Table dataSource={dataSource}>
    <Column title="First Name" dataIndex="firstName" key="firstName" />
    <Column title="Last Name" dataIndex="lastName" key="lastName" />
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <button>Edit</button>
        </Space>
      )}
    />
  </Table>
);
export default TableManage;
