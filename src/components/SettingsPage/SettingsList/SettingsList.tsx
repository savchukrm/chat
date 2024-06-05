const SettingsList = () => {
  return (
    <ul style={styles.listSettings}>
      <li style={styles.itemSetting}>
        <button style={styles.btnSetting}>My profile</button>
      </li>
      <li style={styles.itemSetting}>
        <button style={styles.btnSetting}>Password</button>
      </li>
      <li style={styles.itemSetting}>
        <button style={styles.btnSetting}>Notifications</button>
      </li>
      <li style={styles.itemSetting}>
        <button style={styles.btnSetting}>Acount actions</button>
      </li>
    </ul>
  );
};

const styles = {
  listSettings: {
    width: '145px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '16px',
  },
  itemSetting: {
    backgroundColor: '#313339',
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  btnSetting: { color: '#fff', paddingTop: '4px', paddingBottom: '4px' },
};

export default SettingsList;
