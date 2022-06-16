import { useState } from 'react';

import { Aside } from './components/aside';
import { Footer } from './components/footer';
import { Header } from './components/header';
import classes from './App.module.css';
import { Portada } from './pages/portada';
import { Page } from './layouts/page';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Aside />
      <Page>
        <Portada />
      </Page>

      <Footer />
    </div>
  );
}

export default App;
