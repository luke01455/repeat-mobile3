import React from 'react';

import './settings-heading.styles.scss';

const SettingsHeading = ({ children }) => {

return (
    <div className="settings-heading-container" >
        <span className="settings-heading">
            <span>
                {children}
            </span>
            <span>

            </span>
        </span>
    </div>
)
}

export default SettingsHeading;