import { IoMdHeart } from 'react-icons/io';
import { IoArrowUpCircleOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <h2 style={styles.footerTitle}>are you ready to talk?</h2>
        <p style={styles.footerText}>
          Made with
          <span style={styles.footerIcon}>
            <IoMdHeart style={styles.heartIcon} />
          </span>
          by Creative Team within the framework of the Team Challenge project.
        </p>
      </div>
      <button style={styles.footerBtn}>
        <IoArrowUpCircleOutline style={styles.arrowIcon} />
      </button>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#19102F',
    padding: '43px 40px 59px 42px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
  },
  footerContainer: {},
  footerTitle: {
    fontWeight: 700,
    fontSize: 60,
    textTransform: 'uppercase' as 'uppercase',
    color: '#fff',
    marginBottom: 16,
  },
  footerText: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '167%',
    color: '#8a8ea8',
  },
  footerIcon: { marginRight: 4, marginLeft: 4 },
  heartIcon: { color: '#fff', width: 13, height: 10 },
  footerBtn: {},
  arrowIcon: { color: '#fff', width: 77, height: 77 },
};

export default Footer;
