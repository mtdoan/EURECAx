// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000"

const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const { app } = require('../../index');
const Users = require('../../models/userModel');
const Usages = require('../../models/usageModel');

chai.use(chaiHttp);
const expect = chai.expect;
const agent = chai.request.agent(app);

describe('Usage Controller', () => {
    beforeEach(async () => {
        await Users.deleteMany();
        await Usages.deleteMany();
    });

    // Record - return status 200
    it('Record usage - successful', async () => {
        await registerTestUser();
        const cookies = (await loginTestUser()).headers['set-cookie'];
        const res = await agent
            .post('/api/usages')
            .set('Cookie', cookies)
            .send({ searchQuery: 'hello1' });
        expect(res).to.have.status(200);
    });

    // Get usages - return status 200 and usages
    it('Get usages - successful', async () => {
        await registerTestUser();
        const cookies = (await loginTestUser()).headers['set-cookie'];
        await agent
            .post('/api/usages')
            .set('Cookie', cookies)
            .send({ searchQuery: 'hello1' });
        await agent
            .post('/api/usages')
            .set('Cookie', cookies)
            .send({ searchQuery: 'hello2' });
        await agent
            .post('/api/usages')
            .set('Cookie', cookies)
            .send({ searchQuery: 'hello3' });
        await agent
            .post('/api/usages')
            .set('Cookie', cookies)
            .send({ searchQuery: 'hello1' });
        const res = await agent
            .get('/api/usages')
            .set('Cookie', cookies)
            .send();
        expect(res).to.have.status(200);
        expect(res.body).to.be.eql([
            {
                searchQuery: 'hello1',
            },
            {
                searchQuery: 'hello3',
            },
            {
                searchQuery: 'hello2',
            },
        ]);
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
