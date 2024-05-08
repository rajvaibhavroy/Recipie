import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Content from './pages/Content';
import Reachus from './pages/Reachus';
import Signup from './pages/Signup';
import RecipieView from './pages/RecipieView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div style={{height:"100px"}}>
      <Navbar/>
      </div>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='footer' element={<Footer/>}/>
        <Route path='content' element={<Content/>}/>
        <Route path='reachus' element={<Reachus/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='recipieview' element={<RecipieView/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
