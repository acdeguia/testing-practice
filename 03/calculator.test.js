const calculator = require('./calculator')

describe('calculator', () => {
  test('Addition', () => {
    expect(calculator(1,"+",1)).toBe(2);
  });

  test('Subtraction', () => {
    expect(calculator(1,"-",1)).toBe(0);
  });

  test('Multiplication', () => {
    expect(calculator(1,"x",1)).toBe(1);
  });

  test('Division', () => {
    expect(calculator(1,"/",1)).toBe(1);
  });

})