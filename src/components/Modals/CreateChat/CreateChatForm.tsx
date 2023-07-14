import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { closeCreateChatModal } from '../../../redux/modals/slice';

import { All_CATEGORIES, LANGUAGES } from '../../../constants';

interface FormData {
  topic: string;
  category: string;
  language: string;
}

const CreateChatForm: React.FC = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeCreateChatModal());
  };

  const [formData, setFormData] = useState<FormData>({
    topic: '',
    category: '',
    language: '',
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await axios.post('/api/create-chat', formData);
      //write the logic to post data on the server
      setFormData({ topic: '', category: '', language: '' });
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
        ></textarea>

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
          {All_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
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
          {LANGUAGES.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        <div style={styles.buttonsContainer}>
          <button onClick={() => closeModal()}>Cancel</button>
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
  },
  input: {
    height: '60px',
    backgroundColor: '#313338',
    border: '1px solid #fff',
    borderRadius: '4px',
    margin: '8px 0 12px',
    color: '#fff',
    padding: '6px 10px',
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
    fontSize: '16px',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  submitBtn: {
    width: '263px',
    borderRadius: '4px',
    padding: '10px 20px',
    backgroundColor: '#2C3FE1',
    color: '#fff',
  },
};

export default CreateChatForm;
