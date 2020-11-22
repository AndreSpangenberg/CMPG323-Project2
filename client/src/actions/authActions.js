import axios from 'axios';
import {returnErrors} from './errorActions';

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "./types";

//check token and load user
export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({type: USER_LOADING});

    //get token from local storage
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    //If token add header
    if(token) {
        config.headers['x-auth-token'] = token;
    }

    axios
      .get('/api/auth/user', tokenConfig(getState))
      .then(res => 
        dispatch({
          type: USER_LOADED,
          payload: res.data
        })
      )
      .catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
          dispatch({
              type: AUTH_ERROR
          });
      });

};
//register users:
export const register = ({ name, surname, email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    // request body
    const body = JSON.stringify({name, email, password});

    axios.post('/api/users',body,config)
      .then(res => dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
      }))
      .catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
          dispatch({
              type: REGISTER_FAIL
          });
      });
};

//Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
//setup config/headers and token
export const tokenConfig = getState => {
    //get token from locaat state
    const token = getState().auth.token;

    //headers 
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //If token add to header
    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}