import React from 'react';

import './premium.styles.scss';

const PremiumPage = () => (
<div className="premium-container"> 
    <div className='PremiumTitle'> Premium </div>
    <div className='PremiumDescription'> The benefits to becoming a Premium member: </div>
    <ul className='ListContainer'>
        <li> HD and Power Saver recording </li>
        <li> Optional Cloud Storage</li>
        <li> Location based recording option</li>
        <li> Help support the team! </li>
    </ul>
    <div> Purchase </div>
</div>
)

export default PremiumPage;