import React from 'react';

import SettingsHeading from '../../components/settings-heading/settings-heading.component';
import SettingsOption from '../../components/settings-option/settings-option.component';


import './account.styles.scss';

const AccountPage = () => (
<div className="account-container">
    <div className='header-section-container'>
    <div className='account-title'> Account </div>
    </div>
    <SettingsHeading> Account Information </SettingsHeading>
    <SettingsOption> Account </SettingsOption>
    <SettingsOption> Personal Information </SettingsOption>
    <SettingsOption> Change Password</SettingsOption>
    
    <SettingsHeading> Premium Information </SettingsHeading>
    <SettingsOption> Premium </SettingsOption>


</div>
)

export default AccountPage;