import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setAllChats } from '../redux/allChats/allChats';
import axios from 'axios';

import {
  Categories,
  CreateChat,
  Welcome,
  ChatsContainer,
  SearchBlock,
} from '../components';

const Main = () => {
  const dispatch = useDispatch();

  const { welcomeModal, createChatModal } = useSelector(
    (state: RootState) => state.modals
  );
  const { token } = useSelector((state: RootState) => state.user);

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

  const { isExpanded } = useSelector((state: RootState) => state.size);

  return (
    <div
      className="page-container"
      style={{
        paddingLeft: isExpanded ? '273px' : '170px',
        paddingRight: '43px',
      }}
    >
      <Categories />
      <SearchBlock />

      <ChatsContainer />

      {createChatModal && <CreateChat />}
      {welcomeModal && <Welcome />}
    </div>
  );
};

export default Main;
