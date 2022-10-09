import React from 'react'
import { Route, Routes } from 'react-router-dom';

// COMPONENTS
import Navbar from '../component/Navabar'
import Saibar from '../component/Saibar'
import Transporte from './Transporte/Transporte'
import Nosotros from '../views/Nosotros/Nosotros'

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Saibar />
        <div className="container">
          {/* <Route path='/Transporte' exact={true} component={Transporte} />
          <Route path='/Nosotros' exact={true} component={Nosotros} /> */}
        </div>
      </div>
    </>
  );
}

export default Home;