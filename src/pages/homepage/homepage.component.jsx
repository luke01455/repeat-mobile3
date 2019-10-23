import React from 'react';

import DiscImage from '../../components/disc-image/disc-image.component';
import RangeBar from '../../components/range-bar/range-bar.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage-container">
        <div className="save-past-text"> Save the past...</div>
        <div className="minutes-text"> 10 minutes </div>
        <RangeBar />
        <DiscImage />
        <CustomButton className="save-button"> Save </CustomButton>
        <div className="buttons-wrapper">
        <div>SETTINGS</div>
        <div>RECORDINGS</div>
        <div>PREMIUM</div>
        </div>
    </div>
)




export default HomePage;