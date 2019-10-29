import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logoimg.png';

import './title.styles.scss';

const Title = () => (
    <div className='title-container'>
        <div className='background-container'>
            <div className='background'></div>
        </div>
        <Link className="logo-container" to="/">
            <div className="logo">
                <img className='logo-img' src={logoImg}></img>
                <div className="title"> Repeat20 </div>
            </div>
        </Link>
    </div>
)

export default Title;