import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const paramsForNotify = {
    position: 'center-bottom',
    distance: '16px',
    timeout: 3000,
    width: '300px',
    fontSize: '16px',
    borderRadius: '10px',
    showOnlyTheLastOne: true,
    fontFamily: 'Montserrat',
    cssAnimationStyle: 'from-bottom',
    fontAwesomeIconSize: '20px'
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  // Setting the authorization header in the original request parameters
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  // Clearing the authorization header
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      // POST request for user registration
      const res = await axios.post('/users/signup', credentials); //signup
      console.log(res.data);
      // Setting the received authorization token in the header
      setAuthHeader(res.data.token);
      // Returning data from the server response
      return res.data;
    } catch (error) {
      if ( error.response.status === 400 ) {
        Notify.failure("User creation error.", paramsForNotify);
      } else if (error.response.status === 500) {
        Notify.failure("Server error.", paramsForNotify);
      }
       // Error handling with the rejectWithValue call
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      // POST request for user authorization
      const res = await axios.post('/users/login', credentials);
      // Setting the received authorization token in the header
      setAuthHeader(res.data.token);
      // Returning data from the server response 
      return res.data; 
    } catch (error) {
      if ( error.response.status === 400 ) {
        Notify.failure("Login error.", paramsForNotify);
      }
      // Error handling with the rejectWithValue call
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // POST request for user exit
    await axios.post('/users/logout');
    clearAuthHeader(); // Clearing the authorization header
  } catch (error) {
    if ( error.response.status === 401 ) {
      Notify.failure("Logout error.", paramsForNotify);
    } else if (error.response.status === 500) {
      Notify.failure("Server error.", paramsForNotify);
    }
    // Error handling with the rejectWithValue call
    return thunkAPI.rejectWithValue(error.message); 
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // Error if the token is not saved in the state
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // Setting the stored authorization token in the header
      setAuthHeader(persistedToken);
      // Execution of a GET request to obtain information about the user
      const res = await axios.get('/users/current');
      // Returning data from the server response
      return res.data;
    } catch (error) {
      Notify.failure("Missing header with authorization token.", paramsForNotify);
      // Error handling with the rejectWithValue call
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
