// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for SUM(1.4, 4.5)', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle negative numbers correctly', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-6);
    });

    it('should handle zeros correctly', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for SUBTRACT(1.4, 4.5)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle negative numbers correctly', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(4);
    });

    it('should handle zeros correctly', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for DIVIDE(1.4, 4.5)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" for DIVIDE(1.4, 0)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should handle negative numbers correctly', () => {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.2);
    });

    it('should return "Error" for DIVIDE(0, 0)', () => {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid operation type', () => {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid operation type');
    });
  });
});
