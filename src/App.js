import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import './App.css';

function App() {
  return <Switch>
    <Route path='home' component={Home} />
    <Route path='user' exact component={User} />
  </Switch>;
}

export default App;
