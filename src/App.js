import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';
import Contact from './pages/Contact';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import About from './pages/About';


const App = () => {
  return (
   <>
   <BrowserRouter>
   <Navigationbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/post" element={<Post />} />
       <Route path="/blog" element={<Blog />} />
       <Route path='/about' element={<About />} />
       <Route path="/contact" element={<Contact />} />

     </Routes>
     <Footer />
   </BrowserRouter>

   </>
  );
}

export default App;
