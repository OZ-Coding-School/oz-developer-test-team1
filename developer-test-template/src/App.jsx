import './App.css';
import Badge from './components/Badge';

import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/result" element={null} /> {/*결과페이지로 연결되는곳 */}
      </Routes>

      <HomePage />
      <Badge tags={['react', 'css']} />
    </>
  );
}

export default App;
