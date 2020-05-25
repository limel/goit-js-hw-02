const findLongestWord = function(string) {
  const splitStr = string.split(' ');

  let longestWord = ' ';
  // eslint-disable-next-line no-restricted-syntax
  for (const stringWord of splitStr) {
    if (stringWord.length > longestWord.length) {
      longestWord = stringWord;
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
