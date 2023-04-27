const reverseString = require('./reverseString');

test('reverse', () => {
    expect(reverseString('hello')).toBe('olleh');
  });