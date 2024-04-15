const validPairs: { [key: string]: string } = {
  "(": ")",
  "{": "}",
  "[": "]",
};

export const checkCombination = (combination: string): boolean => {
  if (combination.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < combination.length / 2; i++) {
    if (combination[combination.length - i - 1] !== validPairs[combination[i]]) {
      return false;
    }
  }

  return true;
};
