import IconStart from '../assets/icons/icon-start.svg?react';
import IconRefresh from '../assets/icons/icon-refresh.svg?react';
import IconShare from '../assets/icons/icon-share.svg?react';

function Icon({ name }) {
  if (name === 'start') return <IconStart />;
  if (name === 'refresh') return <IconRefresh />;
  if (name === 'share') return <IconShare />;
  return null;
}

export default Icon;
