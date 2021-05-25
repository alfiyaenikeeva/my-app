import Card from './components/Card/Card';
import Header from './components/Header/Header';

import image from './assets/images/png/ice cream.png';
import './App.css';

const App = () => (
  <div className="App">
    App
    <Header />
    <Card
      text="Snow Tender Ice Cream"
      image={image}
      price="243.00"
    />
  </div>
);

export default App;
