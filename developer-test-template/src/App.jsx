import './App.css';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question/:id" element={<QuestionPage />} />
      <Route path="/result" element={null} /> {/* 결과페이지로 연결되는곳 */}
    </Routes>
  );
}

export default App;
