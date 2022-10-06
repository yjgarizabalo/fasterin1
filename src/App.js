import './css/main.css'
import { Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Home' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
