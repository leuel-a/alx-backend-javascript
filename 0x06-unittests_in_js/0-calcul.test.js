const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('0-calcul', () => {
  it('0-calcul should return a number', () => {
    assert.strictEqual(
      typeof calculateNumber(1.3, 1.4),
      'number',
      'The return value is not a number'
    );
  });

  it('should return NaN if no value specified for either argument', () => {
    assert.equal(
      calculateNumber(1),
      NaN,
      'It should return NaN check the function'
    );
  });
});
