import React from 'react';
import { Link } from 'react-router-dom';
import './link-button.styles.scss';

const LinkButton = ({children, ...props}) => (
    <a {...props} href={`${props.hrefLink}`} target="_blank" className='button-container'>
        <div className='save-button'>
    {children}
        </div> 
    </a>
)

export default LinkButton;