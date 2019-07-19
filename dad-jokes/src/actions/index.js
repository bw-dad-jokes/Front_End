import axios from 'axios'
// const port = 3200;
// const token =
//     'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';


// action types
export const REG_START = 'REG_START'
export const REG_SUCCESS = 'REG_SUCCESS'
export const REG_FAILURE = 'REG_FAILURE'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const API_REQUEST_START = 'API_REQUEST_START'
export const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS'
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE'

// action creators

export const reg = authData => async dispatch => {
    dispatch({ type: REG_START })
    try {
        const { data } = await axios.post(`https://dad-jokes-back-end.herokuapp.com/auth/signup`, authData)
        const token = data.payload
        localStorage.setItem('auth_token', token)
        dispatch({ type: REG_SUCCESS, payload: token })
    } catch (error) {
        dispatch({ type: REG_FAILURE, payload: error.response.data.error })
    }
}

// export const login = authData => async dispatch => {
//     dispatch({ type: LOGIN_START })
//     try {
//         const { data } = await axios.post(`http://localhost:${port}/api/login`, authData)
//         const token = data.payload
//         localStorage.setItem('auth_token', token)
//         console.log(token)
//         dispatch({ type: LOGIN_SUCCESS, payload: token })
//     } catch (error) {
//         console.log(error);
//         dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error })
//     }
// }

export const login = authData => async dispatch => {
    dispatch({ type: LOGIN_START })
    try {
        const { data } = await axios.post(`https://dad-jokes-back-end.herokuapp.com/auth/login`, authData)
        const token = data.payload
        // localStorage.setItem('auth_token', token)
        localStorage.setItem('current_username', authData.username)
        localStorage.setItem('current_password', authData.password)
        localStorage.setItem('current_user', authData)
        localStorage.setItem('loggedIn', true)
        console.log('This is the authData ', authData);
        console.log(data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: token })
        console.log('loggedIn' + localStorage.getItem('loggedIn'))
    } catch (error) {
        console.log(error);
        dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error })
    }
}

export const getJokesPrivate = (authData) => async dispatch => {
    dispatch({ type: API_REQUEST_START })
    try {
        const authData = localStorage.getItem('current_user')
        const { data } = await axios.get(`https://dad-jokes-back-end.herokuapp.com/api/jokes/private`, {
            // headers: { 'Authorization': token }
            headers: { 'Authorization': authData }

        })
        dispatch({ type: API_REQUEST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    }
}

export const getJokes = () => async dispatch => {
    dispatch({ type: API_REQUEST_START })
    try {
        const token = localStorage.getItem('auth_token')
        const { data } = await axios.get(`https://dad-jokes-back-end.herokuapp.com/api/jokes`, {
            headers: { 'Authorization': token }
        })
        dispatch({ type: API_REQUEST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    }
}

// Action for adding private jokes
export const addJokePrivate = joke => async dispatch => {
    dispatch({ type: API_REQUEST_START })
    try {
        const token = localStorage.getItem('auth_token')
        const privateJoke = true;
        const publicJoke = false;
        const { data } = await axios.post(`https://dad-jokes-back-end.herokuapp.com/api/jokes`, joke, {
            headers: { 'Authorization': token }
        })
        dispatch({ type: API_REQUEST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    }
}

// Action for add public jokes
export const addJokePublic = joke => async dispatch => {
    dispatch({ type: API_REQUEST_START })
    try {
        const token = localStorage.getItem('auth_token')
        const privateJoke = false;
        const publicJoke = true;
        const { data } = await axios.post(`https://dad-jokes-back-end.herokuapp.com/api/jokes`, joke, {
            headers: { 'Authorization': token }
        })
        dispatch({ type: API_REQUEST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    }
}

export const updateJoke = () => async dispatch => {
    dispatch({ type: API_REQUEST_START })
    try {
        const { data } = await axios.put()
        // dispatch({ type: API_REQUEST_SUCCESS, payload: /* TODO */ })
        console.log(data);
    } catch (error) {
        dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    }
}

export const deleteJoke = () => async dispatch => {
    dispatch({ type: API_REQUEST_START })
    try {
        const { data } = await axios.delete()
        // dispatch({ type: API_REQUEST_SUCCESS, payload: /* TODO */ })
        console.log(data);
    } catch (error) {
        dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    }
}