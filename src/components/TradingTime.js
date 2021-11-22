import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import ApplicationPage from './application_page/layouts/ApplicationPage';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' exact element={<LandingPage />} />;
        <Route path='/app' exact element={<ApplicationPage />} />;
      </Routes>
    );
  }
}

export default App;
