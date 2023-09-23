const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('returns the appropriate response when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });

  it('returns nothing when the success parameter is false', () => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
  });
});
