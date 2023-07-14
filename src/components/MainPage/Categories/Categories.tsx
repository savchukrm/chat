import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';

import { RootState } from '../../../redux/store';

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
  };

  const { token } = useSelector((state: RootState) => state.user);
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

        const category = data.reduce((acc: string[], item: any) => {
          return [...acc, item.name];
        }, []);

        setAllCategories(category);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
  });

  return (
    <div style={styles.categories}>
      <h2 style={styles.title}>Choose category:</h2>

      <div style={styles.itemsBlock}>
        {allCategories.map((item, index) => (
          <li
            className={`category-item ${
              activeCategory === index ? 'category-item-active' : ''
            }`}
            key={item}
            onClick={() => handleCategoryClick(index)}
          >
            {item}
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
