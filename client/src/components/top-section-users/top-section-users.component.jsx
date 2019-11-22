import React from 'react';
import Header from '../header/header.component';


import './top-section-users.styles.scss';

const TopSectionUsers = ({ isSmall }) => (
    <div className={`Top-Section ${isSmall ? `small` : ``}`}>
<Header />
<div className={`Top-Section-Container ${isSmall ? `small` : ``}`}>
  <div className="Title-Image-Container">

  </div>

</div>
</div>
)

export default TopSectionUsers;