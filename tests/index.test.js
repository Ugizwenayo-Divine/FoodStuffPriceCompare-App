/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index';

chai.use(chaiHttp);
chai.should();

describe('setting up tests', () => {
  it('welcome message', () => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('welcome');
      });
  });
});
