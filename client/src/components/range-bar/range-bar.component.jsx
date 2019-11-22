import React from 'react';

import './range-bar.styles.scss';

const RangeBar = ({callBackFromParent}) => {

  const testFn = () => {
    let testNum = 15;
    callBackFromParent(testNum);
    //console.log(testNum);
  }

  return (
    <div className="Rangebar-Container">
      <input type="range" className="range" name="" defaultValue="10"
        min="0" max="20" onChange={testFn}></input>
    </div>
  )
}

export default RangeBar;