import React from 'react';

import TopSectionUsers from '../../components/top-section-users/top-section-users.component';
// import StripeCheckoutButon from '../../components/stripe-button/stripe.button.component';
import LinkButton from '../link-button/link-button.component';

import './premium-section.styles.scss';

const PremiumSection = () => (
    <div>
<TopSectionUsers isSmall='isSmall' />
<div className='centraliser'>
<div className="premium-section-container"> 
    <div className='PremiumTitle'> Premium </div>
    <div className='PremiumDescription'> The benefits to becoming a Premium member: </div>
    <div className='ListContainer'>
        <p> HD and Power Saver recording </p>
        <p> Optional Cloud Storage</p>
        <p> Location based recording option</p>
        <p> Help support the team! </p>
    </div>
    {/* <StripeCheckoutButon /> */}
    <LinkButton hrefLink='https://paypal.me/superpierz'> Donate </LinkButton>
</div>
</div>
</div>
)

export default PremiumSection;