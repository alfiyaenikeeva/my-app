import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ProductCard from './components/ProductCard/ProductCard';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <ProductCard />
    <Main />
    <Footer />
  </div>
);

export default App;
