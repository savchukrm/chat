import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { Categories, CreateChat, Welcome, ChatsContainer } from '../components';

const Main = () => {
  const { welcomeModal, createChatModal } = useSelector(
    (state: RootState) => state.modals
  );

  return (
    <div className="page-container">
      <Categories />

      <ChatsContainer />

      {createChatModal && <CreateChat />}
      {welcomeModal && <Welcome />}
    </div>
  );
};

export default Main;
