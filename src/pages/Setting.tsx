import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeUser, setVerified } from '../redux/user/slice';

const Setting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(removeUser());
    dispatch(setVerified(false));
    navigate('/');
  };
  return (
    <div className="page-container">
      <h1>Setting</h1>
      <button onClick={() => handleLogOut()}>log out</button>
    </div>
  );
};

export default Setting;
