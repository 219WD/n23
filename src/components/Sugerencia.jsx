import React, { useEffect, useRef } from 'react';
import './css/Sugerencia.css';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// Componente reutilizable para cada ítem
const Item = ({ id, imgSrc, number, textLines }) => {
    const itemRef = useRef(null); // Referencia al contenedor del ítem

    useEffect(() => {
        const item = itemRef.current;

        const handleMouseEnter = () => {
            const spans = item.querySelectorAll("span");
            gsap.set(spans, { opacity: 0 });
            gsap.to(spans, {
                opacity: 1,
                duration: 0.075,
                stagger: {
                    from: "random",
                    each: 0.02,
                },
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            const spans = item.querySelectorAll("span");
            gsap.to(spans, {
                opacity: 0,
                duration: 0.075,
                stagger: {
                    from: "random",
                    each: 0.02,
                },
                ease: "power2.in",
            });
        };

        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);

        // Limpieza
        return () => {
            item.removeEventListener("mouseenter", handleMouseEnter);
            item.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []); // Ejecutar una sola vez después de que se monte el componente

    return (
        <Link to="/coleccion" className="item" id={`item-${id}`} ref={itemRef}>
            <div className="item-img">
                <img src={imgSrc} alt={`Imagen del producto ${id}`} />
            </div>
            <div className="item-copy">
                <div className="item-copy-1">
                    <div className="shape">
                        <div id="number" className="text-right">
                            {number.map((num, index) => (
                                <span key={index}>{num}</span>
                            ))}
                        </div>
                        <div>
                            {textLines[0].split('').map((char, index) => (
                                <span key={index}>{char}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="item-copy-2">
                    <div className="shape">
                        <div className="text-right">
                            {textLines[1].split('').map((char, index) => (
                                <span key={index}>{char}</span>
                            ))}
                        </div>
                        <div>
                            {textLines[2].split('').map((char, index) => (
                                <span key={index}>{char}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

const Sugerencia = () => {
    const items = [
        {
            id: 1,
            imgSrc: "https://acdn.mitiendanube.com/stores/001/612/841/themes/rio/2-slide-1732619866354-5458304835-14911f44e27834b959df51c7529354891732619870-1024-1024.webp?39835904",
            number: ['2', '3'],
            textLines: ['ColeCcion', 'BombEr', '']
        },
        {
            id: 2,
            imgSrc: "https://acdn.mitiendanube.com/stores/001/612/841/themes/rio/2-slide-1732619866354-5660401510-4efd01eb0e4e935fd405e6e8a7ad8ba71732619872-1024-1024.webp?39835904",
            number: ['2', '1', '9'],
            textLines: ['nEuronalFail', 'morphcloth', '0unDerwear']
        }
    ];

    return (
        <article className="container-items">
            <h2>COLLECTION</h2>
            <div className="items">
                {items.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        imgSrc={item.imgSrc}
                        number={item.number}
                        textLines={item.textLines}
                    />
                ))}
            </div>
        </article>
    );
};

export default Sugerencia;
