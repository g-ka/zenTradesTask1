import axios from 'axios';

export default axios.create({
  baseURL: 'https://s3.amazonaws.com/open-to-cors/assignment.json'
})