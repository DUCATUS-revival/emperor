import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages';
import { Header, Footer } from './components';

import './styles/index.scss';

const ContactPage = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="emperor">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/contact"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage />
            </Suspense>
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
