import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" data-testid="app">
      <label>Kiran</label>
      <input type="text" data-testid="username" 
      value="Unit testing"
      className="App"
      onChange={e=>{
        console.log("Test");
      }}/>
    </div>
  );
}

export default App;
