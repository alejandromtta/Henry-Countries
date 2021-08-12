import './App.css';
import LandingPage from './components/LandingPage'
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage'
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={HomePage} />
    </div>
  );
}

export default App;
