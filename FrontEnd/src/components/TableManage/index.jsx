import React, { useMemo } from 'react';
import { Table } from 'antd';
import moment from 'moment';
const { Column } = Table;

const TableManage = ({ dataSource }) => {
  const renderTable = useMemo(() => {
    const keys = Object.keys(dataSource[0]);
    if (keys.length > 0) {
      return keys.map((key) => {
        if (key === 'start_time' || key === 'end_time') {
          return (
            <Column
              title={key}
              dataIndex={key}
              key={key}
              render={(item) => {
                const formattedDate = moment(item).format('HH:mm DD/MM/YYYY');
                return <>{formattedDate}</>;
              }}
            />
          );
        }
        return <Column title={key} dataIndex={key} key={key} />;
      });
    }
  }, [dataSource]);
  return <Table dataSource={dataSource}>{renderTable}</Table>;
};
export default TableManage;
