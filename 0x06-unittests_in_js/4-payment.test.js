const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let utilsStub = undefined;
  let consoleSpy = undefined;

  before(() => {
    consoleSpy = sinon.spy(console, 'log');
    utilsStub = sinon.stub(Utils, 'calculateNumber');
    utilsStub.returns(10);
  });

  after(() => {
    consoleSpy.restore();
    utilsStub.restore();
  });

  it('should call the Utils.calculateNumber function', () => {
    sendPaymentRequestToApi(100, 20);
    expect(utilsStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilsStub.callCount).to.equal(1);
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
