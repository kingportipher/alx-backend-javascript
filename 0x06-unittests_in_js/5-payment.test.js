// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  // Setup before each test
  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // Cleanup after each test
  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct total for inputs 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify the console.log output
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    // Verify console.log was only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('should log the correct total for inputs 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify the console.log output
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    // Verify console.log was only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
