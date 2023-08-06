import './App.css';
import HomePage from './components/home/HomePage';
import Navbar from './components/navigation/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <header className="App-header">
          <HomePage/>
        </header>
      </div>
    </Router>
  );
}

export default App;
