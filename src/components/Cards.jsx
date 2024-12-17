import React from 'react';
import './css/Cards.css';
import shape from '../assets/shape.png'

const Cards = () => {
    const link = "https://www.instagram.com/nessa.n23/";

    return (
        <section className="history">
            <div className="img-history">
                <img src={shape} alt="" className='shapeHistory' />
            </div>
            <div className="txt-history">
                <h5>Our Company</h5>
                <h2>¿Y quien #@%?/* es N23?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia reiciendis quaerat aut molestias, amet repellat autem minima aperiam sapiente reprehenderit cum, iure nesciunt. Incidunt iure totam porro facere suscipit?</p>
                <a href={link}>
                    <button>
                        Mira nuestros ultimos posteos
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
                </a>
            </div>
        </section>
    );
};

export default Cards;
