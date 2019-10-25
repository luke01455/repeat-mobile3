import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSideMenuHidden } from '../../redux/side-menu/side-menu.selectors';

import './menu.styles.scss';

const Menu = ({ hidden }) => {
  return (
    <div className={`styled-menu ${hidden ? 'closed' : ''}`}>
      <div className='a-container'>
        <a href="/account">
          ACCOUNT
      </a>
        <a href="/settings">
          RECORDING SETTINGS
        </a>
        <a href="/premium">
          GO PREMIUM
        </a>
        <a href="/">
          CONTACT
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  hidden: selectSideMenuHidden
});
export default connect(mapStateToProps)(Menu);