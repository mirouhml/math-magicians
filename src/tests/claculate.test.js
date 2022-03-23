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
   
});