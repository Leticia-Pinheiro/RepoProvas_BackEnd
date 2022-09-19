import supertest from 'supertest';
import app from '../src/index'
import prisma from '../src/database/postgres'
import * as signUpFactory from './factories/signUpFactory'
import createNewUser from './factories/signInFactory'
import userFactory from './factories/userFactory'
import tokenFactory from './factories/tokenFactory';
import createNewTest from './factories/testFactory';
import { faker } from '@faker-js/faker';

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE tests`
})

//--------------------------------------------------------
describe('POST /test', () => {
    it('Returns status 201. Registration successfully complete', async () => {
        const test = createNewTest()
        const token = await tokenFactory()
        
		const result = await supertest(app).post('/test').set('Authorization', `Bearer ${token}`).send(test);
		expect(result.status).toBe(200)	         
    })

    it('Returns status 401. Token not informed', async () => {
        const test = createNewTest()        
        
		const result = await supertest(app).post('/test').send(test)
		expect(result.status).toBe(401)
    })

    it('Returns status 404. Discipline not found', async () => {
        const test = createNewTest()
        const token = await tokenFactory()
        const newTest = {...test, disciplineName: "invalid discipline"}
        
		const result = await supertest(app).post('/test').set('Authorization', `Bearer ${token}`).send(newTest);
		expect(result.status).toBe(404)	  
    })

    it('Returns status 404. Teacher not found', async () => {
        const test = createNewTest()
        const token = await tokenFactory()
        const newTest = {...test, teacherName: "invalid teacher"}
        
		const result = await supertest(app).post('/test').set('Authorization', `Bearer ${token}`).send(newTest);
		expect(result.status).toBe(404)	  
    })

    it('Returns status 404. Category not found', async () => {
        const test = createNewTest()
        const token = await tokenFactory()
        const newTest = {...test, categoryName: "invalid category"}
        
		const result = await supertest(app).post('/test').set('Authorization', `Bearer ${token}`).send(newTest);
		expect(result.status).toBe(404)	  
    })
    
})

//--------------------------------------------------------
describe('GET /tests/discipline', () => {
    it("Returns status 200. Get all tests by disciplines",async () => {
        const token = await tokenFactory()        
        
        const result = await supertest(app).get('/tests/discipline').send().set('Authorization', 'Bearer ' + token)        
        expect(result.status).toBe(200)
        expect(result.body).toBeInstanceOf(Array);
    });

    it("Returns status 401. Token not informed",async () => {

        const result = await supertest(app).get('/tests/discipline').send()        
        expect(result.status).toBe(401)        
    });    
})

//--------------------------------------------------------
describe('GET /tests/teacher', () => {
    it("Returns status 200. Get all tests by teacher",async () => {
        const token = await tokenFactory()        
        
        const result = await supertest(app).get('/tests/teacher').send().set('Authorization', 'Bearer ' + token)        
        expect(result.status).toBe(200)
        expect(result.body).toBeInstanceOf(Array);
    });

    it("Returns status 401. Token not informed",async () => {
                       
        const result = await supertest(app).get('/tests/teacher').send()        
        expect(result.status).toBe(401)        
    });    
})

afterAll(async () => {
    await prisma.$disconnect();
});