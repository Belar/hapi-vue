var Chai = require('chai'); // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();

// environment
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var beforeEach = lab.beforeEach;
var expect = Chai.expect;

var server = require('../../../app.js');

describe('apiCall', function () {
  it('should reply with "Hello!" messsage', async function () {
    var options = {
      method: 'GET',
      url: '/api/call'
    };

    var response = await server.inject(options);

    expect(response).to.be.an('object');
    expect(response.statusCode).to.be.equal(200);
    expect(response.result.message).to.be.equal('Hello!');
  });
});

