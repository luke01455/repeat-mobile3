import React from 'react';

import SettingsSelectionOption from '../../components/settings-selection-option/settings-selection-option.component';
import './recording-settings.styles.scss';

const RecordingSettings = () => {

return (
<div>
<div className='recording-settings-title'> RECORDING SETTINGS </div>
    <SettingsSelectionOption btnName='onOffBtn' userType="free"> On / Off </SettingsSelectionOption>
    <SettingsSelectionOption btnName='premiumBtn' userType="premium"> HQ / LQ </SettingsSelectionOption>
    {/* <SettingsSelectionOption userType="free"> Something Else </SettingsSelectionOption> */}
</div>
)
}

export default RecordingSettings;