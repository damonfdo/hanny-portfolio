import axios from 'axios';

const token = localStorage.getItem('user');


export default axios.create({
    baseURL: 'http://server:3000',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    withCredentials: true
});