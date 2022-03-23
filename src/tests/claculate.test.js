import calculate from '../logic/calculate';

describe('testing calculate.js', () => {
  test('Checking for first number', () => {
    const obj = {
      next: null,
      operation: null,
      total: 0,
    };
    const result = calculate(obj, '1');
    expect(result.next).toEqual('1');
  });
   test('Checking for operation', () => {
    const obj = {
      next: '1',
      operation: null,
      total: 0,
    };
    const result = calculate(obj, '+');
    expect(result.operation).toEqual('+');
   });
  test('Checking for second number', () => {
    const obj = {
      next: null,
      operation: '+',
      total: '1',
    };
    const result = calculate(obj, '9');
    expect(result.total).toEqual('1');
    expect(result.next).toEqual('9');
    expect(result.operation).toEqual('+');
  });
   
});