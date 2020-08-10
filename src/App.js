import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';



function App() {
  return (
    <div>
      <Header />
      <Switch>
     <Route exact path='/' component={HomePage} />
     <Route path='/shoppage' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
