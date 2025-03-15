import React, { useState } from 'react';
import '../Styles/stylesFooter.css';
const CURRENT_YEAR = new Date().getFullYear();
const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = () => {
    // Aquí puedes agregar lógica para enviar el correo a un servidor o base de datos
    console.log('Correo enviado:', email);
    setShowModal(false);
    setEmail('');
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>© {CURRENT_YEAR} GymBook. Todos los derechos reservados.</p>
          <button className="newsletter-button back-blue-dark" onClick={() => setShowModal(true)}>
            Suscríbete a nuestra newsletter
          </button>
        </div>
      </footer>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>¡Suscríbete a nuestra Newsletter!</h2>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Ingresa tu correo"
              required
            />
            <button className="modal-button back-blue-dark" onClick={handleSubmit}>
              Suscribirme
            </button>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
