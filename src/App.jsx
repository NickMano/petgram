import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import PhotoDetail from './pages/PhotoDetail';
import TabBar from './components/TabBar';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <>
    <Router>
      <Home path="/" />
      <PhotoDetail path="/photo/:photoId" />
    </Router>
    <PrivateRoute />
    <TabBar />
  </>
);

export default App;
