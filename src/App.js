import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/views/Login';
import Home from './views/Home';
import SendMail from '../src/views/SendMail';
import Transporte from './views/Transporte/Transporte'
import Nosotros from './views/Nosotros/Nosotros'
import './css/main.css'

function App() {
  return (
        <Routes>       
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/SendMail' element={<SendMail />} />
          <Route path='/Transporte' element={<Transporte />} />
          <Route path='/Nosotros' element={<Nosotros />} />
        </Routes>);
}

export default App;
