import {
    GET_USERS,
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    USER_ERRORS,
    SET_CURRENT
} from '../actions/types';

const initialState = {
    users: [],
    errors: [],
    currentUser: null
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            };
        
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, payload]
            };

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== payload._id)
            };

        case SET_CURRENT:
            return {
                ...state,
                currentUser: payload
            };

        case UPDATE_USER:
        return {
                ...state,
                users: state.users.map(user => user._id === payload._id ? payload : user),
                currentUser: null
            }

        case USER_ERRORS:
            return {
                ...state,
                errors: payload
            };
    
        default:
            return state;
    }
};