import React from 'react';

import DiscImage from '../../components/disc-image/disc-image.component';
import RangeBar from '../../components/range-bar/range-bar.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage-container">
        <div className="save-past-text"> Save the past...</div>
        <div className="minutes-text"> 10 minutes </div>
        <RangeBar />
        <DiscImage />
    </div>
)




export default HomePage;