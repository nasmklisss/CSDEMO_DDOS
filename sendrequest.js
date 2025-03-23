const axios = require('axios'); // You can install axios via npm install axios

const sendRequests = async (numRequests) => {
  for (let i = 0; i < numRequests; i++) {
    try {
      const response = await axios.get('http://localhost:3000');
      console.log(`Response ${i + 1}:`, response.data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  }
};

sendRequests(200); // Change 100 to the number of requests you want to send
