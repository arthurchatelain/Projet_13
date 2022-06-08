import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import User from './Pages/User';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/User:id' element={<User />} />
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  )
}

export default App;
