export const generateCharacterData = (count) => {
  return [...Array(count)].map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 2}s`,
  }));
};
