import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Admin from './pages/Admin'; // Import the Events component
import Home from './pages/Home'; // Import the Home component
import Services from './pages/Services'; // Import the Services component
//import Admin from './pages/Admin'; // Import the Admin component
import About from './pages/About'; // Import the About component
import Blogs from './pages/Blogs'; // Import the Blogs component
import Contact from './pages/Contact'; // Import the Contact component
import Donation from './pages/Donation';
import Logout from './pages/Logout'; // Import the Logout component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Admin" element={<Admin />} />
         <Route path="/donation" element={<Donation />} />
        {/* <Route path="/volunteer" element={<Volunteer />} />  */}
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
