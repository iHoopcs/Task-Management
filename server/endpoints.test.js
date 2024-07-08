const request = require('supertest'); 
const app = require('./endpoints'); 
const User = require('./Models/users'); 

describe('GET', () => {
    describe('/', () => {
        test('properly respond with Welcome to Task Management App!', async () => {
            const response = await request(app).get('/'); 
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('Welcome to Task Management App!')
        });
    }); 

}); 

describe('POST', () => {
    describe('/create-user', () => {
        test('properly creates user and adds to database', async () =>{
            await request(app).post('/create-user').expect(200).expect('User created'); 
        })
    })
    
})
