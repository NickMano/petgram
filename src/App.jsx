import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import PhotoDetail from './pages/PhotoDetail';
import NavBar from './components/NavBar';
import TabBar from './components/TabBar';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <>
    <NavBar />
    <div style={{ paddingBottom: '50px' }}>
      <Router>
        <Home path="/" />
        <PhotoDetail path="/photo/:photoId" />
      </Router>
      <PrivateRoute />
    </div>
    <TabBar />
  </>
);

export default App;
