import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import { API } from '../config';

export const signup = user => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const signin = user => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


//SET COOKIE

export const setCookie = (key, value) => {
    if(process.browser) {
        cookie.set(key, value, {
            expires: 1
        })
    }
};

export const removeCookie = (key) => {
    if(process.browser) {
        cookie.remove(key, {
            expires: 1
        })
    }
};

//GET COOKIE 

export const getCookie = (key) => {
    if(process.browser) {
        cookie.get(key);
    }
};

//LOCALSTORAGE

export const setLocalStorge = (key, value) => {
    if(process.browser) {
        localStorage.setItem(key, JSON.stringify(value))
    }
};

export const removeLocalStorge = (key) => {
    if(process.browser) {
        localStorage.removeItem(key);
    }
};

//AUTHENTICATE USER BY PASS DATA TO COOKIE AND LOCALSTORAGE 
export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorge('user', data.user);
    next();
};

export const isAuth = () => {
    if(process.browser) {
        const cookieChecked = getCookie(token);
        if(cookieChecked) {
            if(localStorage.getItem('userr')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
};