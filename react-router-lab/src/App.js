
import './App.css';
import { Route, Switch } from "react-router-dom";
import About from './pages/About';
import Nav from './components/Nav';
import Stock from './pages/Stock';
import Home from './pages/Home';
import stocks from './data.json';
import Dashboard from './pages/Dashboard';


//components for navbar and navigation. 
//pages for about/dashboard(all stocks)/solo stock/home page
//source data from stock-data/API



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/stocks/:symbol"
          render={(routerProps) => <Stock stocks={stocks} {...routerProps} />}
        />
        <Route
          path="/stocks/l"
          render={(routerProps) => <Dashboard stocks={stocks} {...routerProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
