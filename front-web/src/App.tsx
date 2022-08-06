import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import { Store } from './types';
import { makeRequest } from './utils/request';

function App() {
  const [stores, setStores] = useState<Store[]>();

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

  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Filter stores={stores} />
      </div>
    </div>
  );
}

export default App;
