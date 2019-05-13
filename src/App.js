import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//REDUX
import store from './store';
import { Provider } from 'react-redux';
//COMPONENTS
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import StockList from './components/pages/StockList';
import Overview from './components/pages/Overview';
import NotFound from './components/pages/NotFound';
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header branding="Stock Tool" />
          <div className="container mb-5">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/stock-list" component={StockList} />
              <Route
                exact
                path="/company-overview/:symbol/:currency"
                component={Overview}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
