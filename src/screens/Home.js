import React from 'react'
import Header from './Header'
import WhatWeDo from './WhatWeDo'
import About from './About'
import Landingscreen from './Landingscreen'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import Reviews from './Reviews'

const Home = () => {
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
        <div>

            <Header scrollTo={scrollToSection}/>

            <section id="Landingscreen" >
                <Landingscreen scrollTo={scrollToSection} />
            </section>

            <section id="About">
                <About scrollTo={scrollToSection}/>
            </section>

            <section id="whatwedo">
                <WhatWeDo scrollTo={scrollToSection}/>
            </section>

            <section id="Services">
                <Services scrollTo={scrollToSection}/>
            </section>

            <section id="Reviews">
                <Reviews scrollTo={scrollToSection}/>
            </section>

            <section id="Contact">
                <Contact scrollTo={scrollToSection} />
            </section>

            <Footer />

        </div>
    )
}

export default Home