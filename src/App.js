import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ProductCard from './components/ProductCard/ProductCard';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };
  }

  addToCart = (obj) => {
    const cardId = obj.id;
    const index = this.state.cart.findIndex(obj => obj.id === cardId);

    if (index === -1) {
      this.setState(prevState => ({
        cart: [
          ...prevState.cart,
          obj
        ]
      }));
    } else {
      const oldObj = this.state.cart[index];
      const newObj = {...oldObj, amount: oldObj.amount + obj.amount};
      const newArr = [
        this.state.cart.filter(obj => obj.id !== cardId),
        newObj,
      ];

      this.setState({cart: newArr});
    }

    console.log(this.state)
  }

  render() {
    const { cart } = this.state;

    const WrappedProductCard = (props) => {
      return (<ProductCard {...props} addToCart={this.addToCart} />)
    }

    return (
      <div className="app">
        <Header cart={cart} />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />

            <Route
              path="/card/:id?"
              component={WrappedProductCard}
            >
            </Route>

          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
