// const request = require('supertest')
// const app = require('../server')
// describe('Post Endpoints', () => {
//   it('test_case1', async () => {
//     const res = await request("http://api.example.com/")
//       .post('/admin/addProduct')
//       .send({
//         productName: "book",
//         description: "test book",
//         price: "120",
//         imageUrl: "abcd",
//         quantity: "10"
//       })
//     expect(res.statusCode).toEqual(200)
//     // expect(res.body).toHaveProperty('post')
//   })
// })


const request = require('supertest');
const app = require('../app'); // Import your Express app instance

describe('API Tests', () => {
 
  it('should_get_a_list_of_items', async () => {
    const response = await request(app).get('/items');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2); // Check the length of the array
  });

  
});
