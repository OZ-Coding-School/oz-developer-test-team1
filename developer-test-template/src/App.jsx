import './App.css';
import Badge from './components/Badge';
import Icon from './components/Icon';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <HomePage />
      <Badge tags={['react', 'css']} />
      <Icon name={'start'} />
    </>
  );
}

export default App;
