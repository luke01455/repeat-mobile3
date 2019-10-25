import React from 'react';
import { Link } from 'react-router-dom'

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
        <Link className="Link-container" to="/settings">SETTINGS</Link>
        <div>RECORDINGS</div>
        <Link className="Link-container" to="/premium">PREMIUM</Link>
        </div>
    </div>
)




export default HomePage;