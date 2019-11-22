import React, { useState } from 'react';


import Timer from 'react-compound-timer';
import RangeBar from '../../components/range-bar/range-bar.component';

import './mid-section.styles.scss';



const MidSection = () => {

    const [minsTxt, setMinsTxt] = useState(10);
    
    const saveRecording = () => {
        window.MobileActions.Save(parseInt(minsTxt));
      }

    const retrieveSliderNum = (rangeNum) => {
        setMinsTxt(rangeNum);
    } 
    

    return (
        <div className="Middle-Section">

            <div className="center-container">
                <div className="save-past-text"> Save the past...</div>
                <div className="minutes-text"> {minsTxt} minutes </div>
                <RangeBar callBackFromParent={retrieveSliderNum}/>
                <div className='timer-organiser'>
                <Timer initialTime={20000} id='timer-text'>
                <Timer.Minutes /> minutes
                <div className='spacer'></div>
                <Timer.Seconds /> seconds
                </Timer>
                </div>
            </div>
            <div className="Savebtn-Container">
                <button onClick={saveRecording} id="Savebtn">Save</button>
            </div>
        </div>
    )

    
}

export default MidSection;