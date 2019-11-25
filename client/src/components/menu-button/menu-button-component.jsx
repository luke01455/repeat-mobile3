import React, {useRef} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useOnClickOutside } from '../../hooks/hooks';

import { toggleSideMenuHidden, turnSideMenuOff, turnSideMenuOn } from '../../redux/side-menu/side-menu.actions';
import { selectSideMenuHidden } from '../../redux/side-menu/side-menu.selectors';

import './menu-button.styles.css';

const MenuButton = ({ toggleSideMenuHidden, hidden, turnSideMenuOff, turnSideMenuOn }) => {
  const egg = () => {
    // toggleSideMenuHidden();
    // toggleSideMenuHidden();
  }

  const node = useRef();
  useOnClickOutside(node, () => turnSideMenuOn());

  return (
<div ref={node} onClick={!hidden ? turnSideMenuOn : turnSideMenuOn} className={`MenuButtonContainer ${!hidden ? 'is-active' : ''}`}>
  <button className={`hamburger hamburger--3dy ${!hidden ? 'is-active' : ''}`} type="button">
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
</div>
)
  }


const mapStateToProps = createStructuredSelector({
  hidden: selectSideMenuHidden
});
const mapDispatchToProps = dispatch => ({
  toggleSideMenuHidden: () => dispatch(toggleSideMenuHidden()),
  turnSideMenuOff: () => dispatch(turnSideMenuOff()),
  turnSideMenuOn: () => dispatch(turnSideMenuOn())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);