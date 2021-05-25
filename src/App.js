import './App.css';

import Card from './components/Card/Card';

import image from './assets/images/svg/ice cream.png';

function App() {
  return (
    <div className="App">
      App
        <Card
          text="Snow Tender Ice Cream"
          image={image}
          price="243.00"
        />
    </div>
  );
}

export default App;
