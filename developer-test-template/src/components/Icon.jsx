import { ReactComponent as IconStart } from '../assets/icons/icon-start.svg';
import { ReactComponent as IconRefresh } from '../assets/icons/icon-refresh.svg';
import { ReactComponent as IconShare } from '../assets/icons/icon-share.svg';

function Icon({ name }) {
  if (name === 'start') return <IconStart />;
  if (name === 'refresh') return <IconRefresh />;
  if (name === 'share') return <IconShare />;
  return null;
}

export default Icon;
