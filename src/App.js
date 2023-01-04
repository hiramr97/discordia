import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Users/Login';
import Signup from './Components/Users/Singup';
import UpdateProfile from './Components/Users/UpdateProfile';
import Sidebar from './Utilities/Sidebar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/updateprofile' element={<UpdateProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
