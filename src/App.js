import logo from './logo.svg';
import './App.css';
import Navbar from './compoments/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Student from './compoments/Student';
import About from './compoments/About';
import Education from './compoments/Education';
import Contact from './compoments/Contact';
import Projects from './compoments/Projects';
import Home from './compoments/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Project from './compoments/Project';


function App() {
  return (
    <div className="App">
    

     {/* <div className="d-flex flex-wrap"> 
         <Student name="Aniket"   rollno="1"   city="Nagpur"/>
         <Student name="Rakesh"   rollno="2"   city="Wardha"/>
         <Student name="Sagar"    rollno="3"   city="pune"/>

     </div> */}
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/Home" element={ <Home/>}/>
      <Route path="/About" element={<About/> }/>
      <Route path="/Education" element={ <Education/>}/>
      <Route path="/Contact" element={ <Contact/>}/>
      <Route path="/Project" element={ <Project/>}/>
     
     
     
     
    
     </Routes>
     
     </BrowserRouter>
    

     </div>
  );
}

export default App;
// BrowserRouter  Routes  Route
