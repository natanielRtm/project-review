import React,{Component} from 'react';
import ErrorHandler from './templates/ErrorHandler';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Pokemon from './organisms/Pokemon';


class App extends Component {
  
  render(){
    return (
      <ErrorHandler>
      <Router>
        <div className="App" >   
            <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
            </div>
        </div>
        </Router>
      </ErrorHandler>
    )
   }
}

export default App;
