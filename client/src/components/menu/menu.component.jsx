import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';


import { toggleSideMenuHidden } from '../../redux/side-menu/side-menu.actions';
import { selectSideMenuHidden } from '../../redux/side-menu/side-menu.selectors';
import { toggleModalAccount } from '../../redux/account-modal/account-modal.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { premiumUpgradeStart } from '../../redux/user/user.actions';

import './menu.styles.scss';

const Menu = ({ hidden, toggleModalAccount, currentUser, toggleSideMenuHidden, premiumUpgradeStart }) => {

  const startModalToggleMenu = () => {
    toggleModalAccount();
    toggleSideMenuHidden();
  }

  const startPremiumAndToggleModal = () => {
    premiumUpgradeStart();
    toggleSideMenuHidden();
  }

  return (
    <div className={`styled-menu ${hidden ? 'closed' : ''}`}>
      <div className='a-container'>
      { currentUser ?
        <Link className="menu-link" onClick={toggleSideMenuHidden} to="/premium">ACCOUNT</Link> :
        <div onClick={startModalToggleMenu} className="menu-link"> ACCOUNT </div>
        }
        <Link className="menu-link" onClick={toggleSideMenuHidden} to="/settings">
          RECORDING SETTINGS
        </Link>
        <Link className="menu-link" onClick={ startPremiumAndToggleModal } to="/premium">
          GO PREMIUM
        </Link>
        <Link className="menu-link" onClick={toggleSideMenuHidden} to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  hidden: selectSideMenuHidden,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  toggleModalAccount: () => dispatch(toggleModalAccount()),
  toggleSideMenuHidden: () => dispatch(toggleSideMenuHidden()),
  premiumUpgradeStart: () => dispatch(premiumUpgradeStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);