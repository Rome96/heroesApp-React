import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

const LoginScreen = ({ history }) => {

  const { dispatch } = useContext(AuthContext)

  const handleLogin = () => {
    // history.push('/')
    dispatch({
      type: types.login,
      payload: {
        name: 'Turiano'
      }
    });
    
    history.replace('/');
  };

  return (
    <div className='container mt-5'>
      <h3>Login</h3> <hr/>

      <button
        onClick={handleLogin}
        className='btn btn-primary'
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;