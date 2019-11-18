import React from 'react';

import { Link } from 'react-router-dom';

import premiumicon from '../../images/premium_icon.png';
import recordingsicon from '../../images/recordings_icon.png';
import settingsicon from '../../images/settings_icon.png';

import './icon-button.styles.scss';

const IconButton = ({children, ...props}) => {

    let imageLocation = settingsicon;
    let iconType = '';

    if(props.imagetype === 'premium') {
        imageLocation = premiumicon;
        iconType = 'premiumIcon'
    } else if(props.imagetype === 'settings'){
        imageLocation = settingsicon;
        iconType = 'settingsIcon'
    } else {
        imageLocation = recordingsicon;  
        iconType = 'recordingsIcon'  
    }

    return(
      
    <Link className='icon-button-container' {...props}>
        <div className='image-container'> 
        <img src={imageLocation} className={iconType} alt='icon'/>
        </div>
        <div className='text-container'> {children}  </div>
    </Link>
    )
}

export default IconButton;