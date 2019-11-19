import React from 'react';
import Header from '../header/header.component';
import { Link } from 'react-router-dom';


import './top-section.styles.scss';

const TopSection = ({ }) => (
    <div className="Top-Section">
<Header />
<div className="Top-Section-Button">
  <Link className="Signup-button" to='/signup' >Sign Up</Link>

  <div className="Para-Holders">

          <p id="login-plain-text">
           Have an account?<Link to='/'> Log In </Link>
          </p>
        

  </div>
</div>
</div>
)

export default TopSection;