import React from 'react';
import './css/Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importamos Link

const Hero = ({ addToCart }) => {
  const specialProduct = {
    id: 999,
    image: 'https://acdn.mitiendanube.com/stores/001/612/841/products/storie-micro-puesta-21-7d8c4f4e1f46348d7a16681178997068-1024-1024.webp',
    title: 'Bag Mini',
    description: 'Nuevo bagMini bolsa de mano con cierre metálico, edición limitada, confeccionada a mano en silver, rellena con guata',
    price: 15000,
  };

  const handleAddToCart = () => {
    addToCart(specialProduct);
  };

  return (
    <section className="hero">
      <section className="txt">
        <h5>Promo lanzamiento</h5>
        <h1>Modelos exclusivos edicion limitada</h1>
        <p>{specialProduct.description}</p>
        <div className="buttons">
          <button className="btn-primary" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faCartShopping} /> Añadir al Carrito
          </button>
        </div>
      </section>
      <section className="img-container">
        <div className="large"></div>
        <div className="medium"></div>
        <Link to="/coleccion">
          <button className="button">
            <p className="button__text">
              <span style={{ "--index": 0 }}>C</span>
              <span style={{ "--index": 1 }}>L</span>
              <span style={{ "--index": 2 }}>I</span>
              <span style={{ "--index": 3 }}>C</span>
              <span style={{ "--index": 4 }}>K</span>
              <span style={{ "--index": 5 }}> </span>
              <span style={{ "--index": 6 }}>P</span>
              <span style={{ "--index": 7 }}>A</span>
              <span style={{ "--index": 8 }}>R</span>
              <span style={{ "--index": 9 }}>A</span>
              <span style={{ "--index": 10 }}> </span>
              <span style={{ "--index": 11 }}>V</span>
              <span style={{ "--index": 12 }}>E</span>
              <span style={{ "--index": 13 }}>R</span>
              <span style={{ "--index": 14 }}> </span>
              <span style={{ "--index": 15 }}>C</span>
              <span style={{ "--index": 16 }}>O</span>
              <span style={{ "--index": 17 }}>L</span>
              <span style={{ "--index": 18 }}>E</span>
              <span style={{ "--index": 19 }}>C</span>
              <span style={{ "--index": 20 }}>C</span>
              <span style={{ "--index": 21 }}>I</span>
              <span style={{ "--index": 22 }}>Ó</span>
              <span style={{ "--index": 23 }}>N</span>
            </p>

            <div className="button__circle">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon"
                width="14"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon button__icon--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </Link>
      </section>
    </section>
  );
};

export default Hero;
