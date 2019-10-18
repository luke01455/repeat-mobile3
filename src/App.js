import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header-component';
import SignIn from './components/sign-in/sign-in.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession(); 
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <HomePage />
      <SignIn />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
