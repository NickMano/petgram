import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import NavBar from './components/NavBar';
import TabBar from './components/TabBar';

const PhotoDetail = React.lazy(() => import('./pages/PhotoDetail'));
const Home = React.lazy(() => import('./pages/Home'));
const PrivateRoute = React.lazy(() => import('./PrivateRoute'));

const App = () => (
  <Suspense fallback={<div />}>
    <NavBar />
    <div style={{ paddingBottom: '50px' }}>
      <Router>
        <Home path="/" />
        <PhotoDetail path="/photo/:photoId" />
      </Router>
      <PrivateRoute />
    </div>
    <TabBar />
  </Suspense>
);

export default App;
