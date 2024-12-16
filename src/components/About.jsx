import React from 'react'
import './About.css'
import nosotros from '../assets/tplImg40a3616253a1452e8d6d0080e95b5295.jpg'
import { Link } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    return (
        <div className='container about'>
            <div className="about-txt">
                <h3>¿Quiénes somos?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita veritatis quos maxime accusantium ad tempora recusandae facilis pariatur, cumque odio earum doloribus amet! Temporibus molestias dolore repellendus vel necessitatibus?</p>
                <Link to="/menu" className="menu-link">
                    <button>
                        <FontAwesomeIcon icon={faSearch} /> Leer Más
                    </button>
                </Link>
            </div>
            <div className="about-img">
                <img src={nosotros} alt="" className="about-image" />
            </div>
        </div>
    )
}

export default About