import './App.css';
import Badge from './components/Badge';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <HomePage />
      <Badge tags={['react', 'css']} />
    </>
  );
}

export default App;
