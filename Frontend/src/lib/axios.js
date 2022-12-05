import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhbm55IiwiaWF0IjoxNjY5OTE2Mzc0fQ.VKCkcLK9jRquZotVYZgnRBZDsi-6m-t7k0wwtfBN1ww';

export default axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    withCredentials: true
});