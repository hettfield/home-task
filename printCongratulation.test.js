const printCongratulation = require('./printCongratulation');

test('message equal `Hello world`', () => {
  expect(printCongratulation('Hello world')).toMatch('Hello world');
});
