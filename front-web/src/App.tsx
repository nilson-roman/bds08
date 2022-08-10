import './App.css';

import { useEffect, useState } from 'react';
import Filter from './components/filter';
import Header from './components/header';
import DonutChartCard from './components/pie-chart-card';
import SummaryCard from './components/summary-card';
import { buildSalesByGenderChart } from './helpers';
import { DonutChartConfig, SalesByGender, Store, Summary } from './types';
import { makeRequest } from './utils/request';

function App() {
  const [stores, setStores] = useState<Store[]>();
  const [salesByGender, setSalesByGender] = useState<DonutChartConfig>();
  const [totalSalesStore, setTotalSalesStore] = useState<number>();

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
      .get<SalesByGender[]>('/sales/by-gender')
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, []);

  useEffect(() => {
    makeRequest
      .get<Summary>('/sales/summary')
      .then((response) => {
        const newSummary = response.data;
        setTotalSalesStore(newSummary.sum);
      })
      .catch(() => {
        console.error('Error to fetch summary');
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Filter stores={stores} />
        <div className="app-sales-container base-card">
          <SummaryCard totalSales={totalSalesStore} />
          <DonutChartCard labels={salesByGender?.labels} series={salesByGender?.series} />
        </div>
      </div>
    </div>
  );
}

export default App;
