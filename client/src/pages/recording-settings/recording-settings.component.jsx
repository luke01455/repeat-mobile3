import React from 'react';

import SettingsSelectionOption from '../../components/settings-selection-option/settings-selection-option.component';
import './recording-settings.styles.scss';

const RecordingSettings = () => {

return (
<div>
<div className='recording-settings-title'> RECORDING SETTINGS </div>
    <SettingsSelectionOption> On / Off </SettingsSelectionOption>
    <SettingsSelectionOption> HQ / LQ </SettingsSelectionOption>
    <SettingsSelectionOption> Something Else </SettingsSelectionOption>
</div>
)
}

export default RecordingSettings;