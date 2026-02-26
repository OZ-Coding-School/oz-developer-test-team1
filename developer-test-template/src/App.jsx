import './App.css';
import Badge from './components/Badge';
import Icon from './components/Icon';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <HomePage />
      <Badge tags={['react', 'css']} />
      {/*뱃지영역*/}
      {/*아이콘 데모영역 캡쳐용 아이콘이 다화면에 보이게끔 임시조치 해놓앗습니다 화면에 잠깐 보이게끔만 해놓은거라
      필요하면 없애셔도 되요 */}
      <div className="flex items-center gap-6">
        <Icon name={'refresh'} />
        <Icon name={'start'} />
        <Icon name={'share'} />
      </div>
      {/*아이콘 영역*/}
    </>
  );
}

export default App;
