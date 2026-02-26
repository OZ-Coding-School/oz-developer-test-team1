import ai from '../assets/characters/ai.webp';
import backend from '../assets/characters/backend.webp';
import data from '../assets/characters/data.webp';
import devops from '../assets/characters/devops.webp';
import frontend from '../assets/characters/frontend.webp';
import fullstack from '../assets/characters/fullstack.webp';
import gamedev from '../assets/characters/gamedev.webp';
import hamster from '../assets/characters/hamster.webp';
import mobile from '../assets/characters/mobile.webp';

/* 
type : 캐릭터 이미지 종류 (string 타입)
(ai, backend, data, devops, frontend, fullstack, gamedev, hamster, mobile 중 택1)
*/
function CharacterIcon({ type = 'hamster' }) {
  const imgAlt = type + '_image';

  const getSrc = () => {
    switch (type) {
      case 'ai':
        return ai;
      case 'backend':
        return backend;
      case 'data':
        return data;
      case 'devops':
        return devops;
      case 'frontend':
        return frontend;
      case 'fullstack':
        return fullstack;
      case 'gamedev':
        return gamedev;
      case 'hamster':
        return hamster;
      case 'mobile':
        return mobile;
      default:
        return hamster;
    }
  };

  return (
    <div className="bg-background h-32 w-fit text-center">
      <img src={getSrc()} alt={imgAlt} className="h-full object-contain" />
    </div>
  );
}

export default CharacterIcon;
