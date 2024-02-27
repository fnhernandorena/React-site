import Header from './components/header';
import Nav from './components/nav';

import HomePage from './pages/HomePage';
import Example01Page from './pages/example01';
import Example02Page from './pages/example02';
import Example03Page from './pages/example03';
import Example04Page from './pages/example04';
import Example05Page from './pages/example05';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <Router basename='/'>
    <Header />
    <Nav />
    <div className='flex max-w-screen-lg w-full justify-around mb-10'>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/example01' element={<Example01Page />} />
      <Route path='/example02' element={<Example02Page />} />
      <Route path='/example03' element={<Example03Page />} />
      <Route path='/example04' element={<Example04Page />} />
      <Route path='/example05' element={<Example05Page />} />
    </Routes>
    </div>
     
    </Router>
  )
}

export default App
