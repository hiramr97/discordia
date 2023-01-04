import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Components/Users/Singup';

function App() {
  return (
    <div>
      <Signup />
      <Routes>
        <Route path='' />
      </Routes>
    </div>
  );
}

export default App;
