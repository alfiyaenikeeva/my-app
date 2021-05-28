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
import { withRouter, Redirect } from 'react-router-dom';
import {setIsRegistered, setIsModal, setIsLogged} from "../../actions";

import './App.css';

const App = ({ isModal, isRegistered, setIsRegistered, setIsModal, setIsLogged, isLogged }) => (
  <div className="app">
    <Header />
    {
      isModal && isRegistered
        ? <LoginModal isModal isRegistered setIsModal={setIsModal} setIsRegistered={setIsRegistered} setIsLogged={setIsLogged}/>
        : isModal && !isRegistered ?
        <RegisterModal isModal isRegistered setIsModal={setIsModal} setIsRegistered={setIsRegistered}/> : null
    }
    <Switch >
      <Route exact path="/" component={Main} />
      <Route
        path="/card/:id?"
        component={ProductCard}
      />
      {
        isLogged
          ?
          <Route
            path="/basket"
            component={Basket}
          />
          : <Redirect to="/" />
      }
    </Switch>
    <Footer />
  </div>
);

const mapStateToProps = ({ isModal, isRegistered, isLogged }) => {
  return { isModal, isRegistered, isLogged };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRegistered: (bool) => dispatch(setIsRegistered(bool)),
    setIsModal: (bool) => dispatch(setIsModal(bool)),
    setIsLogged: (bool) => dispatch(setIsLogged(bool)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
