const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let utilSpy = undefined;

  before(() => {
    utilSpy = sinon.spy(Utils, 'calculateNumber');
  });

  after(() => {
    utilSpy.restore();
  });

  it('should call the Utils.calculateNumber function', () => {
    sendPaymentRequestToApi(100, 20);
    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilSpy.callCount).to.equal(1);
  });
});
