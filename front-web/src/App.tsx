import './App.css';

import { useEffect, useMemo, useState } from 'react';
import Filter from './components/filter';
import Header from './components/header';
import DonutChartCard from './components/pie-chart-card';
import SummaryCard from './components/summary-card';
import { buildSalesByGenderChart } from './helpers';
import { DonutChartConfig, FilterData, SalesByGender, Store, Summary } from './types';
import { buildFilterParams, makeRequest } from './utils/request';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [stores, setStores] = useState<Store[]>();
  const [salesByGender, setSalesByGender] = useState<DonutChartConfig>();
  const [totalSum, setTotalSum] = useState<number>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get('/stores')
      .then((response) => {
        setStores(response.data);
      })
      .catch(() => {
        console.error('Error to fetch stores');
      });
  }, []);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, [params]);

  useEffect(() => {
    makeRequest
      .get<Summary>('/sales/summary', { params })
      .then((response) => {
        const newSummary = response.data;
        setTotalSum(newSummary.sum);
      })
      .catch(() => {
        console.error('Error to fetch summary');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Filter stores={stores} onFilterChange={onFilterChange} />
        <div className="app-sales-container base-card">
          <SummaryCard totalSum={totalSum} />
          <DonutChartCard labels={salesByGender?.labels} series={salesByGender?.series} />
        </div>
      </div>
    </div>
  );
}

export default App;
