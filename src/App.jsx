import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import PhotoDetail from './pages/PhotoDetail';
import TabBar from './components/TabBar';

const App = () => (
  <>
    <Router>
      <Home path="/" />
      <PhotoDetail path="/photo/:photoId" />
    </Router>
    <TabBar />
  </>
);

export default App;
