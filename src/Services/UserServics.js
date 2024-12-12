import axios from 'axios';
const api = "https://jsonplaceholder.typicode.com/users";

// get all users from json placeholder api

export function getAllUsers() {
    return axios.get(api);
}

// get spesific user from json placeholder api 

 export function getUserById(id) {
    return axios.get(`${api}/${id}`);
}


// post new user to json  placeholder api
 export function postNewUser(user) {
    return axios.post(api, user);
}; 