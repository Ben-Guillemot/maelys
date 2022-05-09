import React, { useState } from 'react';
import Main from '../Main/Main';
import sendContactMessage from '../../utils/sendContactMessage';
import './contactpage.scss';

function ContactPage() {
  const [firstnameValue, setFirstnameValue] = useState('');
  const [lastnameValue, setLastnameValue] = useState('');
  const [telValue, setTelValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    sendContactMessage(firstnameValue, lastnameValue, telValue, emailValue, textValue);
    setFirstnameValue('');
    setLastnameValue('');
    setTelValue('');
    setEmailValue('');
    setTextValue('');
  };

  return (
    <Main>
      <div className="contactPage__container">
        <h2 className="contactPage__container-title">Nous contacter</h2>
        <form action="post" onSubmit={handleSubmit}>
          <section className="contactPage__container-section">
            <div className="contactPage__container-section-content">
              <p>Votre Prénom</p>
              <input
                type="text"
                label="firstname"
                placeholder="Votre prénom..."
                className="inputText"
                value={firstnameValue}
                onChange={(event) => setFirstnameValue(event.target.value)}
              />
            </div>
            <div className="contactPage__container-section-content">
              <p>Votre Nom</p>
              <input
                type="text"
                label="lastname"
                placeholder="Votre nom..."
                className="inputText"
                value={lastnameValue}
                onChange={(event) => setLastnameValue(event.target.value)}
              />
            </div>
          </section>
          <section className="contactPage__container-section">
            <div className="contactPage__container-section-content">
              <p>Votre Téléphone</p>
              <input
                type="text"
                label="tel"
                placeholder="Votre téléphone..."
                className="inputText"
                value={telValue}
                onChange={(event) => setTelValue(event.target.value)}
              />
            </div>
            <div className="contactPage__container-section-content">
              <p>Votre Email</p>
              <input
                type="email"
                label="email"
                placeholder="Votre email..."
                className="inputText"
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
              />
            </div>
          </section>
          <section className="contactPage__container-section">
            <div className="contactPage__container-section-content-text">
              <p>Votre Message</p>
              <textarea
                type="textarea"
                label="message"
                placeholder="Votre message..."
                className="textarea"
                rows="5"
                cols="33"
                value={textValue}
                onChange={(event) => setTextValue(event.target.value)}
              />
            </div>
          </section>
          <div className="contactPage__container-section-content-buttondiv">
            <button type="submit" className="contactPage__container-section-content-button">Envoyer</button>
          </div>
        </form>
      </div>
    </Main>
  );
}

ContactPage.propTypes = {
};
ContactPage.defaultProps = {
};
export default React.memo(ContactPage);
