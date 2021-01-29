import {createUser, deleteUserById, getAllUsers, getUser, updateUser} from '../../requests';
import {ACTIONS} from './types';

export const setUsers = data => ({
    type: ACTIONS.SET_USERS,
    payload: data
});

export const setUser = data => ({
    type: ACTIONS.SET_USER,
    payload: data
});

export const getUsers = () => dispatch => {
    getAllUsers()
        .then(res => {
            if (res.status === 200 && res.data) {
                dispatch(setUsers(res.data));
            }
        }).catch(err => {
        console.log('get all users error happened', err);
    });
};

export const createNewUser = (data, callback) => dispatch => {
    createUser(data)
        .then(res => {
            if (res.status === 200 && res.data) {
                callback();
                dispatch(getUsers());
            }
        }).catch(err => {
        console.log('create user error happened', err);
    });
};

export const changeUser = (id, data, callback) => dispatch => {
    updateUser(id, data)
        .then(res => {
            if (res.status === 200 && res.data) {
                dispatch(setUser(res.data));
                callback();
            }
        }).catch(err => {
        console.log('update user error happened', err);
    });
};

export const deleteUser = (id, callback = () => {
}) => dispatch => {
    deleteUserById(id)
        .then(res => {
            callback();
            if (res.status === 200 && res.data) {
                dispatch(setUsers(res.data));
            }
        }).catch(err => {
        console.log('delete user error happened', err);
    });
};

export const getUserById = id => dispatch => {
    getUser(id)
        .then(res => {
            if (res.data && res.status === 200) dispatch(setUser(res.data));
        }).catch(err => {
        console.log('get user by id error happened', err);
    });
};