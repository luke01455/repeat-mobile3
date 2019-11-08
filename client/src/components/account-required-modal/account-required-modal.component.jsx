import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import exitIcon from '../../images/exiticon.png';

import { selectAccountModalType } from '../../redux/account-modal/account-modal.selectors';
import { toggleModalOff } from '../../redux/account-modal/account-modal.actions';

import './account-required-modal.styles.scss';

const AccountReqModal = ({ modalType, toggleModalOff}) => (
<div className={`styled-modal ${!modalType ? 'closed' : ''}`}>
<img onClick={toggleModalOff} src={exitIcon} className='close-icon' alt='icon'/>
    <div className='modal-container'>
    
    
    
    <div className='modal-warning'> { modalType === 'account' ? 
    'You need an account to access this page' : 
    'You need to have a premium account to use this feature'}
    </div>
    <div className='modal-section-wrapper'>
    {    
    modalType === 'account' ? (
    <div className='modal-button-container'>
    <Link className='modal-button' to='/signin'> Log in </Link>
    <Link className='modal-button' to='/signup'> sign up </Link>
    </div>
    ) 
    :
    (
    <Link className='modal-button' to='/premium'> Get premium </Link>
    )
  
  }
  </div>

    </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    modalType: selectAccountModalType
  });

  const mapDispatchToProps = dispatch => ({
  toggleModalOff: () => dispatch(toggleModalOff())
 });

export default connect(mapStateToProps, mapDispatchToProps)(AccountReqModal);