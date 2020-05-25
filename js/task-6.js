let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число!');

  const number = Number(input);

  if (number) {
    numbers.push(number);
  }
}

if (numbers.length > 0) {
  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    total += number;
  }
}

console.log(`общая сумма массива ${numbers} составляет ${total}`);
