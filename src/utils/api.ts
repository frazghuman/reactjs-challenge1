import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your API base URL
  // You can also add other Axios configurations here if needed
});

export default instance;
