import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About'; // Import the About component
import Admin from './pages/Admin'; // Import the Admin component
import Blogs from './pages/Blogs'; // Import the Blogs component
import Contact from './pages/Contact'; // Import the Contact component
import Donation from './pages/Donation'; // Import the Donation component
import Home from './pages/Home'; // Import the Home component
import Logout from './pages/Logout'; // Import the Logout component
import Services from './pages/Services'; // Import the Services component

const App = () => {
  return (
    <Router>
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Admin" element={<Admin />} />
         <Route path="/donation" element={<Donation />} />
        {/* <Route path="/volunteer" element={<Volunteer />} />  */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
=======
      <div className="pt-16"> {/* Ensure this padding matches your navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin" element={<Admin />} /> {/* Make sure the path is lowercase */}
          <Route path="/donation" element={<Donation />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
>>>>>>> fb1063b4969616ff91840bb386f1e2cd9fff9267
    </Router>
  );
};

export default App;
