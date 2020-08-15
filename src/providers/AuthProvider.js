import React from 'react';
import { connect } from 'react-redux';
import { loginUser, userAuthenticated } from '../actions';

const { createContext, useContext } = React;

const AuthContext = createContext(null);

const AuthBaseProvider = ({children, dispatch}) => {

    const getToken = () => {
        return localStorage.getItem('token');
    }

    const checkAuthState = () => {
        const token = getToken();
        if (token){
            dispatch(userAuthenticated(token))
        } else {
            dispatch(userAuthenticated())
            dispatch({type: 'USER_SIGNED_OUT'});
        }
    }

    const isAuthenticated = () => {
        return getToken();
    }

    const signIn = async (loginData) => {
        console.log('login')
        const token = await loginUser(loginData);
        if (loginData.keepOnline) {
            localStorage.setItem('token', token);
        }
        dispatch(userAuthenticated(token));
        return token;
    }

    const signOut = () => {
        localStorage.removeItem('token');
        dispatch({type: 'USER_SIGNED_OUT'});
    }

    const authApi = {
        signIn,
        checkAuthState,
        signOut,
        isAuthenticated
    }

    return (
    <AuthContext.Provider value={authApi}>
        {children}
    </AuthContext.Provider>
    )
}

export const AuthProvider = connect()(AuthBaseProvider);

export const useAuth = () => {
    return useContext(AuthContext);
}

export const withAuth = Component => props => (
    <AuthContext.Consumer>
        {authApi => <Component {...props} auth={authApi} /> }
    </AuthContext.Consumer>
)