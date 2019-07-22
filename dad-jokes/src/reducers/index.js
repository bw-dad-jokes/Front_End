// import action types
import {
    REG_START,
    REG_SUCCESS,
    REG_FAILURE,
    DELETE_START,
    DELETE_SUCCESS,
    DELETE_FAILURE,
    UPDATE_START,
    UPDATE_SUCCESS,
    UPDATE_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    API_REQUEST_START,
    API_REQUEST_SUCCESS,
    API_REQUEST_FAILURE,
} from '../actions'

// setup initial state
const initialState = {
    // auth-related
    loggingIn: false,
    registering: false,
    loggedIn: false,
    token: null,
    currentUser: null,
    jokeToEdit: null,
    jokeToDelete: null,
    deleting: null,
    // CRUD-related
    makingAPIRequest: false,
    jokes: [],
    // general application-related
    error: null,
}

// export reducer function
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case REG_START:
            return {
                ...state,
                registering: true,
            }
        case REG_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                currentUser: action.payload,
                token: action.payload,
            }
        case REG_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                error: action.payload,
            }
        case DELETE_START:
            return {
                ...state,
                deleting: true,
                jokeToDelete: action.payload,
                token: action.payload
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                currentUser: action.payload,
                token: action.payload,
            }
        case DELETE_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                currentUser: action.payload,
                token: action.payload,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                error: action.payload,
            }
        case API_REQUEST_START:
            return {
                ...state,
                makingAPIRequest: true,
            }
        case API_REQUEST_SUCCESS:
            return {
                ...state,
                makingAPIRequest: false,
                jokes: action.payload,
            }
        case API_REQUEST_FAILURE:
            return {
                ...state,
                makingAPIRequest: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default rootReducer