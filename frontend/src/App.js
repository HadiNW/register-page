import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Register from './pages/register.component'

import './App.css';

function App() {
  return (
   <Switch>
	   <Route path="/register" component={Register} />
   </Switch>
  );
}

export default App;
