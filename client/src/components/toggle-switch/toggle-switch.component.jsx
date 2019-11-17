import React, { useState } from 'react';

import Toggle from 'react-toggle'

import './toggle-switch.styles.css';

const ToggleSwitch = ({ btnName }) => {

  const [toggleValue, setToggleValue] = useState(0)

 // console.log(toggleValue);
  return (
    <div>
      <label>
        <Toggle
          defaultChecked={true}
          onChange={() => setToggleValue({toggleValue: !toggleValue})} />
      </label>
    </div>
  );
}


export default ToggleSwitch;