import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './css/Footer.css';
import logo from '../assets/logo.svg';
import useNotify from '../hooks/useToast';

const Footer = () => {
    const formRef = useRef(null);
    const notify = useNotify();
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const nombre = event.target.nombre.value;
        const email = event.target.email.value;
        const telefono = event.target.telefono.value;
        const mensaje = event.target.mensaje.value;

        // Validaciones
        if (!nombre || !email || !telefono || !mensaje) {
            notify('Por favor, completa todos los campos.', 'error');
            return;
        }

        fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfqkTaewnJqkMMoqsob6CSrf7UAENvNmmmpU5QPlwdb8ABA9Q/formResponse?submit=Submit&usp=pp_url&entry.2051337852=${encodeURIComponent(nombre)}&entry.1545683121=${encodeURIComponent(email)}&entry.691597526=${encodeURIComponent(telefono)}&entry.723724791=${encodeURIComponent(mensaje)}`, {
            method: 'POST',
            mode: 'no-cors'
        })
            .then(() => {
                setFormStatus('success');
                notify('Formulario enviado con éxito. ¡Gracias por contactarnos!', 'success');
                formRef.current.reset();
            })
            .catch(() => {
                setFormStatus('error');
                notify('Hubo un error al enviar el formulario. Inténtalo nuevamente.', 'error');
            });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Primera columna */}
                <div className="footer-column">
                    <div className="footer-logo">
                        <img src={logo} alt="Logo" className="logoFooter" />
                    </div>
                    <h5>Seguinos en nuestras redes</h5>
                    <div className="social-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </a>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                        </a>
                    </div>
                    <p className="footer-hours">
                        Horario de atención: <br />
                        Lunes a jueves de 20:00 a 00:00 <br />
                        Viernes a domingo de 20:00 a 02:00
                    </p>
                </div>

                {/* Segunda columna */}
                <div className="footer-column">
                    <h5>Contáctanos</h5>
                    <form className="footer-form" id="contacto" ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Tu email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="telefono" name="telefono" placeholder="Tu teléfono" required />
                        </div>
                        <div className="form-group">
                            <textarea id="mensaje" name="mensaje" rows="4" placeholder="Tu mensaje" required ></textarea>
                        </div>
                        <button type="submit" className="btn-submit">Enviar</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
