var app = require('./index'),
    expect = require('chai').expect,
    request = require('supertest');

describe('when calling index route', function () {
    it('should respond with 200', function (done) {
        request(app)
            .get('/')
            .expect(function(res){expect(res.text).to.equal('Home!')})
            .expect(200, done);
    });
});