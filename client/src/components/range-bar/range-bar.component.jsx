import React from 'react';

import './range-bar.styles.scss';

const RangeBar = () => (
<div className="Rangebar-Container"> 
  <input type="range" className="range" name="" defaultValue="10"
  min="0" max="20"></input>
</div>
)

export default RangeBar;