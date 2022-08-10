export type FilterData = {
  store?: Store;
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

export type Summary = {
  sum: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};
