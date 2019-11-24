import React, { useState } from 'react';


import Timer from 'react-compound-timer';
import RangeBar from '../../components/range-bar/range-bar.component';

import './mid-section.styles.scss';


class MidSection extends React.Component {
  
    // constructor(props) {
    //     super(props);
    //     
    // }

    //const [minsTxt, setMinsTxt] = useState(10);

    componentDidMount() {

    }

    getCurrentTimer = () => {
      if(window.MobileActions !== undefined) {
        console.log('test')
        return window.MobileActions.GetRecordTime();
      }
      else {
        console.log('test')
        return 0;
      }
    }
    
    saveRecording = () => {
        window.MobileActions.Save(parseInt(10));
      }

    retrieveSliderNum = (rangeNum) => {
        this.setMinsTxt(rangeNum);
    } 
  

    render() {
      return (
        <div className="Middle-Section">
            <div className="center-container">
                <div className="save-past-text"> Save the past...</div>
                <div className="minutes-text"> {this.minsTxt} minutes </div>
                <RangeBar callBackFromParent={this.retrieveSliderNum}/>
                <div className='timer-organiser'>
                <Timer initialTime={this.getCurrentTimer()} id='timer-text'>
                <Timer.Minutes /> minutes
                <div className='spacer'></div>
                <Timer.Seconds /> seconds
                </Timer>
                </div>
            </div>
            <div className="Savebtn-Container">
                <button onClick={this.saveRecording} id="Savebtn">Save</button>
            </div>
        </div>
      );
    }
  }
// const MidSection = () => {

//     const [minsTxt, setMinsTxt] = useState(10);
    
//     const saveRecording = () => {
//         window.MobileActions.Save(parseInt(minsTxt));
//       }

//     const retrieveSliderNum = (rangeNum) => {
//         setMinsTxt(rangeNum);
//     } 
    

//     return (
//         <div className="Middle-Section">

//             <div className="center-container">
//                 <div className="save-past-text"> Save the past...</div>
//                 <div className="minutes-text"> {minsTxt} minutes </div>
//                 <RangeBar callBackFromParent={retrieveSliderNum}/>
//                 <div className='timer-organiser'>
//                 <Timer initialTime={20000} id='timer-text'>
//                 <Timer.Minutes /> minutes
//                 <div className='spacer'></div>
//                 <Timer.Seconds /> seconds
//                 </Timer>
//                 </div>
//             </div>
//             <div className="Savebtn-Container">
//                 <button onClick={saveRecording} id="Savebtn">Save</button>
//             </div>
//         </div>
//     )

    
// }

export default MidSection;