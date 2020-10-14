import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../header';
import ShoppingTable from '../shopping-table';
import { Homepage, Cartpage } from '../pages';

const App = () => {
  return (
    <main className='container-fluid' role='main'>
      <Header items={5} price={250}/>
      <Switch>
        <Route path='/' component={Homepage} exact />
        <Route path='/cart' component={Cartpage} />
      </Switch>
      <ShoppingTable />
    </main>
  );
};

export default App;
