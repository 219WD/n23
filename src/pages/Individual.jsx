import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../components/css/Individual.css';
import menuData from '../utils/Data';
import NavBar from '../components/NavBar';
import ShoppingCart from '../components/ShoppingCart';

const Individual = () => {
    const { id } = useParams();
    const product = menuData.find((item) => item.id === parseInt(id));

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    // Estado para el carrito
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Estado para mostrar/ocultar el carrito
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    const handleAddToCart = () => {
        const existingItem = cart.find((cartItem) => cartItem.id === product.id);
        if (existingItem) {
            setCart(
                cart.map((cartItem) =>
                    cartItem.id === product.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const updateQuantity = (id, increment) => {
        const updatedCart = cart.map((item) =>
            item.id === id
                ? { ...item, quantity: Math.max(item.quantity + increment, 1) }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <>
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
            <section className="individual">
                <section className="txt">
                    <h1>{product.title}</h1>
                    <p>{product.presentacion}</p>
                    <div className="icons">
                        {product.icons.map((icon, index) => (
                            <div className="icon" key={index}>
                                <div className="icon-img">
                                    <img src={icon} alt={`Icon ${index}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="buttons">
                        <button
                            className="btn-primary-individual"
                            onClick={handleAddToCart}
                        >
                            <FontAwesomeIcon icon={faCartShopping} /> Añadir al Carrito
                        </button>
                        <Link to="/menu" className="btn-secondary-individual">
                            Ver el Menú
                        </Link>
                    </div>
                </section>
                <section className="img-container">
                    <img src={product.image} alt={product.title} className="individual-img" />
                </section>
            </section>
        </>
    );
};

export default Individual;
