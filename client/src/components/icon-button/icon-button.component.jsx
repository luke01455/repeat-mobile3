import React from 'react'
import premiumicon from '../../images/premium_icon.png';
import './icon-button.styles.scss';

const IconButton = ({children, ...props}) => (
    <div className='icon-button-container' {...props}>
        <div className='image-container'> 
        <img src={premiumicon} className='icon-image'/>
        </div>
        <div className='text-container'> {children} </div>
    </div>
)

export default IconButton;