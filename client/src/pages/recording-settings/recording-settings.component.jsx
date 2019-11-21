import React from 'react';

import SettingsSelectionOption from '../../components/settings-selection-option/settings-selection-option.component';
import SettingsBar from '../../components/settings-bar/settings-bar.component';

import './recording-settings.styles.scss';

const RecordingSettings = () => {

return (
<div>
<SettingsBar> Recording Settings </SettingsBar>
    <SettingsSelectionOption  userType="free"> On / Off </SettingsSelectionOption>
    <SettingsSelectionOption  userType="premium"> HQ / LQ </SettingsSelectionOption>
    {/* <SettingsSelectionOption userType="free"> Something Else </SettingsSelectionOption> */}
</div>
)
}

export default RecordingSettings;