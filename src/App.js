import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Nav from './nav/Nav';


const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (

    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  )
}

export default App