import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up/sign-up.component';
import PremiumPage from './pages/premium/premium-component';
import SettingsPage from './pages/settings/settings.component';
import AccountPage from './pages/account/account.components';
import ContactPage from './pages/contact/contact.component';
import RecordingSettings from './pages/recording-settings/recording-settings.component';

import Header from './components/header/header.component';
import Menu from './components/menu/menu.component';
import AccountReqModal from './components/account-required-modal/account-required-modal.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.scss';

const App = ({ checkUserSession, currentUser }) => {

  
  useEffect(() => {
    checkUserSession(); 
  }, [checkUserSession]);




  return (
    <div className="App">
      {/* <Header /> */}
      <Menu />
      <AccountReqModal />
      <Switch>
      <Route
              exact
              path="/"
              render={() =>
                currentUser ? (
                  <HomePage /> 
                  //<SignIn/>    
                ) : (
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
              <Route
              exact
              path="/signup"
              render={() =>
                currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignUp />
                )
              }
              />
              <Route
              exact
              path="/premium"
              render={() =>
                currentUser ? (
                  <PremiumPage />
                ) : (
                  <PremiumPage />
                )
              }
              />
              
              <Route exact path='/account' component={AccountPage} />
              <Route exact path='/contact' component={ContactPage} />
              <Route exact path='/settings' component={SettingsPage} />
              <Route exact path='/settings/recordingsettings' component={RecordingSettings} />
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
