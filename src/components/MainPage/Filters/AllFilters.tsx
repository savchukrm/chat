import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';

import LanguagesFilters from './Languages/Languages';
import HotOrNot from './HotOrNot/HotOrNot';
import UpdateFilter from './Update/Update';

const AllFilters = () => {
  const [activeReset, setActiveReset] = useState<boolean>(false);
  return (
    <div style={styles.container}>
      <div style={styles.filterBlock}>
        <LanguagesFilters />
        <UpdateFilter />
        <HotOrNot />
      </div>
      <div style={styles.resetBtn}>
        <CgClose color={activeReset ? '#2c3fe1' : '#bbbbbb'} size={10} />
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
  },
};

export default AllFilters;
