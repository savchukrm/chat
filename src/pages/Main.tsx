import { useSelector } from 'react-redux';

import { Categories } from '../components';
import Welcome from '../components/Modals/Welcome';
import { RootState } from '../redux/store';

const Main = () => {
  const { welcomeModal } = useSelector((state: RootState) => state.user);
  return (
    <div className="page-container">
      <Categories />

      {welcomeModal && <Welcome />}
    </div>
  );
};

export default Main;
