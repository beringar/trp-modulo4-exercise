export const checkCombination = (combination: string): boolean => {
  const patternAllowedCharacters = /^[\(\)\{\}\[\]]*$/;
  if (!patternAllowedCharacters.test(combination)) {
    return false;
  }

  return true;
};
