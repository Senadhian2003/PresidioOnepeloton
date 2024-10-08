// __mocks__/axios.js
const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    // You can add more mocked methods (put, delete, etc.) if needed
  };
  
  export default mockAxios;