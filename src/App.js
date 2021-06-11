import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/home';
import Navbar from './component/navbar';
import Store from './component/store';
import History from './component/history';
import Stock from './component/stockmanager';
import Cashier from './component/cashier';


function App() {
  return (
    <div className="App container">
     <Navbar />
    <BrowserRouter>
      <Switch>
        <Route>
          <Home />
        </Route>
        <Route>
          <Store />
        </Route>
        <Route>
          <History />
        </Route>
        <Route>
          <Stock />
        </Route>
        <Route>
          <Cashier />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
