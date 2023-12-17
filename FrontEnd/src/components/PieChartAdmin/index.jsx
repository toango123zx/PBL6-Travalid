import React from 'react';
import { HighchartsChart, XAxis, YAxis, Title, PieSeries, Legend } from 'react-jsx-highcharts';
let yAxis = [];
yAxis.push({
  title: {
    text: 'ttitle',
  },
  opposite: false,
  min: 0,
  labels: {
    format: '{value}Wh',
  },
});
const plotOptions = {
  pie: {
    // size: 120,
    allowPointSelect: true,
    cursor: 'pointer',
    dataLabels: {
      enabled: true,
      format: '{point.name}: {point.percentage:.1f} %',
    },
    showInLegend: true,
  },
  series: {
    dataLabels: {
      enabled: true,
    },
    pointPadding: 0.1,
    groupPadding: 0,
    tooltip: {
      valuePrefix: '',
      valueSuffix: ' millions',
    },
  },
};

const pieData = [
  {
    name: 'Jane',
    y: 17,
  },
  {
    name: 'John',
    y: 13,
  },
  {
    name: 'Joe',
    y: 20,
  },
  {
    name: 'Ivan',
    y: 50,
  },
];
const PieChartAdmin = () => {
  return (
    <HighchartsChart plotOptions={plotOptions}>
      <Title>Return on investment</Title>

      <XAxis>
        <XAxis.Title>Time</XAxis.Title>
      </XAxis>
      <Legend />

      <YAxis id="number">
        <YAxis.Title>Energy (kWh)</YAxis.Title>
        <PieSeries id="total-consumption" name="Total consumption" data={pieData} size={150} showInLegend />
      </YAxis>
    </HighchartsChart>
  );
};

export default PieChartAdmin;
