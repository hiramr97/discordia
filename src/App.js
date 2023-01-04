import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Users/Login';
import Signup from './Components/Users/Singup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
