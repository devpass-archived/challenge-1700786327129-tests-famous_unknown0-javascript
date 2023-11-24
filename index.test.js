const { sum, subtract } = require('./index');

test('Calculate sum of two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

test('Calculate subtraction of two numbers', () => {
  expect(subtract(5, 2)).toBe(3);
});