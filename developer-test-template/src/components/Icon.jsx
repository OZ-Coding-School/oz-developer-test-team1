import IconStart from '../assets/icons/icon-start.svg';
import IconRefresh from '../assets/icons/icon-refresh.svg';
import IconShare from '../assets/icons/icon-share.svg';

/**
 * Icon 컴포넌트
 * - 부모 컴포넌트로부터 name 이라는 props를 전달받아
 * - name 값에 따라 서로 다른 아이콘 이미지를 조건부로 렌더링.
 */

/**
 * if 문 동작 원리:
 * - props로 전달받은 name 값이 무엇인지 비교해서
 * - 조건에 맞는 경우 해당하는 아이콘 이미지를 반환하게 햇고요.
 * - return이 실행되면 그 아래 코드는 실행되지 않고 함수가 종료됩니다.
 */

function Icon({ name }) {
  if (name === 'start') return <img src={IconStart} alt="start-icon" />;
  if (name === 'refresh') return <img src={IconRefresh} alt="refresh-icon" />;
  if (name === 'share') return <img src={IconShare} alt="share-icon" />;
  return null;
}
// name: 어떤 아이콘을 보여줄지 결정하는 props
//아이콘 컴포넌트: name에 따라 start, refresh, share 아이콘중 하나를 렌더링
export default Icon;
