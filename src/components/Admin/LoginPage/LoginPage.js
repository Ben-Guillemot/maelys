import React, { useState } from 'react';
import AdminMain from '../AdminMain/AdminMain';
import adminConnection from '../../../utils/adminConnection';
import './loginpage.scss';

function LoginPage() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    adminConnection(emailValue, passwordValue);
  };
  return (
    <AdminMain>
      <form action="post" className="login__container" onSubmit={handleSubmit}>
        <p>Email</p>
        <input
          type="email"
          label="email"
          placeholder="Votre email..."
          className="login__container-inputText"
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
        />
        <p>Mot de passe</p>
        <input
          type="password"
          label="password"
          placeholder="Votre mot de passe..."
          className="login__container-inputText"
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
        />
        <div className="login__container-buttondiv">
          <button type="submit" className="login__container-button">Se connecter</button>
        </div>
      </form>

    </AdminMain>
  );
}

LoginPage.propTypes = {
};
LoginPage.defaultProps = {
};
export default React.memo(LoginPage);
