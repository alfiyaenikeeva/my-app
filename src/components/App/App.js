import React  from "react";
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Basket from '../Basket/Basket';
import ProductCard from '../ProductCard/ProductCard';

import './App.css';

const App = () => (
  <div className="app">
    <Header />
      <Switch>
        <Route exact path="/" component={Main} />

        <Route
          path="/card/:id?"
          component={ProductCard}
        />

        <Route
          path="/basket"
          component={Basket}
        />
      </Switch>
    <Footer />
  </div>
);

export default App;
