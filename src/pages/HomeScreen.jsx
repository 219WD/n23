import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Sugerencia from '../components/Sugerencia';
import Footer from '../components/Footer';
import ShoppingCart from '../components/ShoppingCart';
import Especial from '../components/Especial.jsx';

const HomeScreen = () => {
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
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, increment) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + increment, 1) }
          : item
      )
    );
  };

  return (
    <div className="container">
      <NavBar
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        toggleCartVisibility={toggleCartVisibility}
      />
      <Hero addToCart={addToCart} />
      {isCartVisible && (
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
      <Cards onAddToCart={addToCart} />
      {isCartVisible && (
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
      <Sugerencia />
      <Especial addToCart={addToCart} />
      {isCartVisible && (
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
      <Footer />
    </div>
  );
};

export default HomeScreen;
