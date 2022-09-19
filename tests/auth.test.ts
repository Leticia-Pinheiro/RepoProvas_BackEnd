import axios from 'axios';
import supertest from 'supertest';
import app from '../src/index'
import prisma from '../src/database/postgres'
import * as signUpFactory from '../src/factories/signUpFactory'
import * as signInFactory from '../src/factories/signInFactory'
import userFactory from '../src/factories/userFactory'
import { faker } from '@faker-js/faker';

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users`
})

//-------------------------------------------------------------
describe('POST /signUp', () => {
    
    it('Returns status 201. Registration successfully complete', async () => {
        
        const user = await signUpFactory.createNewUser()
        const result = await supertest(app).post('/signUp').send(user)
        const createdUser = await prisma.users.findUnique({where: {email:user.email}});
        
        expect(result.status).toBe(200)
        expect(createdUser).not.toBeNull()
    })

    it('Returns status 401. Email already registered', async () => {        
        const user = await signUpFactory.createNewUser()
		await userFactory(user.email, user.password);
		const result = await supertest(app).post('/sign-up').send(user);		

		expect(result.status).toBe(404) 
    })

    it('Returns status 401. Incompatible passwords', async () => {
        
        const user = await signUpFactory.createNewUser()
        
        const result = await supertest(app).post('/signUp').send({...user, confirmedPassword: "teste75698"})
        expect(result.status).toBe(401)     
        
    })

})

//-------------------------------------------------------------
describe('POST /signIn', () => {

    it('Returns status 201. Login done', async () => {
        const user = await signInFactory.createNewUser()
		await userFactory(user.email, user.password)
		const userLoggedIn = await supertest(app).post('/signIn').send(user)
		const status = userLoggedIn.status
		expect(status).toEqual(200)
    })

    it('Returns status 401. Email not registered', async () => {
        const user = await signInFactory.createNewUser()

		const userLoggedIn = await supertest(app).post('/signIn').send({ ...user, email: faker.internet.email() })
		const status = userLoggedIn.status
		expect(status).toEqual(404)
    })

    it('Returns status 401. Incorrect password', async () => {
        const user = await signInFactory.createNewUser()

		const userLoggedIn = await supertest(app).post('/signIn').send({ ...user, password: 'teste79586' })
		const status = userLoggedIn.status
		expect(status).toEqual(404)
    })

})

//-------------------------------------------------------------
afterAll(async () => {
    await prisma.$disconnect();
});