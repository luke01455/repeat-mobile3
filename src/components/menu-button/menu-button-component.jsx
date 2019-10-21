import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleSideMenuHidden } from '../../redux/side-menu/side-menu.actions';
import { selectSideMenuHidden } from '../../redux/side-menu/side-menu.selectors';

import './menu-button.styles.css';

const MenuButton = ({ toggleSideMenuHidden, hidden }) => (
<div onClick={toggleSideMenuHidden} className="MenuButtonContainer">
  <button className={`hamburger hamburger--3dy ${!hidden ? 'is-active' : ''}`} type="button">
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
</div>
)

const mapStateToProps = createStructuredSelector({
  hidden: selectSideMenuHidden
})
const mapDispatchToProps = dispatch => ({
  toggleSideMenuHidden: () => dispatch(toggleSideMenuHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);