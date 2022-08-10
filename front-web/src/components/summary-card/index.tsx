import { formatPrice } from '../../utils/formatters';
import './styles.css';

type Props = {
  totalSales?: number;
};

function SummaryCard({ totalSales }: Props) {
  return (
    <div className="summary-container">
      <h2>{formatPrice(totalSales ?? 0)}</h2>
      <p className="summary-text">Total de vendas</p>
    </div>
  );
}

export default SummaryCard;
