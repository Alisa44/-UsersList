import {deleteUserById, getAllUsers, updateUser} from '../../requests';
import {ACTIONS} from './types';

export const setUsers = data => ({
    type: ACTIONS.SET_USERS,
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

export const createUser = data => dispatch => {
    createUser(data)
        .then(res => {
            dispatch(getAllUsers());
        }).catch(err => {
        console.log('create user error happened', err);
    });
};

export const changeUser = (id, data) => dispatch => {
    updateUser(id, data)
        .then(res => {

        }).catch(err => {
        console.log('update user error happened', err);
    });
};

export const deleteUser = id => dispatch => {
    deleteUserById(id)
        .then(res => {
            dispatch(getAllUsers());
        }).catch(err => {
        console.log('delete user error happened', err);
    });
};