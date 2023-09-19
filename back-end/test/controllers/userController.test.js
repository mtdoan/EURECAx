// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000"

const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const { app } = require('../../index');
const Users = require('../../models/userModel');

chai.use(chaiHttp);
const expect = chai.expect;
const agent = chai.request.agent(app);

describe('User Controller', () => {
  beforeEach(async () => {
    await Users.deleteMany();
  });

  // registerUser - return status 201
  it('Register a new user - Successful', async () => {
    const reqBody = {
      username: 'testuser',
      firstname: 'Firstname',
      lastname: 'Lastname',
      email: 'testemail@gmail.com',
      password: '123456789',
    };
    //
    const res = await agent.post('/api/users').send(reqBody);
    expect(res).to.have.status(201);
  });

  // registerUser - return status 500
  it('Register a new user - Duplicate key username', async () => {
    await registerTestUser();

    // re-register a user with existing username
    const reqBodyUser = {
      username: 'testuser',
      firstname: 'Firstname',
      lastname: 'Lastname',
      email: 'newtestuser@gmail.com',
      password: '123456789',
    };
    const res = await agent.post('/api/users').send(reqBodyUser);
    expect(res).to.have.status(500);
  });

  // registerUser - return status 400
  it('Register a new user - User email already exists', async () => {
    await registerTestUser();

    // re-register a user with existing username
    const reqBodyUser = {
      username: 'newtestuser',
      firstname: 'Firstname',
      lastname: 'Lastname',
      email: 'testemail@gmail.com',
      password: '123456789',
    };
    const res = await agent.post('/api/users').send(reqBodyUser);
    expect(res).to.have.status(400);
  });

  // authUser - return status 200
  it('Auth user - Successful', async () => {
    await registerTestUser();
    const res = await loginTestUser();
    expect(res).to.have.status(200);
  });

  // authUser - return status 401
  it('Auth user - Invalid email', async () => {
    await registerTestUser();

    // Auth user with invalid email
    const reqBody = {
      email: 'invalidemail@gmail.com',
      password: '123456789',
    };
    const res = await agent.post('/api/users/auth').send(reqBody);
    expect(res).to.have.status(401);
  });

  // authUser - return status 401
  it('Auth user - Invalid password', async () => {
    await registerTestUser();

    // Auth user with invalid password
    const reqBody = {
      email: 'testemail@gmail.com',
      password: 'invalidpassword',
    };
    const res = await agent.post('/api/users/auth').send(reqBody);
    expect(res).to.have.status(401);
  });

  // Logout - return status 200
  it('Logout user - Successful', async () => {
    await registerTestUser();
    const cookies = (await loginTestUser()).headers['set-cookie'];
    const res = await agent
      .post('/api/users/logout')
      .set('Cookie', cookies)
      .send();
    expect(res).to.have.status(200);
  });
});

after(() => {
  agent.close();
});

const registerTestUser = () => {
  const reqBody = {
    username: 'testuser',
    firstname: 'Firstname',
    lastname: 'Lastname',
    email: 'testemail@gmail.com',
    password: '123456789',
  };
  return agent.post('/api/users').send(reqBody);
};

const loginTestUser = () => {
  const reqBody = {
    email: 'testemail@gmail.com',
    password: '123456789',
  };
  return agent.post('/api/users/auth').send(reqBody);
};
