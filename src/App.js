import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import image from './assets/images/png/ice cream.png';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Card
      text="Snow Tender Ice Cream"
      image={image}
      price="243.00"
    />
    <Footer />
  </div>
);

export default App;
