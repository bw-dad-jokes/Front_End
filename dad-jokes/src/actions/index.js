import axios from 'axios'
import { log } from 'util';
// const port = 3200;

// action types
export const REG_START = 'REG_START'
export const REG_SUCCESS = 'REG_SUCCESS'
export const REG_FAILURE = 'REG_FAILURE'
export const DELETE_START = 'DELETE_START'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAILURE = 'DELETE_FAILURE'
export const UPDATE_START = 'UPDATE_START'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const UPDATE_FAILURE = 'UPDATE_FAILURE'
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

// export const reg = authData => async dispatch => {
//     dispatch({ type: LOGIN_START })
//     try {
//         const { data } = await axios.post(`http://localhost:${port}/api/reg`, authData)
//         const token = data.payload
//         localStorage.setItem('auth_token', token)
//         dispatch({ type: LOGIN_SUCCESS, payload: token })
//     } catch (error) {
//         dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error })
//     }
// }

export const login = authData => async dispatch => {
    dispatch({ type: LOGIN_START })
    try {
        const { data } = await axios.post(`https://dad-jokes-back-end.herokuapp.com/auth/login`, authData)
        const token = data.authToken
        localStorage.setItem('auth_token', token)
        localStorage.setItem('current_username', authData.username)
        localStorage.setItem('current_password', authData.password)
        localStorage.setItem('current_userId', data.userId)
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

export const getJokesPrivate = () => async dispatch => {
    dispatch({ type: API_REQUEST_START })
    const authData = localStorage.getItem('current_user')
    const token = localStorage.getItem('auth_token')
    try {

        const { data } = await axios.get(`https://dad-jokes-back-end.herokuapp.com/api/jokes/private`, {
            headers: { 'Authorization': token }

        })
        dispatch({ type: API_REQUEST_SUCCESS, payload: data })
    } catch (error) {
        console.log(authData, token)
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

// Action for adding jokes

export const addJoke = joke => async dispatch => {
    console.log('inside addJoke action');

    dispatch({ type: API_REQUEST_START })
    const authData = localStorage.getItem('current_user')
    const token = localStorage.getItem('auth_token')
    try {
        const jokeData = {
            "joke_text": joke.joke_text,
            "public": joke.isPublic,
            "private": joke.isPrivate,
            "user_id": joke.user_id
        }
        console.log('jokeData const ' + JSON.stringify(jokeData));

        const { data } = await axios.post(`https://dad-jokes-back-end.herokuapp.com/api/jokes`, jokeData, {
            headers: { 'Authorization': token }

        })
        dispatch({ type: API_REQUEST_SUCCESS, payload: data })
    } catch (error) {
        console.log(authData, token, 'Joke ' + joke.joke_text)
        dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    }
}


// Action for updating jokes

export const updateJoke = (joke) => async dispatch => {
    dispatch({ type: UPDATE_START })
    try {
        const { data } = await axios.put(`https://dad-jokes-back-end.herokuapp.com/api/jokes/${joke.joke_id}`)
        dispatch({ type: UPDATE_SUCCESS, payload: data })
        console.log(data);
    } catch (error) {
        dispatch({ type: UPDATE_FAILURE, payload: error.toString() })
    }
    return (async dispatch => {
        await axios.put(`https://dad-jokes-back-end.herokuapp.com/api/jokes/${joke.joke_id}`)
            .then(res => {
                dispatch({ type: API_REQUEST_SUCCESS, payload: res.data })
            })
            .catch(error => {
                dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
            })
    })
}

// Action for deleting jokes
// export const deleteJoke = (jokeId) => async dispatch => {
//     dispatch({ type: API_REQUEST_START })
//     try {
//         const { data } = await axios.delete(`https://dad-jokes-back-end.herokuapp.com/api/jokes/${jokeId}`)
//         dispatch({ type: API_REQUEST_SUCCESS, payload: res.data })
//     } catch (error) {
//         dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
//     }
// }

export const deleteJoke = (jokeId) => async dispatch => {
    // dispatch({ type: API_REQUEST_START })
    // try {
    //     const { data } = await axios.delete(`https://dad-jokes-back-end.herokuapp.com/api/jokes/${jokeId}`)
    //     dispatch({ type: API_REQUEST_SUCCESS, payload: jokeId /* TODO */ })
    //     console.log(data);
    // } catch (error) {
    //     dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    // }
    // dispatch({ type: API_REQUEST_START })
    // const { data } = await axios.delete(`https://dad-jokes-back-end.herokuapp.com/api/jokes/${jokeId}`)
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
}

export const handleDelete = async e => {
    e.preventDefault();
    console.log(e.target)
    const token = localStorage.getItem('auth_token')
    // Promise is resolved and value is inside of the response const.
    const response = await axios.delete(`https://dad-jokes-back-end.herokuapp.com/api/jokes/${e.target.name}`,
        {

            headers: { 'Authorization': token }

        }
    );

    console.log(e);
    console.log(response);
    console.log(response.data);
    setTimeout(() => {
        //window.location = "http://localhost:3000/private";
        window.location.reload(false);
    }, 1000);
}

export const handleUpdate = async e => {
    e.preventDefault();
    console.log(e.target);
    const token = localStorage.getItem('auth_token');
    const response = await axios.put(`https://dad-jokes-back-end.herokuapp.com/api/jokes/${e.target.name}`)
    window.scrollTo(0, 0);
}

export const setJokeToForm = async e => {
    e.preventDefault();
    console.log(e.target);

    // Get jokeid from the name attribute of the button, where I stored the id value
    var jokeId = e.target.name.toString();
    // Combine the prefix and joke id, used to find elements by id
    // In private jokes the element ids are contain a descriptive name
    // along with the id of the joke, jokeText33 for example
    var jTxtId = 'jokeText' + jokeId;
    console.log(jTxtId)
    //var jokeForm = document.getElementById('jokeForm');

    // Get the element which contains the joke text and store its inner text
    var jokeText = document.getElementById(jTxtId).innerText;
    // Convert this text to an array
    jokeText = jokeText.trim().split(" ");
    // Remove the first element which will be "Joke:"
    jokeText.shift();
    // Turn array back into a text string
    var jokeTxt = jokeText.join(' ');
    localStorage.setItem('editJokeTxt', jokeText);

    var publicInfoId = 'jokePublic' + jokeId
    var publicInfo = document.getElementById(publicInfoId).innerText;
    publicInfo = publicInfo.trim().split(" ");
    publicInfo.shift();
    var publicBool = publicInfo.join(' ');
    localStorage.setItem('editPublicBool', publicBool);

    var privateInfoId = 'jokePrivate' + jokeId
    var privateInfo = document.getElementById(privateInfoId).innerText;
    privateInfo = privateInfo.trim().split(" ");
    privateInfo.shift();
    var privateBool = privateInfo.join(' ');
    localStorage.setItem('editPrivateBool', privateBool);

    document.getElementById('joke').value = jokeTxt;
    document.getElementById('publicCheck').value = publicBool;
    document.getElementById('privateCheck').value = privateBool;

    localStorage.setItem('isEditing', true);
    console.log(privateBool, publicBool)
    document.getElementById('jokeFormButton').innerText = 'Edit Joke'

    console.log(e.target.name)
    console.log(jokeTxt);
    window.scrollTo(0, 0);
}