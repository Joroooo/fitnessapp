import { Fragment } from 'react';

import { Route, Routes, Link, NavLink, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';

import Header from './components/core/Header/Header';
import Frontpage from './components/frontpage/Frontpage';
import Aboutus from './components/aboutus/Aboutus';
import Offers from './components/offers/Offers';

function App() {


  const offers = [
    {"name": "Unlimited", "price": 100, "visits": "unlimited", "duration": "1 Month", "description": "Lorem ipsum dol amet"},
    {"name": "Pro", "price": 85, "visits": "30", "duration": "1 Month", "description": "Lorem ipsum dol amet"},
    {"name": "midlevel", "price": 60, "visits": "25", "duration": "1 Month", "description": "Lorem ipsum dol amet"},
    {"name": "starter", "price": 35, "visits": "10", "duration": "1 Month", "description": "Lorem ipsum dol amet"},
  ]
  return (

<Fragment>

  <Header />

<Routes>

  <Route path="/" element={<Frontpage />} />
  <Route path="/about" element={<Aboutus />} />
  <Route path="/offers" element = {<Offers />} />

</Routes>

</Fragment>

  );

}



export default App;
