import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';

const Categories = () => {
  const categoriesState = useSelector((state: RootState) => state.categories);

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div style={styles.categories}>
      <h2 style={styles.title}>Choose category:</h2>

      <div style={styles.itemsBlock}>
        {categoriesState.categories.map((item, index) => (
          <li
            className={`category-item ${
              activeCategory === index ? 'category-item-active' : ''
            }`}
            onClick={() => setActiveCategory(index)}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
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
