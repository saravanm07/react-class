import React from 'react';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Firstone from './Firstone';
import Second from './Second';
import Third from './Third';


export default function Mainfun() {
  return (
    <div>
      <BrowserRouter>
      <Link style={{}} to="/">Home</Link>
      <Link style={{marginLeft:"50px"}} to="/Second">contact</Link>
      <Link to="/Third" style={{marginLeft:"50px"}}>usestate</Link>
      <Routes>
        <Route path="/" element={<Firstone/>}/>
        <Route path="/Second" element={<Second/>}/>
        <Route path="/Third" element={<Third/>}/>
      
      </Routes>
      </BrowserRouter>


    </div>
  )
}
