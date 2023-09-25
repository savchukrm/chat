import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setCategories } from '../redux/categories/slice';
import { setLanguages } from '../redux/languages/slice';
import { setAllChats } from '../redux/allChats/allChats';
import useChats from '../hooks/useChats';

import {
  Categories,
  CreateChat,
  Welcome,
  ChatsContainer,
  SearchBlock,
  AllFilters,
} from '../components';

const Main = () => {
  const dispatch = useDispatch();

  const { welcomeModal, createChatModal } = useSelector(
    (state: RootState) => state.modals,
  );
  const { token } = useSelector((state: RootState) => state.user);

  // const { getAllChats } = useChats();

  useEffect(() => {
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
    getChats();
  }, []);

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
  }, []);

  const { isExpanded } = useSelector((state: RootState) => state.size);

  return (
    <div
      className="page-container"
      style={{
        paddingLeft: isExpanded ? '273px' : '170px',
        paddingRight: '43px',
      }}>
      <Categories />
      <SearchBlock />
      <AllFilters />

      <ChatsContainer />

      {createChatModal && <CreateChat />}
      {welcomeModal && <Welcome />}
    </div>
  );
};

export default Main;
