export function SalesSupportChartData() {
  return {
    type: 'area',
    height: 85,
    options: {
      chart: {
        width: '100%',
        sparkline: {
          enabled: true
        },
        background: 'transparent'
      },
      colors: ['#7267EF'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter() {
              return 'Ticket ';
            }
          }
        },
        marker: {
          show: false
        }
      },
      theme: {
        mode: 'light'
      }
    },
    series: [
      {
        data: [0, 200, 100, 455, 30, 55, 20, 30, 0]
      }
    ]
  };
}
