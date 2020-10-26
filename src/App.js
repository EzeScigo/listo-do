import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
};

export default (App);
