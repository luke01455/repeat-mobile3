import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleSideMenuHidden, turnSideMenuOff, turnSideMenuOn } from '../../redux/side-menu/side-menu.actions';
import { selectSideMenuHidden } from '../../redux/side-menu/side-menu.selectors';

import './menu-button.styles.css';

const MenuButton = ({ toggleSideMenuHidden, hidden, turnSideMenuOff, turnSideMenuOn, modalMenu }) => (
  <div onClick={modalMenu ? turnSideMenuOff : turnSideMenuOn} className={`MenuButtonContainer ${!hidden ? 'is-active' : ''}`}>
    <button className={`hamburger hamburger--3dy ${!hidden ? 'is-active' : ''}`} type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  </div>
)


const mapStateToProps = createStructuredSelector({
  hidden: selectSideMenuHidden
});
const mapDispatchToProps = dispatch => ({
  toggleSideMenuHidden: () => dispatch(toggleSideMenuHidden()),
  turnSideMenuOff: () => dispatch(turnSideMenuOff()),
  turnSideMenuOn: () => dispatch(turnSideMenuOn())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);