import './styles.css';
import { buildDonutChartConfig } from './helpers';
import ReactApexChart from 'react-apexcharts';

type Props = {
  labels?: string[];
  name?: string;
  series?: number[];
};

function DonutChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <div className="pie-chart-card base-card">
      <ReactApexChart
        options={buildDonutChartConfig(labels, name)}
        type="donut"
        width="400"
        height="400"
        series={series}
      />
    </div>
  );
}

export default DonutChartCard;
