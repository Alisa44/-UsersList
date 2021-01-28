import axios from 'axios';
import {ALL_USERS, ONE_USER} from '../constants/api';

export const getAllUsers = () => {
    return axios({
        url: ALL_USERS,
        method: 'get',
        headers: { 'content-type': 'application/json' },
        withCredentials: true,
    });
};

export const createUser = data => {
    return axios({
        url: ALL_USERS,
        method: 'post',
        headers: { 'content-type': 'application/json' },
        withCredentials: true,
        data
    });
};

export const updateUser = (id, data) => {
    return axios({
        url: `${ONE_USER}/id`,
        method: 'put',
        headers: { 'content-type': 'application/json' },
        withCredentials: true,
        data
    });
};

export const deleteUser = id => {
    return axios({
        url: `${ONE_USER}/id`,
        method: 'delete',
        headers: { 'content-type': 'application/json' },
        withCredentials: true,
    });
};