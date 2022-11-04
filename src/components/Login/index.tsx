import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const Login = () => {
  const [termLogin, setTermLogin] = useState('');
  const [termPwd, setTermPwd] = useState('');
  const Navigate = useNavigate();

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    const ClientLogin = 'client';
    const ClientPwd = 'client';

    const AdminLogin = 'admin';
    const AdminPwd = 'admin';

    event.preventDefault();
    // console.log(termLogin + ' | ' + termPwd);
    // console.log(ClientLogin);
    if (termLogin == ClientLogin && termPwd == ClientPwd) {
      Navigate('/client');
    } else if (termLogin == AdminLogin && termPwd == AdminPwd) {
      Navigate('/admin');
    } else if (termLogin != AdminLogin) {
      setTermLogin('');
      setTermPwd('');
    }
  };

  const resetForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('clear');
    setTermLogin('');
    setTermPwd('');
  };

  return (
    <>
      <div>
        <div className="container">
          <form onSubmit={submitForm}>
            <input
              id="login"
              name="login"
              value={termLogin}
              onChange={e => setTermLogin(e.target.value)}
              type="text"
              placeholder="Login"
              className="input"
            />
            <input
              value={termPwd}
              onChange={e => setTermPwd(e.target.value)}
              type="text"
              placeholder="Password"
              className="input"
            />
            <button type="submit" className="btn">
              OK
            </button>
            {/* <button onClick={resetForm}>Clear field</button> */}
          </form>
          <p></p>
          <p>
            <i>log pass client : client</i>
          </p>
          <p>
            <i>log pass admin : admin</i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
