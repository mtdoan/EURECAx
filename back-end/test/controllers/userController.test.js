// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000"

const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const { app } = require('../../index');

const should = chai.should();

chai.use(chaiHttp);

// Agent that will keep track of our cookies
const agent = chai.request.agent(app);

const User = require('../../models/userModel');

describe('User Controller', function () {
  // registerUser - return status 400
  it('Register a new user - User already exists', function (done) {
    const reqBody = {
      username: 'testuser3',
      firstname: 'Firstname',
      lastname: 'Lastname',
      email: 'testemail3@gmail.com',
      password: '123456789',
    };
    agent
      .post('/api/users')
      .send(reqBody)
      .end(function (err, res) {
        res.should.have.status(400);
        done();
      });
  });

  // authUser - return status 200
  it('Auth user & get token - Successful', function (done) {
    const reqBody = {
      email: 'testemail3@gmail.com',
      password: '123456789',
    };
    agent
      .post('/api/users/auth')
      .send(reqBody)
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });

  // authUser - return status 401
  it('Auth user & get token - Invalid email or password', function (done) {
    const reqBody = {
      email: 'invalidemail@gmail.com',
      password: 'invalid',
    };
    agent
      .post('/api/users/auth')
      .send(reqBody)
      .end(function (err, res) {
        res.should.have.status(401);
        if (err) return done(err);
        return done();
      });
  });
});

describe('Task', (done) => {
  console.log('mindy delete');
  afterEach(() => {
    Task.Users.deleteMany({}, (err, response) => {
      done();
    });
  });
});

after(function () {
  agent.close();
});
