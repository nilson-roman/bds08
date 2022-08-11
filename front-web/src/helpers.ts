import { SalesByGender } from './types';
import { formatName } from './utils/formatters';

export const buildSalesByGenderChart = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => formatName(sale.gender));
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
