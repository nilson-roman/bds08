import { ApexOptions } from 'apexcharts';

export const buildDonutChartConfig = (labels: string[] = [], name?: string) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFFFFF',
        fontSize: '16px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 0,
      labels: {
        colors: ['#b4bed2']
      },
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '16px',
      itemMargin: {
        vertical: 5
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return Number(val).toFixed(2) + '%';
      }
    },
    plotOptions: {
      pie: {
        size: 350,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
              formatter: function () {
                return name;
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '16px',
              color: '#ABB1C0',
              fontFamily: 'Ubuntu, sans-serif',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    colors: ['#FF7A00', '#7234F5', '#FF0000'],
    chart: {
      height: '200px'
    }
  } as ApexOptions;
};
