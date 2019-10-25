import React from 'react';

import './settings.styles.scss';

const AccountPage = () => (
<div className="account-container"> 
    <div className='account-title'> Account </div>
    <ul className='ListContainer'>
    <li> Change name</li>
    <li> Change password  </li>
    <li> recording settings </li>
    <li> Go premium </li>     
    </ul>
</div>
)

export default AccountPage;