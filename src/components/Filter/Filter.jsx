import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <div>
      <h3 className={css.title}>Find contacts by name</h3>
      <input className={css.input}type="text" name="filter" onChange={onFilterChange} />
    </div>
  );
};

export default Filter;