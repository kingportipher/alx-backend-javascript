// 6-payment_token.test.js

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Verify the promise resolves with the correct object
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Indicate the test is complete
      })
      .catch((err) => done(err)); // Fail the test if an error occurs
  });

  it('should do nothing when success is false', (done) => {
    const result = getPaymentTokenFromAPI(false);

    // Check that nothing is returned when success is false
    expect(result).to.be.undefined;
    done();
  });
});
