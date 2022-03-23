import operate from '../logic/operate';

describe('Unit tests for the operate.js logic script', () => {
  test('Adding two numbers: operate(3, 4, "+")', () => {
    expect(operate(3, 4, '+')).toEqual('7');
  });

  test('Subtracting one number from another: operate(8, 2, "-")', () => {
    expect(operate(8, 2, '-')).toEqual('6');
  });

  test('Multiplying two numbers: operate(3, 4, "x")', () => {
    expect(operate(3, 4, '×')).toEqual('12');
  });

  test('Dividing two numbers: operate(16, 4, "÷")', () => {
    expect(operate(16, 4, '÷')).toEqual('4');
  });

  test('Getting the remain of the division: operate(21, 4, "%")', () => {
    expect(operate(21, 4, '%')).toEqual('1');
  });
});
