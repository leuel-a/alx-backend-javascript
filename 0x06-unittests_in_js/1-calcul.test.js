const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should add the two numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    });

    it('should round a before adding it', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 2), 3);
    });

    it('shound round b before adding it', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 1.2), 2);
    });

    it('should return a type of number', () => {
      assert.strictEqual(typeof calculateNumber('SUM', 1.2, 1.3), 'number');
    });
  });

  describe('SUBTRACT', () => {
    it('should subtract the two numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 1), 1);
    });

    it('should round a before subtracting b from it', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.1, 1), 1);
    });

    it('should round b before subtracting it from a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 1.1), 1);
    });

    it('should return a type of number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 1.1), 1);
    })
  });
});
