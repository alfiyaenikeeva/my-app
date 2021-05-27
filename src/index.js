import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';
import CardsService from './services/cards-service';
import { CardsServiceProvider } from "./components/cardsServiceContext/cardsServiceContext";
import store from "./store";

import './index.scss';

const cardsService = new CardsService();

ReactDOM.render(
  <Provider store={store}>
    <CardsServiceProvider value={cardsService}>
      <Router>
        <App />
      </Router>
    </CardsServiceProvider>
  </Provider>,
  document.getElementById('root')
);
