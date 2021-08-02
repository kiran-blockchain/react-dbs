import logo from './logo.svg';
import './App.css';
import ReceiverOne from './components/ReceiverOne';
import ReceiverTwo from './components/ReceiverTwo';
import Publisher from './components/publisher';
import CountryList from './components/country';

function App() {
  return (
    <div className="App">
      <Publisher/>
      <ReceiverOne/>
      <ReceiverTwo/>
      <CountryList/>
    </div>
  );
}

export default App;
