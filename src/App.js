import './App.css';
import LandingPage from './components/LandingPage'
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage'
import SpecificCountrie from './components/SpecificCountrie'
import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route  path="/home" component={NavBar} />
      <Route exact path="/home" component={HomePage} />
      
      <Route path="/home/:id" component={SpecificCountrie}/>
    </div>
  );
}

export default App;
