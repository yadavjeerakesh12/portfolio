import './App.css';
import { Routes,Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/about' element={<About/>}/>
      <Route path= '/skill' element={<Skill/>}/>
      <Route path= '/project' element={<Project/>}/>
      <Route path= '/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
