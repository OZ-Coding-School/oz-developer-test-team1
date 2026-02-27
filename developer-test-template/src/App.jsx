import './App.css';
import Badge from './components/Badge';

import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={null} />{' '}
        {/*연결하도록 설정해놓음, 바꾸셔도 되요 */}
        <Route path="/question" element={null} />
        <Route path="/result" element={null} />
      </Routes>

      <HomePage />
      <Badge tags={['react', 'css']} />
    </>
  );
}

export default App;
