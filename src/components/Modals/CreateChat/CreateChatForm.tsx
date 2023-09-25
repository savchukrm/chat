import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import { RootState } from '../../../redux/store';
import { closeCreateChatModal } from '../../../redux/modals/slice';
import { createChat } from '../../../redux/chat/slice';
import { setAllChats } from '../../../redux/allChats/allChats';

interface FormData {
  topic: string;
  category: string;
  language: string;
}

const CreateChatForm: React.FC = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state: RootState) => state.user);

  const { categories } = useSelector((state: RootState) => state.categories);
  const { languages } = useSelector((state: RootState) => state.languages);

  const [maxCharError, setMaxCharError] = useState(false);
  const [emptyInputError, setEmptyInputError] = useState(false);

  const closeModal = () => {
    dispatch(closeCreateChatModal());
  };

  const [firstCategory, ...onlyCategories] = categories;

  const [formData, setFormData] = useState<FormData>({
    topic: '',
    category: '',
    language: '',
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    if (name === 'topic' && value.trim().length === 40) {
      setMaxCharError(true);
    } else {
      setMaxCharError(false);
    }

    if (name === 'topic' && value.trim() !== '') {
      setEmptyInputError(false);
    }

    setFormData({ ...formData, [name]: value });
  };

  const getChats = async () => {
    try {
      const baseUrl = process.env.REACT_APP_API_URL;
      const endpoint = '/api/v1/chat-channel/public';
      const url = `${baseUrl}/${endpoint}`;
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(url, { headers });
      const data = response.data.data;

      dispatch(setAllChats(data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.topic.trim() === '') {
      setEmptyInputError(true);
      return;
    }

    const selectedCategory = onlyCategories.find(
      (category) => category.id === formData.category,
    );
    const selectedLanguage = languages.find(
      (language) => language.id === formData.language,
    );

    try {
      const url = `${process.env.REACT_APP_API_URL}/api/v1/chat-channel/public/new`;

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const requestBody = {
        name: formData.topic,
        categoryId: formData.category || categories[categories.length - 1].id,
        languageId: formData.language || languages[0].id,
      };

      console.log(requestBody);
      console.log(formData.category);

      const response = await axios.post(url, requestBody, { headers });

      if (response.status === 200) {
        dispatch(
          createChat({
            topic: formData.topic,
            category:
              selectedCategory?.name || categories[categories.length - 1].id,
            language: selectedLanguage?.name || languages[0].name,
          }),
        );

        getChats();

        setFormData({ topic: '', category: '', language: '' });
        setMaxCharError(false);
        setEmptyInputError(false);

        dispatch(closeCreateChatModal());
      } else if (response.status === 400) {
        console.log(
          'Failed. Some field of ChatChannelDto don`t fit requirements.',
        );
      } else if (response.status === 404) {
        console.log('Failed. User, ChatCategory, or ChatLanguage not found.');
      } else {
        throw new Error('Failed to create chat');
      }
    } catch (error) {
      console.error('Error creating chat:', error);
    }
  };

  return (
    <div>
      <form style={styles.formBlock} onSubmit={handleSubmit}>
        <label style={styles.label} htmlFor="topicInput">
          Write a short topic
        </label>
        <textarea
          id="topicInput"
          name="topic"
          style={styles.input}
          value={formData.topic}
          onChange={handleChange}
          placeholder="e.g., Burgers Well-Done Is The Way To Go|"
          maxLength={40}
          rows={3}
          cols={40}></textarea>
        {maxCharError && (
          <p style={styles.error}>
            You have reached the maximum number of characters.
          </p>
        )}
        {emptyInputError && (
          <p style={styles.error}>
            You cannot create a chat with an empty input.
          </p>
        )}

        <label style={styles.label} htmlFor="categorySelect">
          Category
        </label>
        <select
          id="categorySelect"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="selectForm">
          <option value="" disabled hidden>
            Choose from category
          </option>
          {onlyCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <label style={styles.label} htmlFor="languageSelect">
          Language of communication
        </label>
        <select
          id="languageSelect"
          name="language"
          value={formData.language}
          onChange={handleChange}
          style={styles.select}>
          {languages.map((language) => (
            <option
              style={{ cursor: 'pointer' }}
              key={language.id}
              value={language.id}>
              {language.name}
            </option>
          ))}
        </select>

        <div style={styles.buttonsContainer}>
          <button style={styles.cancelBtn} onClick={() => closeModal()}>
            Cancel
          </button>
          <button style={styles.submitBtn} type="submit">
            Create Chat
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  formBlock: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    width: '360px',
    position: 'relative' as 'relative',
  },
  input: {
    height: '70px',
    weight: '360px',
    backgroundColor: '#313338',
    border: '1px solid #fff',
    borderRadius: '4px',
    margin: '8px 0 16px',
    color: '#fff',
    padding: '6px 10px',
    fontSize: '14px',
    resize: 'none' as 'none',
  },
  label: {
    fontSize: '14px',
  },
  select: {
    backgroundColor: '#313338',
    border: '1px solid #fff',
    borderRadius: '4px',
    padding: '10px',
    color: '#fff',
    margin: '12px 0 20px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  buttonsContainer: {
    marginTop: '14px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
  cancelBtn: {
    borderRadius: '4px',
    padding: '7px 35px',
    backgroundColor: '#fff',
    color: '#000',
    fontSize: '14px',
    cursor: 'pointer',
  },
  submitBtn: {
    borderRadius: '4px',
    padding: '7px 18px',
    backgroundColor: '#2C3FE1',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
  },
  error: {
    position: 'absolute' as 'absolute',
    top: '96px',
    color: 'red',
    fontSize: '11px',
    marginBottom: '8px',
  },
};

export default CreateChatForm;
