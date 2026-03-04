import './App.css';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* 질문페이지로 연결되는곳 */}
      <Route path="/question" element={<QuestionPage />} />

      {/* 결과페이지로 연결되는곳 */}
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
