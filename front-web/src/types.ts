export type FilterData = {
  storeId?: number;
};

export type Store = {
  id: number;
  name: string;
};

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type DonutChartConfig = {
  labels: string[];
  series: number[];
};
