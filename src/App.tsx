import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

import Greeting from './pages/Greeting';
import Main from './pages/Main';
import MyCreatedChats from './pages/MyCreatedChats';
import ActiveChats from './pages/ActiveChats';
import PrivateMessages from './pages/PrivateMessages';
import Setting from './pages/Setting';
import ResetPassword from './pages/ResetPassword';
import NotFoundPage from './pages/NotFoundPage';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

function App() {
  const { verified } = useSelector((state: RootState) => state.user);

  const [showHeader, setShowHeader] = useState(true);

  return (
    <>
      {verified && showHeader && <Header />}
      {verified && showHeader && <NavBar />}

      <Routes>
        <Route index={true} path="/" element={<Greeting />} />

        {verified && <Route path="/main" element={<Main />} />}

        {verified && <Route path="/active-chats" element={<ActiveChats />} />}

        {verified && (
          <Route path="/private-messages" element={<PrivateMessages />} />
        )}
        {verified && (
          <Route path="/my-created-chats" element={<MyCreatedChats />} />
        )}

        {verified && <Route path="/setting" element={<Setting />} />}

        <Route path="/reset-password" element={<ResetPassword />} />

        <Route
          path="*"
          element={<NotFoundPage setShowHeader={setShowHeader} />}
        />
      </Routes>
    </>
  );
}

export default App;
