import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import MenuButton from './components/menu-button/menu-button-component';
import SignIn from './pages/sign-in/sign-in.component';
import Title from './components/title/title.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.scss';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession(); 
  }, [checkUserSession]);


  return (
    <div className="App">
      <MenuButton />
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
