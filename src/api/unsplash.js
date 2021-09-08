import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID UYBGwqKKYR3q7r756w9PROpVXrDN4cvapSPWhxblm4g'
    }
});