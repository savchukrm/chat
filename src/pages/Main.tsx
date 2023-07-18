import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { Categories, CreateChat, Welcome, ChatsContainer } from '../components';

const Main = () => {
  const { welcomeModal, createChatModal } = useSelector(
    (state: RootState) => state.modals
  );

  const { isExpanded } = useSelector((state: RootState) => state.size);

  return (
    <div
      className="page-container"
      style={{ paddingLeft: isExpanded ? '273px' : '170px' }}
    >
      <Categories />

      <ChatsContainer />

      {createChatModal && <CreateChat />}
      {welcomeModal && <Welcome />}
    </div>
  );
};

export default Main;
