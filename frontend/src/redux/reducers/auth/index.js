import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { initialize as initializeForm } from 'redux-form';

const SUBMIT = 'LOGIN_SUBMIT';
const LOADER = 'LOGIN_LOADER';
const ME = 'LOGIN_ME';

export const constants = {
    SUBMIT,
};

// ------------------------------------
// Pure Actions
// ------------------------------------
export const setLoader = loader => ({
    type: LOADER,
    loader,
});

export const setMe = me => ({
    type: ME,
    me,
});

// ------------------------------------
// Actions
// ------------------------------------
export const onSubmit = (data = {}) => (dispatch, getStore) => {
    localStorage.setItem('token', 'fdfdfddf');
    dispatch(setMe({id: 1, username: 'Sergio'}));
    dispatch(push("/"));
};

export const getMe = () => (dispatch) => {
    localStorage.setItem('token', 'fdfdfddf');
    dispatch(setMe({id: 1, username: 'Sergio'}));
};

export const logOut = () => (dispatch) => {
    dispatch(setMe({}));
    dispatch(push("/login"));
    localStorage.removeItem('token');
};


export const actions = {
    onSubmit,
    getMe,
    logOut,
};

export const reducers = {
    [LOADER]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },
    [ME]: (state, { me }) => {
        return {
            ...state,
            me,
        };
    },
};

export const initialState = {
    loader: false,
    me: {},
};

export default handleActions(reducers, initialState);