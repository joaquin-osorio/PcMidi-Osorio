import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="container">
            <Link to={'/'} className="title">Pc Midi Center</Link>
            <ul className="nav">
                <li><Link className='link' to={'/category/0'}>Sintetizadores</Link></li>
                <li><Link className='link' to={'/category/1'}>Controladores Midi</Link></li>
                <li><Link className='link' to={'/category/2'}>Interfaces de Audio</Link></li>
                <li><Link className='link' to={'/category/3'}>Monitoreo</Link></li>    
            </ul>
            <CartWidget cant='0' />
        </div>
    );
};

export default NavBar;