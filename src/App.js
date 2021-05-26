import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ProductCard from './components/ProductCard/ProductCard';

import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/card" component={ProductCard} />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
