import operate from "../logic/operate";

describe('Unit tests for the operate.js logic script', () => {
  test('Adding two numbers: operate(3, 4, '+')', () => {
    expect(operate(3, 4, '+')).toEqual('7');
  });

  test('Subtracting one number from another: operate(8, 2, '-')', () => {
    expect(operate(8, 2, '-')).toEqual('6');
  });
});