import React from 'react';

import StripeCheckoutButton from '../../components/stripe-button/stripe.button.component';
import PremiumSection from '../../components/premium-section/premium-section.component';

import './premium.styles.scss';

const PremiumPage = () => (
<div className="premium-container"> 
    <PremiumSection />
    <StripeCheckoutButton />
</div>
)

export default PremiumPage;