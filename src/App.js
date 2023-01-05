import { Route, Routes } from 'react-router-dom';
import ChannelPage from './Components/Channels/ChannelPage';
import Homepage from './Components/Channels/Homepage';
import Login from './Components/Users/Login';
import Signup from './Components/Users/Singup';
import UpdateProfile from './Components/Users/UpdateProfile';

function App() {
  return (
    <div className='max-h-96'>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
        <Route path='/channels/homepage' element={<Homepage />} />
        <Route path='/channels/:id' element={<ChannelPage />} />

      </Routes>
    </div>
  );
}

export default App;
