import React, { useState } from 'react';
import { AiFillFire } from 'react-icons/ai';

const HotOrNot = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleActiveBtn = () => {
    setActive(!active);
  };

  return (
    <div style={styles.container} onClick={() => handleActiveBtn()}>
      <AiFillFire color={active ? '#2c3fe1' : '#bbbbbb'} size={20} />
      <span style={styles.text}>Hot</span>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    padding: '0px 8px 0px 6px',
    borderRadius: '4px',
    backgroundColor: '#313338',
  },
  text: {
    fontSize: '12px',
    color: '#bbbbbb',
  },
};

export default HotOrNot;
