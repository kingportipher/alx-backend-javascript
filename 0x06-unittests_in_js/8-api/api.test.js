const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api'); // Import the app instance

const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return status code 200', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct message', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  it('should return the correct content type', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.header('content-type', /text\/html/);
        done();
      });
  });
});

