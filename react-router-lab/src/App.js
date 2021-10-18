import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import About from './pages/About';
import Nav from './components/Nav';
import Stock from './pages/Stock';
import Home from './pages/home';
import Stocks from './pages/stock-data';


//components for navbar and navigation. 
//pages for about/dashboard(all stocks)/solo stock/home page
//source data from stock-data/API



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route
          path="/price/:symbol"
          render={(routerProps) => <Price {...routerProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
