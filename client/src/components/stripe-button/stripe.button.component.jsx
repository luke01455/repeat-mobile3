
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { premiumUpgradeStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ currentUser, premiumUpgradeStart }) => {
  const priceForStripe =  599;
  const publishableKey = 'pk_test_cqtkHDocT0855HhYgqzTfvot00yeJKO2Ca';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
        premiumUpgradeStart(currentUser.displayName);
      })
      .catch(error => {
        console.log('Payment Error: ', console.log(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <div className='stripe-button-container'>
    <StripeCheckout
      label='Pay Now: $5.99'
      name='Repeat20 Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is $5.99`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  premiumUpgradeStart: userName => dispatch(premiumUpgradeStart(userName))
});

export default connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton);