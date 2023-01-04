import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChannelPage from './Components/Channels/ChannelPage';
import Homepage from './Components/Channels/Homepage';
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
        <Route path='/channels/homepage' element={<Homepage/>}/>
        <Route path='/channels/:id' element={<ChannelPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
