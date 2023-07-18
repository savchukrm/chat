import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

import { RootState } from '../../../redux/store';
import { setCategories } from '../../../redux/categories/slice';
const Categories = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state: RootState) => state.user);
  const categoriesState = useSelector((state: RootState) => state.categories);

  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const endpoint = 'api/v1/chat-category';
        const url = `${baseUrl}/${endpoint}`;
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(url, { headers });
        const data = response.data.data;

        dispatch(setCategories(data));
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
  }, []);

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
