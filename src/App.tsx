import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Greeting from './pages/Greeting';
import Main from './pages/Main';
import MyCreatedChats from './pages/MyCreatedChats';
import ActiveChats from './pages/ActiveChats';
import PrivateMessages from './pages/PrivateMessages';
import Settings from './pages/Settings';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import { RootState } from './redux/store';

function App() {
  const { verified } = useSelector((state: RootState) => state.user);
  return (
    <>
      {verified && <Header />}
      {verified && <NavBar />}

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

        {verified && <Route path="/settings" element={<Settings />} />}
      </Routes>
    </>
  );
}

export default App;
