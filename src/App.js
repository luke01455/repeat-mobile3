import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
      <Switch>
      <Route
              exact
              path="/"
              render={() =>
                currentUser ? (
                  <HomePage /> 
                  //<SignIn/>    
                ) : (
                  //<SignIn/>
                  <HomePage /> 
                )
              }
              />
                  <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignIn />
                )
              }
              />
      </Switch>
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
