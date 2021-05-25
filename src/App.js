import Card from './components/Card/Card';

import image from './assets/images/svg/ice cream.png';
import './App.css';

const App = () => (
  <div className="App">
    App
    <Card
      text="Snow Tender Ice Cream"
      image={image}
      price="243.00"
    />
  </div>
);

export default App;
