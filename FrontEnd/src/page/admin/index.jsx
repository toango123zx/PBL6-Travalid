import React from 'react';
import Highcharts from 'highcharts';
import { HighchartsProvider } from 'react-jsx-highcharts';
import { PieChartAdmin, SimpleLineAdmin } from '../../components';

const AdminPage = () => {
  return (
    <div>
      <HighchartsProvider Highcharts={Highcharts}>
        <PieChartAdmin />
        <SimpleLineAdmin />
      </HighchartsProvider>
    </div>
  );
};

export default AdminPage;
