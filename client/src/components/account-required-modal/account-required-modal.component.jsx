import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//import { Link } from 'react-router-dom';

import { selectAccountModalType } from '../../redux/account-modal/account-modal.selectors';

import './account-required-modal.styles.scss';

const AccountReqModal = ({ modalType }) => (
<div className={`styled-modal ${!modalType ? 'closed' : ''}`}>
    <div className='modal-container'>
    <div className='modal-warning'> { modalType === 'account' ? 
    'You need an account to access this page' : 
    'You need to have a premium account to use this feature'}
    </div>
    {/* <Link className='modal-button'> Log in </Link>
    <Link className='modal-button'> sign up </Link >
    <Link className='modal-button'> close </Link > */}
    </div>
</div>
)

const mapStateToProps = createStructuredSelector({
    modalType: selectAccountModalType
  });

export default connect(mapStateToProps)(AccountReqModal);