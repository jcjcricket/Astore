import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../header';
import { Homepage, Cartpage } from '../pages';

const App = () => {
  return (
    <main className="container" role="main">
      <Header />
      <Switch>
        <Route path='/' component={Homepage} exact />
        <Route path='/cart' component={Cartpage} />
      </Switch>
    </main>
  );
};

export default App;
