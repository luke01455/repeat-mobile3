import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { useOnClickOutside } from '../../hooks/hooks'

import { toggleSideMenuHidden, turnSideMenuOff } from '../../redux/side-menu/side-menu.actions';
import { selectSideMenuHidden } from '../../redux/side-menu/side-menu.selectors';
import { toggleModalAccount } from '../../redux/account-modal/account-modal.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { premiumUpgradeStart } from '../../redux/user/user.actions';

import './menu.styles.scss';

const Menu = ({ hidden, toggleModalAccount, currentUser, toggleSideMenuHidden, turnSideMenuOff }) => {

  const node = useRef();
  useOnClickOutside(node, () => turnSideMenuOff());

  const startModalToggleMenu = () => {
    toggleModalAccount();
    toggleSideMenuHidden();
  }

  return (
    <div ref={node} className={`styled-menu ${hidden ? 'closed' : ''}`}>
      <div className='a-container'>
        <Link className="menu-link" onClick={toggleSideMenuHidden} to="/">
          HOME
        </Link>
        {currentUser ?
          <Link className="menu-link" onClick={toggleSideMenuHidden} to="/account">ACCOUNT</Link> :
          <div onClick={startModalToggleMenu} className="menu-link"> ACCOUNT </div>
        }
        <Link className="menu-link" onClick={toggleSideMenuHidden} to="/settings">
          SETTINGS
        </Link>
        <Link className="menu-link" onClick={toggleSideMenuHidden} to="/premium">
          PREMIUM
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
  premiumUpgradeStart: userName => dispatch(premiumUpgradeStart(userName)),
  turnSideMenuOff: () => dispatch(turnSideMenuOff())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);