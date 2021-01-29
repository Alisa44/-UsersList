import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return <div>
    <Header/>
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/user/:id' exact component={User} />
    </Switch>
  </div>;
}

export default App;
