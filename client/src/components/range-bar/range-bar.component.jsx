import React from 'react';

import './range-bar.styles.scss';

const RangeBar = ({callBackFromParent}) => {

  const onFormChange = (value) => {

    callBackFromParent(value);
  }

  return (
    <div className="Rangebar-Container">
      <input type="range" className="range" name="" defaultValue="10"
        min="0" max="20" onChange={e => onFormChange(e.target.value)}></input>
    </div>
  )
}

export default RangeBar;