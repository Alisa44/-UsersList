import { ACTIONS } from '../actions/types';

const usersReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.SET_USERS:
            return payload;
        default:
            return state;
    }
};

export default usersReducer;