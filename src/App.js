import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Saibar from './component/Saibar';
import Navabar from './component/Navabar';
import Login from './views/Login';
import Home from './views/Home';
import SendMail from '../src/views/SendMail';
import Transporte from './views/Transporte/Transporte'
import Nosotros from './views/Nosotros/Nosotros'
import './css/main.css'

function App() {

  return (
      <>
          <div>
            <Navabar/>
            <div className='flex'>
              <Saibar/>
              <Routes>       
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/SendMail' element={<SendMail />} />
                <Route path='/Transporte' element={<Transporte />} />
                <Route path='/Nosotros' element={<Nosotros />} />
                <Route path='/Login' element={<Login />} />
              </Routes>
            </div>
          </div>
      </>
    );
}

export default App;
