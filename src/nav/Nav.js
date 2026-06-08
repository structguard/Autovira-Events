// import React from 'react'

// const Nav = () => {
//   return (
//     <div>Navss</div>
//   )
// }

// export default Nav


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import About from '../screens/About';
import Header from '../screens/Header';
import Landingscreen from '../screens/Landingscreen';
import WhatWeDo from '../screens/WhatWeDo';
import Services from '../screens/Services';
import Contact from '../screens/Contact';
import Footer from '../screens/Footer';
import Reviews from '../screens/Reviews';







const Nav = () => {

    return (

        <Routes>
         

            <Route path="/" element={<Home />} />
            <Route path="Header" element={<Header />} />
            <Route path="Landingscreen" element={<Landingscreen />} />
            <Route path="About" element={<About />} />
            <Route path="WhatWeDo" element={<WhatWeDo />} />
            <Route path="Services" element={<Services />} />
            <Route path="Reviews" element={<Reviews />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Footer" element={<Footer />} />


        </Routes>


    );
};

export default Nav;