import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';

//Account
export const registerUser = (username, email, password) => {
    return {
        type: 'REGISTER_USER',
        payload: axios.post(`${BASE_URL}auth/register/`, {
            'username': username,
            'email': email,
            'password': password
        })
    }

}

export const loginUser = (email, password) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`${BASE_URL}auth/login/`, {
            'email': email,
            'password': password
        })
    }

}

export const getUserData = (token) => {
    return {
        type: 'GET_USER',
        payload: axios.get(`${BASE_URL}user/data`, {
            headers: {
                Authorization: token
            }
        })
    }

}
export const clearUser = () => {
    return {
        type: 'CLEAR_USER'
    }

}

//Pokemon
export const getAllPokemon = (page) => {
    
    console.log(page);    
    return {
        type: 'GET_ALL_POKEMON',
        payload: axios.get(`${BASE_URL}pokemon?perPage=10&page=${page}`)
    }

}

export const getPokemon = (id) => {
    return {
        type: 'GET_POKEMON',
        payload: axios.get(`${BASE_URL}pokemon/${id}`)
    }

}
export const addPokemon = (name, image, type, longitude, latitude, category_id, token) => {

    let data = new FormData();
    data.append('name', name);
    data.append('image_url', image);
    data.append('longitude', longitude);
    data.append('latitude', latitude);
    data.append('category_id', category_id);

    type.map(element => {
        data.append('type', element);
    });
    return {
        type: 'ADD_POKEMON',
        payload: axios.post(`${BASE_URL}pokemon`, data)
    }

}

export const getAllCategories = () => {
    return {
        type: 'GET_ALL_CATEGORIES',
        payload: axios.get(`${BASE_URL}category`)
    }

}
export const getAllType = () => {
    return {
        type: 'GET_ALL_TYPES',
        payload: axios.get(`${BASE_URL}type`)
    }

}