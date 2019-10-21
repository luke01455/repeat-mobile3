import React from 'react';

import DiscImage from '../../components/disc-image/disc-image.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import RangeBar from '../../components/range-bar/range-bar.component';

const HomePage = () => (
    <div>
        <div> Save the past...</div>
        <div> 10 minutes </div>
        <RangeBar />
        <DiscImage />
    </div>
)




export default HomePage;