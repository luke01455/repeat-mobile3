import React from 'react';
import { Link } from 'react-router-dom';

import './title.styles.scss';

const Title = () => (
<div className='title-container'>
<div className='background-container'>
    <div className='background'></div>
</div>
<Link className="logo-container" to="/">        
        <div className="logo">

        </div>
         </Link>
</div>
)

export default Title;