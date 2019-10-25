import React from 'react';

import './toggle-switch.styles.scss';

const ToggleSwitch = ({size}) => (
<label className="cl-switch cl-switch-large cl-switch-red">
  <input type="checkbox" unchecked/>
  <span class="switcher"></span>
  <span class="label">Toggle Switch</span>
  
</label>

)

export default ToggleSwitch;