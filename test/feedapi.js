'use strict';
const yConfig = require('yaml-config');

const config = yConfig.readConfig(`${__dirname}/../config/app.yaml`, 'test');
let chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

let expect = chai.expect;

let FeedServices = require('../app/services/FeedService');

const URI = 'http://127.0.0.1:' + config.port;

describe('Status :', () => {

  const url = '/';

  it('Should list feed of current user', (done) => {

    chai.request(URI)
      .get(url)
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      });
  });
});
