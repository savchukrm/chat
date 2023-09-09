import { CgClose } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import { resetFiltres } from '../../../redux/filters/slice';

import LanguagesFilters from './Languages/Languages';
import HotOrNot from './HotOrNot/HotOrNot';
import UpdateFilter from './Update/Update';

const AllFilters = () => {
  const dispatch = useDispatch();

  const { active } = useSelector((state: RootState) => state.filters);

  const handleReset = () => {
    dispatch(resetFiltres());
  };

  return (
    <div style={styles.container}>
      <div style={styles.filterBlock}>
        <LanguagesFilters />
        <UpdateFilter />
        <HotOrNot />
      </div>
      <div style={styles.resetBtn} onClick={handleReset}>
        <CgClose color={active ? '#2c3fe1' : '#bbbbbb'} size={10} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  filterBlock: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '6px',
  },
  resetBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#313338',
    cursor: 'pointer',
  },
};

export default AllFilters;
