import './styles.css';

import { Store } from '../../types';
import Select from 'react-select';

type Props = {
  stores?: Store[];
};
function Filter({ stores }: Props) {
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
      />
    </div>
  );
}

export default Filter;
