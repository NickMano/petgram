import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import PhotoDetail from './pages/PhotoDetail';

const App = () => (
  <Router>
    <Home path="/" />
    <PhotoDetail path="/photo/:photoId" />
  </Router>
);

export default App;
