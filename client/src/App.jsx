import {BrowserRouter, Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Signup from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './Components/Header';

export default function App(){

  return<BrowserRouter>
  <Header/>
  
  <Routes>

    <Route path="/Home" element={<Home/>} />
    <Route path="/Sign-In" element={<SignIn />} />
    <Route path="/Sign-Up" element={<Signup />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/About" element={<About />} />
  </Routes>


  </BrowserRouter>


}



  



/*import React from "react";

export default function App(){
    return<h1 className='text-red-500'>App </h1>

}*/
