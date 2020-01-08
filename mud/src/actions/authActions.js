import axios from 'axios';
import { axiosWithAuth } from '../helpers'
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
} from './types';

//User Registration endpoint
export const registerUser = register => dispatch => {
    const creds = register.records[0].fields;
    dispatch({ type: REGISTER_START });
    return axios
        .post(
            `https://multi-user-dungeon-lambda.herokuapp.com/api/registration/`,
            creds
        )
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('UserName', res.data.UserName);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.UserName
            });
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.message
            });
        });
};

//User login endpoint
export const loginUser = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post(`https://multi-user-dungeon-lambda.herokuapp.com/api/login/`, creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('UserName', res.data.UserName);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.UserName
            });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err
            });
        });
};