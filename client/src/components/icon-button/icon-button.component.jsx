import React from 'react'
import premiumicon from '../../images/premium_icon.png';
import recordingsicon from '../../images/recordings_icon.png';
import settingsicon from '../../images/settings_icon.png';

import './icon-button.styles.scss';

const IconButton = ({children, ...props}) => {

    let imageLocation = settingsicon;

    if(props.imagetype === 'premium') {
        imageLocation = premiumicon;
    } else if(props.imagetype === 'settings'){
        imageLocation = settingsicon;
    } else {
        imageLocation = recordingsicon;
        
    }

    return(
    <div className='icon-button-container' {...props}>
        <div className='image-container'> 
        <img src={imageLocation} className='icon-image' alt='icon'/>
        </div>
        <div className='text-container'> {children} </div>
    </div>
    )
}

export default IconButton;