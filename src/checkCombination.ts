export const checkCombination = (combination: string): boolean => {
  const patternAllowedCharacters = /^[\(\)\{\}\[\]]*$/;
  if (combination.length % 2 !== 0 || !patternAllowedCharacters.test(combination)) {
    return false;
  }

  return true;
};
