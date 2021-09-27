import React, { Suspense } from 'react';

import './App.css';

// import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';

import LinearProgress from '@material-ui/core/LinearProgress';

const Header = React.lazy(() => import('./components/Header'));
const Body = React.lazy(() => import('./components/Body'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="app">
      <Suspense 
        fallback={<div><LinearProgress /></div>}>
        <Header />
        <Body />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
