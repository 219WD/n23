import React from 'react';
import Card from './Card';
import menuData from '../utils/Data';
import './css/MenuCards.css';

const MenuCards = ({ addToCart }) => (
    <section className="menu">
        <h2>Nuestro Menú</h2>
        <div className="menu-cards">
            {menuData.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    rating={item.rating}
                    price={item.price}
                    onAddToCart={() => addToCart(item)}
                />
            ))}
        </div>
    </section>
);

export default MenuCards;
