const sendContactMessage = (firstname, lastname, tel, email, text) => {
  const contactInfos = {
    firstname,
    lastname,
    tel,
    email,
    text,
  };

  console.log(contactInfos);
};

export default sendContactMessage;
