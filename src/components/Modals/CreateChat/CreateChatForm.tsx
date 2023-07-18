import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import { RootState } from '../../../redux/store';
import { closeCreateChatModal } from '../../../redux/modals/slice';
import { createChat } from '../../../redux/chat/slice';
import { setLanguages } from '../../../redux/languages/slice';

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

  const closeModal = () => {
    dispatch(closeCreateChatModal());
  };

  useEffect(() => {
    const getLanguages = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const endpoint = 'api/v1/chat-language';
        const url = `${baseUrl}/${endpoint}`;
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(url, { headers });
        const data = response.data.data;

        dispatch(setLanguages(data));
      } catch (error) {
        console.error(error);
      }
    };

    getLanguages();
  }, [dispatch, token]);

  const [formData, setFormData] = useState<FormData>({
    topic: '',
    category: '',
    language: '',
  });

  const [maxCharError, setMaxCharError] = useState(false);
  const [emptyInputError, setEmptyInputError] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    if (name === 'topic' && value.trim().length === 40) {
      setMaxCharError(true);
    } else {
      setMaxCharError(false);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.topic.trim() === '') {
      setEmptyInputError(true);
      return;
    }

    try {
      const url = `${process.env.REACT_APP_API_URL}/api/v1/chat-channel/public/new`;

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const requestBody = {
        name: formData.topic,
        categoryId: formData.category || categories[0].id,
        languageId: formData.language || languages[0].id,
      };

      const response = await axios.post(url, requestBody, { headers });

      if (response.status === 200) {
        if (formData.category === '') {
          setFormData({ ...formData, category: categories[0].id });
        }

        if (formData.language === '') {
          setFormData({ ...formData, language: languages[0].id });
        }

        dispatch(
          createChat({
            topic: formData.topic,
            category: formData.category || categories[0].name,
            language: formData.language || languages[0].name,
          })
        );

        setFormData({ topic: '', category: '', language: '' });
        setMaxCharError(false);
        setEmptyInputError(false);

        dispatch(closeCreateChatModal());
      } else if (response.status === 400) {
        console.log(
          'Failed. Some field of ChatChannelDto don`t fit requirements.'
        );
      } else if (response.status === 404) {
        console.log('Failed. User, ChatCategory or ChatLanguage not found.');
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
          Write a short topic:
        </label>
        <textarea
          id="topicInput"
          name="topic"
          style={styles.input}
          value={formData.topic}
          onChange={handleChange}
          maxLength={40}
          rows={3}
          cols={40}
        ></textarea>
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
          Category:
        </label>
        <select
          id="categorySelect"
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={styles.select}
        >
          {categories.map((category) => (
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
          style={styles.select}
        >
          {languages.map((language) => (
            <option key={language.id} value={language.id}>
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
