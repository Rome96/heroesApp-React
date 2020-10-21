import React from 'react'

const LoginScreen = ({ history }) => {

  const handleLogin = () => {
    // history.push('/')
    history.replace('/')
  }

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