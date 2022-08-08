import './App.css';

import { useEffect, useState } from 'react';
import Filter from './components/filter';
import Header from './components/header';
import DonutChartCard from './components/pie-chart-card';
import { buildSalesByGenderChart } from './helpers';
import { DonutChartConfig, SalesByGender, Store } from './types';
import { makeRequest } from './utils/request';

function App() {
  const [stores, setStores] = useState<Store[]>();
  const [salesByGender, setSalesByGender] = useState<DonutChartConfig>();

  useEffect(() => {
    makeRequest
      .get('/stores')
      .then((response) => {
        setStores(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
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

  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Filter stores={stores} />
        <DonutChartCard labels={salesByGender?.labels} series={salesByGender?.series} />
      </div>
    </div>
  );
}

export default App;
