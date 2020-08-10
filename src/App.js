import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/shop/shop';



function App() {
  return (
    <div>
      <Switch>
     <Route exact path='/' component={HomePage} />
     <Route path='/shoppage' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
