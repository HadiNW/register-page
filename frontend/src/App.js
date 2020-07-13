import React from 'react';
import { Route, Switch } from "react-router-dom";

import Register from './pages/register.component'

import './App.css';

function App() {
  return (
	<>
	<h1>NAVBAR</h1>
   <Switch>
	   <Route path="/register" component={Register} />
   </Switch>
   </>
  );
}

export default App;
