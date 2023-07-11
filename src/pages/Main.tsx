import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { Categories } from '../components';
import Welcome from '../components/Modals/Welcome';

import CreateChat from '../components/Modals/CreateChat/CreateChat';

const Main = () => {
  const { welcomeModal, createChatModal } = useSelector(
    (state: RootState) => state.modals
  );

  return (
    <div className="page-container">
      <Categories />

      {createChatModal && <CreateChat />}
      {welcomeModal && <Welcome />}
    </div>
  );
};

export default Main;
