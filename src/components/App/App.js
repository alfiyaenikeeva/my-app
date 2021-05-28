import React  from "react";
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RegisterModal from '../Modal/RegistrModal';
import LoginModal from '../Modal/LoginModal';
import Main from '../Main/Main';
import Basket from '../Basket/Basket';
import ProductCard from '../ProductCard/ProductCard';

import './App.css';

const App = () => {
  const isModal = true
  const isRegistered = true;

  return (
    <div className="app">
      {
        isModal && isRegistered ? <LoginModal /> : <RegisterModal />
      }
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
};

export default App;
