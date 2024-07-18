import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';
import Contact from './pages/Contact';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import { getCurrentUser } from './services/auth-service';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };

    fetchUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navigationbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
