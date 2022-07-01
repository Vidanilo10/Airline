import axios from 'axios';


const baseURL = process.env.REACT_APP_API_URL

export const requestWithoutToken = (endpoint, data, method='GET') => {
    
    const url = `${ baseURL }/${ endpoint }`;

    if ( method === 'GET' ){
        var config = {
            method: 'get',
            url: url,
            headers: { }
        };
    } else {
        var config = {
            method: 'post',
            url: url,
            headers: { 'Content-Type': 'application/json' },
            data : data
        };
    }

    return axios(config)
}


export const requestWithToken = (endpoint, data, method='GET') => {
    
    const url = `${ baseURL }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ){
        var config = {
            method: 'get',
            url: url,
            headers: { 'Authorization': `Token ${ token }` }
        };
    } else {
        var config = {
            method: 'post',
            url: url,
            headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${ token }`},
            data : data
        };
    }

    return axios(config)
}