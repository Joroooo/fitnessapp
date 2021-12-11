import { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/core/Header/Header';
import Frontpage from './components/frontpage/Frontpage';
import Aboutus from './components/aboutus/Aboutus';
import Offers from './components/offers/Offers';

function App() {
  return (
    
<Fragment>

  <Header />
  <Frontpage />
  <Aboutus />
  <Offers />

</Fragment>

  );
}

export default App;
