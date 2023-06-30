import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser, setVerified } from '../redux/user/slice';

const Main = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(removeUser());
    dispatch(setVerified(false));
    navigate('/');
  };

  return (
    <div>
      <h1>Here will be main page when user is logged in</h1>
      <button onClick={handleLogOut}>logout</button>
    </div>
  );
};

export default Main;
