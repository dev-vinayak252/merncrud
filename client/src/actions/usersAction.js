import axios from 'axios';
import {
    GET_USERS,
    ADD_USER,
    DELETE_USER,
    SET_CURRENT,
    UPDATE_USER,
    USER_ERRORS
} from './types';

export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/users/fetchAll');
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: USER_ERRORS,
            payload: JSON.stringify(err)
        });
    }
};

export const addUser = (userData) => async (dispatch) => {
    const config = { headers: { 'Content-Type': 'application/json' }};
    try {
        const res = await axios.post('/api/users', userData, config);
        dispatch({
            type: ADD_USER,
            payload: res.data
        });        

    } catch (err) {
        dispatch({
            type: USER_ERRORS,
            payload: JSON.stringify(err)
        });
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`/api/users/${id}`);
        dispatch({
            type: DELETE_USER,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: USER_ERRORS,
            payload: JSON.stringify(err)
        });
    }
};

export const setCurrent = (selectedUserData) => (dispatch) => {
    dispatch({
        type: SET_CURRENT,
        payload: selectedUserData
    });
};

export const updateUser = (updatedData) => async (dispatch) => {
    const config = { headers: { 'Content-Type': 'application/json' }}
    try {
        const res = await axios.put(`/api/users/${ updatedData._id }`, updatedData, config);
        dispatch({
            type: UPDATE_USER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: USER_ERRORS,
            payload: JSON.stringify(err)
        });
    }
};