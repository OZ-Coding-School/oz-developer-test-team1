import IconStart from '../assets/icons/icon-start.svg';
import IconRefresh from '../assets/icons/icon-refresh.svg';
import IconShare from '../assets/icons/icon-share.svg';

function Icon({ name }) {
  if (name === 'start') return <img src={IconStart} alt="start-icon" />;
  if (name === 'refresh') return <img src={IconRefresh} alt="refresh-icon" />;
  if (name === 'share') return <img src={IconShare} alt="share-icon" />;
  return null;
}
// name: 어떤 아이콘을 보여줄지 결정하는 props
//아이콘 컴포넌트: name에 따라 start, refresh, share 아이콘중 하나를 렌더링
export default Icon;
