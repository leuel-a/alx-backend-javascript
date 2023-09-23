const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should add the two numbers', () => {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    it('should round a before adding it', () => {
      expect(calculateNumber('SUM', 1.2, 2)).to.equal(3);
    });

    it('shound round b before adding it', () => {
      expect(calculateNumber('SUM', 1, 1.2)).to.equal(2);
    });

    it('should return a type of number', () => {
      expect(calculateNumber('SUM', 1.2, 1.3)).to.be.a('number');
    });
  });

  describe('SUBTRACT', () => {
    it('should subtract the two numbers', () => {
      expect(calculateNumber('SUBTRACT', 2, 1)).to.equal(1);
    });

    it('should round a before subtracting b from it', () => {
      expect(calculateNumber('SUBTRACT', 2.1, 1)).to.equal(1);
    });

    it('should round b before subtracting it from a', () => {
      expect(calculateNumber('SUBTRACT', 2, 1.1)).to.equal(1);
    });

    it('should return a type of number', () => {
      expect(calculateNumber('SUBTRACT', 2.2, 1.1)).to.be.a('number');
    });

    it('should return a negative if result is a negative number', () => {
      expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
    });
  });

  describe('DIVIDE', () => {
    it('should divide the two numbers', () => {
      expect(calculateNumber('DIVIDE', 2, 1)).to.equal(2);
    });

    it('should return error when b is zero', () => {
      expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
    });

    it('should return error when b is rounded to zero', () => {
      expect(calculateNumber('DIVIDE', 2, 0.3)).to.equal('Error');
    });

    it('should round a before dividing it', () => {
      expect(calculateNumber('DIVIDE', 2.3, 1)).to.equal(2);
    });

    it('should round b before using it to divide', () => {
      expect(calculateNumber('DIVIDE', 2, 1.1)).to.equal(2);
    });

    it('should not round the return value if float', () => {
      expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
    });
  });
});
