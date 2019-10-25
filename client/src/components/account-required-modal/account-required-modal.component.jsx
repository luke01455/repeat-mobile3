import React from 'react';
import { Link } from 'react-router-dom';

import './account-required-modal.styles.scss';

const AccountReqModal = ({ modalType, hidden }) => (
<div className={`styled-modal `}>
    <div className='modal-container'>
    <div className='modal-warning'> { modalType === 'Account' ? 
    'You need an account to access this page' : 
    'You need to have a premium account to use this feature'}
    </div>
    <Link className='modal-button'> Log in </Link>
    <Link className='modal-button'> sign up </Link >
    <Link className='modal-button'> close </Link >
    </div>
</div>

)

export default AccountReqModal;