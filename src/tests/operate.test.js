import operate from "../logic/operate";

describe('Unit tests for the operate.js logic script', () => {
  test('Adding two numbers: operate(3, 4, '+')', () => {
    expect(operate(3, 4, '+')).toEqual('7');
  });
});