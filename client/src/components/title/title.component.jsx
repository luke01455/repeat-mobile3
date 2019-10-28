import React from 'react';
import { Link } from 'react-router-dom'
import appBackground from '../../images/appbground.png'
import './title.styles.scss';

const Title = () => (
<div className='background-container'>
    <img src={appBackground} className='background' alt='background'>
    
        </img>
        <Link className="title-container" to="/"> Repeat20 </Link>
</div>
)

export default Title;