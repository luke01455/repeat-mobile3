import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleSideMenuHidden } from '../../redux/side-menu/side-menu.actions';

import './menu-button.styles.css';

const MenuButton = ({ toggleSideMenuHidden }) => (
<div onClick={toggleSideMenuHidden}className="MenuButtonContainer">
  <button className="hamburger hamburger--3dy is-active" type="button">
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
</div>
)

const mapDispatchToProps = dispatch => ({
  toggleSideMenuHidden: () => dispatch(toggleSideMenuHidden())
});

export default connect(null, mapDispatchToProps)(MenuButton);