import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';

export default function App() {
  return (
     <BrowserRouter>
     <Route path='/' element={<Home/>} />
     <Route path='/sgin-in' element={<SignIn/>} />
     <Route path='/sgin-Up' element={<SignUp/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/profile' element={<Profile/>} />
     </BrowserRouter>
  )
}
