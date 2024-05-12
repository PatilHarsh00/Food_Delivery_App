import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
