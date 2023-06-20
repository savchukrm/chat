import { Routes, Route } from 'react-router-dom';

import Greeting from './pages/Greeting';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route index={true} path="/" element={<Greeting />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
