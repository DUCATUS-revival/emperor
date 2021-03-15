import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, ContactPage } from './pages';
import { Header, Footer } from './components';

import './styles/index.scss';

function App() {
  return (
    <div className="emperor">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
