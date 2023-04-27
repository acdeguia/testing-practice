const capitalize = require('./capiptalize');

test('capitalizes the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });