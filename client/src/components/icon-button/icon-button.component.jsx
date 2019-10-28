import React from 'react'

import './icon-button.styles.scss';

const IconButton = ({children, ...props}) => (
    <div className='icon-button-container' {...props}>
        <div className='image-container'> </div>
        <div className='text-container'> {children} </div>
    </div>
)

export default IconButton;