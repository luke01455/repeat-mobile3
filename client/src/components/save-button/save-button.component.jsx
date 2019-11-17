import React from 'react';

import './save-button.styles.scss';

const SaveButton = ({children, ...props}) => (
    <div {...props} className='button-container'>
        <div className='save-button'>
    Save
        </div> 
    </div>
)

export default SaveButton;