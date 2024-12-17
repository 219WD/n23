import React, { useEffect, useRef, useState } from 'react';
import './Menu.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ShoppingCart from '../components/ShoppingCart';
import { gsap } from "gsap";

const Menu = () => {
  const slidesRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://acdn.mitiendanube.com/stores/001/612/841/products/storie-micro-puesta-11-00a0a6a8d0fc0af98016681178999670-1024-1024.webp",
    "https://acdn.mitiendanube.com/stores/001/612/841/products/storie-micro-puesta-31-a57296ea3b29304fc916681178994679-1024-1024.webp",
    "https://acdn.mitiendanube.com/stores/001/612/841/products/storie-dsc_05991-eba66dac1895ec78a216614691853984-1024-1024.webp",
  ];

  useEffect(() => {
    // Aplica efecto de escala de grises y borde gris a todas las imágenes
    gsap.to(slidesRef.current, {
      filter: "grayscale(100%)",
      duration: 0.5,
    });

    // Remueve el filtro y aplica el borde morado a la imagen actual
    gsap.to(slidesRef.current[currentSlide], {
      filter: "grayscale(0%)",
      duration: 0.5,
    });
  }, [currentSlide]);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const updateQuantity = (id, increment) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + increment, 1) }
          : item
      )
    );
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  // Información completa del producto
  const product = {
    id: 33,
    title: "puffer-black33",
    name: "Mini Bag Puffer Black33",
    price: 15000,
    description:
      "Nuevo bagMini bolsa de mano con cierre metálico, edición limitada, confeccionada a mano en silver, rellena con guata.",
    image: images[currentSlide],
  };

  return (
    <div className='container coleccion'>
      <NavBar
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        toggleCartVisibility={toggleCartVisibility}
      />
      {isCartVisible && (
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}

      <div className="colection">
        <div className="slider">
          {/* Se actualiza el background del div.img */}
          <div
            className="img"
            style={{
              backgroundImage: `url(${images[currentSlide]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px', // Ajusta la altura según necesidad
              width: '100%',   // Ajusta el ancho según necesidad
            }}
          ></div>
          <div className="slides">
            <button className="arrow" onClick={prevSlide}>←</button>
            {images.map((img, index) => (
              <div
                key={index}
                className={`slide ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                ref={(el) => (slidesRef.current[index] = el)}
              >
                <img src={img} alt={`Slide ${index}`} />
              </div>
            ))}
            <button className="arrow" onClick={nextSlide}>→</button>
          </div>
        </div>
        <div className="description">
          <h2>{product.name}</h2>
          <hr />
          <div className="pricetag">
            <h4>Precio</h4>
            <h5>${product.price}</h5>
          </div>
          <div className="buttons">
            <button onClick={() => addToCart(product)} className='btn-descrix'>Agregar al Carrito</button>
            <button className='btn-descrix'>Cotizar por Mayor</button>
          </div>
          <hr />
          <div className="descrip">
            <h4>Descripcion</h4>
            <p>
              Recuerden que las correas tienen un largo estandar de 105cm, pero pueden pedir otras medidas, armamos por productos a pedido. Solo disponible con mosquetones metálicos.
            </p>
          </div>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
