var Chai = require('chai'); // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();

// environment
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var beforeEach = lab.beforeEach;
var expect = Chai.expect;

var server = require("../../../app.js");

describe('apiCall', function () {
  it('should reply with "Hello!" messsage', function (done) {
    var options = {
      method: "GET",
      url: "/api/call"
    };

    server.inject(options, function (response) {
      var result = response.result;

      expect(response.statusCode).to.be.equal(200);
      expect(result).to.be.an('object');
      expect(response.result.message).to.be.equal('Hello!');

      done();
    });
  });
});
