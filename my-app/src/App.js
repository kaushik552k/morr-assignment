import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Movies from './components/Movies'
import Home from './components/Home'
import Series from './components/Series';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/series" component={Series}></Route>
        <Home/>

      </Switch>
    </div>
  </Router>

  );
}

export default App;
