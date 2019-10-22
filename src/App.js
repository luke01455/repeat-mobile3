import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import SignIn from './pages/sign-in/sign-in.component';
import Title from './components/title/title.component';
import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.scss';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession(); 
  }, [checkUserSession]);


  return (
    <div className="App">
      <Header />
      <Title />
      <Route
              exact
              path="/"
              render={() =>
                currentUser ? (
                  <HomePage /> 
                  //<SignIn/>    
                ) : (
                  <SignIn/>
                  //<HomePage /> 
                )
              }
              />
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
