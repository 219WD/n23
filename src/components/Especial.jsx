import React from 'react';
import './css/Especial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUmbrella,      // Protección de agua
  faCompress,      // Compacto
  faShieldAlt,     // Resistente
  faEyeSlash,      // Bolsillos secretos
  faStar           // Ultra Top
} from '@fortawesome/free-solid-svg-icons';

const Especial = ({ addToCart }) => {
  const specialProduct = {
    id: 999,
    image: 'https://acdn.mitiendanube.com/stores/001/612/841/products/storie-micro-puesta-21-7d8c4f4e1f46348d7a16681178997068-1024-1024.webp',
    title: 'Bag Mini',
    description: 'Nuevo modelo de bagMini bolsa de mano con cierre metálico y tira desmontable para usar al hombro o cruzada, edición limitada, confeccionada a mano en silver, rellena con guata.',
    price: 15000,
  };

  const characteristics = [
    { icon: faUmbrella, text: 'Protección contra agua' },  // Mejor representado con un paraguas
    { icon: faCompress, text: 'Diseño compacto' },         // Representa algo comprimido o pequeño
    { icon: faShieldAlt, text: 'Material resistente' },    // Escudo para representar resistencia
    { icon: faEyeSlash, text: 'Bolsillos secretos' },      // Un ojo tachado para representar secreto
    { icon: faStar, text: 'Edición Ultra Top' },           // Una estrella para destacar
  ];

  const handleAddToCart = () => {
    addToCart(specialProduct);
  };

  return (
    <div className='container especial'>
      <div className="txt">
        <h5>Características</h5>
        <h2>Mini Bag Puffer</h2>
        <div className="caracteristicas">
          {characteristics.map((item, index) => (
            <div key={index} className="caract">
              <div className="texto">
                <FontAwesomeIcon icon={item.icon} className="icono" />
                <p>{item.text}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <h2 className='pricetag'>${specialProduct.price}</h2>
        <button className="btn-especial" onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faStar} /> Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default Especial;
