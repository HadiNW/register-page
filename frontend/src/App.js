import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import RegisterPage from './pages/register/register.component'

import './App.css';
import LoginPage from './pages/login/login.component';

function App() {
  return (
   <Switch>
	   <Route exact path="/" component={() => <Redirect to="/register" />} />
	   <Route path="/register" component={RegisterPage} />
	   <Route path="/login" component={LoginPage} />
   </Switch>
  );
}

export default App;
