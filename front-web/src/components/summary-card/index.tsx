import { formatPrice } from '../../utils/formatters';
import './styles.css';

type Props = {
  totalSum?: number;
};

function SummaryCard({ totalSum }: Props) {
  return (
    <div className="summary-container">
      <h2>{formatPrice(totalSum ?? 0)}</h2>
      <p className="summary-text">Total de vendas</p>
    </div>
  );
}

export default SummaryCard;
