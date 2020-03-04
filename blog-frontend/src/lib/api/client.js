import axios from 'axios';

const client = axios.create();

/*
    Global setting:
    
    // Set API url
    client.defaults.baseURL = 'https://external-api-server.com/' 

    // Header
    client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

    axios.intercepter.response.use(\
        response => {
        return response;
        }, 
        error => {
        return Promise.reject(error);
        }
    })  
*/

export default client;
