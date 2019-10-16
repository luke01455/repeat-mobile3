import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header-component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {

  // useEffect(() => {
  //   checkUserSession(); 
  // }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}



export default App;
