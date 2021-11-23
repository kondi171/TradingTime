import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './landing page/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        
        <Route path='/' exact component={LandingPage} />;
      </Router>
    );
  }
}

export default App;
