import React from 'react';
import Chart from 'react-apexcharts';

const SalesAccountChartData = ({ data }) => {
  // Default data if API fetch fails or data is empty
  /*
  const defaultLabels = ['Jan 01', 'Feb 01', 'Mar 01', 'Apr 01', 'May 01', 'Jun 01', 'Jul 01', 'Aug 01', 'Sep 01', 'Oct 01', 'Nov 01', 'Dec 01'];
  const defaultTotalSales = [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 40];
  const defaultAverage = [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51];
  */

  // Use API data (assumes data is always provided)
  const labels = data.map(item => item.month);
  const totalSales = data.map(item => item.sales);
  // Calculate running average based on sales data
  const average = totalSales.map((sales, index) => {
    const sum = totalSales.slice(0, index + 1).reduce((acc, val) => acc + val, 0);
    return Math.round(sum / (index + 1));
  });

  const chartOptions = {
    chart: {
      background: 'transparent'
    },
    stroke: {
      width: [0, 3],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    colors: ['#7267EF', '#c7d9ff'],
    fill: {
      opacity: [0.85, 1]
    },
    labels: labels,
    markers: {
      size: 0
    },
    yaxis: {
      min: 0
    },
    grid: {
      strokeDashArray: 0,
      borderColor: '#f5f5f5'
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter(y) {
          if (typeof y !== 'undefined') {
            return `$ ${y.toFixed(0)}`;
          }
          return y;
        }
      }
    },
    legend: {
      labels: {
        useSeriesColors: true
      },
      markers: {
        customHTML() {
          return '';
        }
      }
    },
    // theme: {
    //   mode: 'light'
    // }
  };

  const chartSeries = [
    {
      name: 'Total Sales',
      type: 'column',
      data: totalSales
    },
    {
      name: 'Average',
      type: 'line',
      data: average
    }
  ];

  return <Chart options={chartOptions} series={chartSeries} type="line" height={350} />;
};

export default SalesAccountChartData;
