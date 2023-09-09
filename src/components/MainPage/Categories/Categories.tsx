import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import { setActiveCategory } from '../../../redux/filters/slice';

const Categories = () => {
  const dispatch = useDispatch();

  const categoriesState = useSelector((state: RootState) => state.categories);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveCategory = (index: number, id: string) => {
    dispatch(setActiveCategory(id));
    setActiveIndex(index);
  };

  return (
    <div style={styles.categories}>
      <h2 style={styles.title}>Choose category:</h2>

      <div style={styles.itemsBlock}>
        {categoriesState.categories.map((item, index) => (
          <li
            className={`category-item ${
              activeIndex === index ? 'category-item-active' : ''
            }`}
            onClick={() => handleActiveCategory(index, item.id)}
            key={item.id}>
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
