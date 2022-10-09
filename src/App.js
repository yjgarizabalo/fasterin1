import './css/main.css'
import { Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import SendMail from './views/SendMail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' component={<Home />} />
        <Route path='/SendMail' element={<SendMail />} />
      </Routes>
    </div>
  );
}

export default App;
