import {ACTIONS} from '../actions/types';

const initState = {
    users: [],
    user: null
};

const usersReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ACTIONS.SET_USERS:
            return {...state, users: payload};
        case ACTIONS.SET_USER:
            return {...state, user: payload};
        default:
            return state;
    }
};

export default usersReducer;