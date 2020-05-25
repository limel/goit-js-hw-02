const logItems = function(array) {
  // eslint-disable-next-line no-restricted-syntax
  for (const elementArray of array) {
    const elementIndex = array.indexOf(elementArray);
    console.log(`${elementIndex + 1} - ${elementArray}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
