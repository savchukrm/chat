import React from 'react';

import { All_CATEGORIES } from '../../../constants';

const Categories = () => {
  return (
    <div style={styles.categories}>
      <h2 style={styles.title}>Choose category:</h2>

      <div style={styles.itemsBlock}>
        {All_CATEGORIES.map((item) => {
          return (
            <li className="category-item" key={item}>
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  categories: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '40px',
  },
  title: {
    color: '#fff',
    fontSize: '30px',
    fontWeight: 600,
  },
  itemsBlock: {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
  },
};

export default Categories;
