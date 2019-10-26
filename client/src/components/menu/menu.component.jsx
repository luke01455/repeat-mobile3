import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectSideMenuHidden } from '../../redux/side-menu/side-menu.selectors';
import { toggleModalAccount } from '../../redux/account-modal/account-modal.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './menu.styles.scss';

const Menu = ({ hidden, toggleModalAccount, currentUser }) => {
  return (
    <div className={`styled-menu ${hidden ? 'closed' : ''}`}>
      <div className='a-container'>
      { currentUser ?
        <Link className="menu-link" to="/premium">ACCOUNT</Link> :
        <div onClick={toggleModalAccount} className="menu-link"> ACCOUNT </div>
        }
        <Link className="menu-link" to="/settings">
          RECORDING SETTINGS
        </Link>
        <Link className="menu-link" to="/premium">
          GO PREMIUM
        </Link>
        <Link className="menu-link" to="/">
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
  toggleModalAccount: () => dispatch(toggleModalAccount())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);