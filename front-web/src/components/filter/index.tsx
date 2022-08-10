import './styles.css';

import { FilterData, Store } from '../../types';
import Select, { SingleValue } from 'react-select';

type Props = {
  stores?: Store[];
  onFilterChange: (filter: FilterData) => void;
};
function Filter({ stores, onFilterChange }: Props) {
  const onChangeStore = (store: SingleValue<Store>) => {
    if (store) {
      const selectedStore = store as Store;
      onFilterChange({ store: selectedStore });
      return;
    }
    const defaultStore = { id: 0, name: '' } as Store;
    onFilterChange({ store: defaultStore });
  };

  return (
    <div className="filter-container base-card">
      <Select
        options={stores}
        classNamePrefix="filter-input-select"
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
        inputId="store"
        placeholder="Selecione uma loja"
        isClearable
        onChange={(e) => onChangeStore(e)}
      />
    </div>
  );
}

export default Filter;
