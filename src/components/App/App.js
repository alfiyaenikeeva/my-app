import React from "react";
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RegisterModal from '../Modal/RegistrModal';
import LoginModal from '../Modal/LoginModal';
import Main from '../Main/Main';
import Basket from '../Basket/Basket';
import ProductCard from '../ProductCard/ProductCard';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import {setIsRegistered, setIsModal} from "../../actions";

import './App.css';

const App = ({ isModal, isRegistered, setIsRegistered, setIsModal }) => (
  <div className="app">
    <Header />
    {
      isModal && isRegistered
        ? <LoginModal isModal isRegistered setIsModal={setIsModal} setIsRegistered={setIsRegistered}/>
        : isModal && !isRegistered ?
        <RegisterModal isModal isRegistered setIsModal={setIsModal} setIsRegistered={setIsRegistered}/> : null
    }
    <Switch >
      <Route
        path="/card/:id?"
        component={ProductCard}
      />

      <Route
        path="/basket"
        component={Basket}
      />

      <Route exact path="/" component={Main} />
    </Switch>
    <Footer />
  </div>
);

const mapStateToProps = ({ isModal, isRegistered }) => {
  return { isModal, isRegistered };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRegistered: (bool) => dispatch(setIsRegistered(bool)),
    setIsModal: (bool) => dispatch(setIsModal(bool)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
