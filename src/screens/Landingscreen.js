// import React from 'react'
// import { motion } from 'framer-motion';
// import { theme } from './theme';

// const Landingscreen = ({ scrollTo }) => {

 
     
//     return (
//         <section id="home" style={{
//             height: '100vh', display: 'flex', flexDirection: 'column',
//             justifyContent: 'center', alignItems: 'center', textAlign: 'center',
//             backgroundColor: theme.colors.black, padding: '0 20px', position: 'relative'
//         }}>
//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 style={{ maxWidth: '800px', zIndex: 2 }}
//             >
//                 <h1 style={{ fontSize: '64px', fontWeight: '900', color: theme.colors.white, margin: '0 0 20px 0', letterSpacing: '-1px' }}>
//                     CRAFTING <span style={{ color: theme.colors.copper }}>METICULOUS</span> MOMENTS
//                 </h1>
//                 <p style={{ fontSize: '18px', color: theme.colors.muted, maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
//                     High-end exhibitions, breakthrough brand activities, and luxury corporate events tailored to absolute perfection.
//                 </p>
//                 <button
//                     onClick={() => scrollTo('contact')}
//                     style={{
//                         backgroundColor: theme.colors.copper, color: theme.colors.black,
//                         border: 'none', padding: '16px 40px', fontSize: '14px', fontWeight: '700',
//                         textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer',
//                         transition: theme.transitions.smooth
//                     }}
//                     onMouseOver={(e) => { e.target.style.backgroundColor = theme.colors.white; }}
//                     onMouseOut={(e) => { e.target.style.backgroundColor = theme.colors.copper; }}
//                 >
//                     Plan Your Event
//                 </button>
//             </motion.div>
//         </section>
//     );
// }

// export default Landingscreen


// import React from 'react'
// import { motion } from 'framer-motion';
// import { theme } from './theme';

// const Landingscreen = ({ scrollTo }) => {
//     // Replace this URL with your actual high-resolution dark event/luxury asset image
//     const bgImageUrl = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop";

//     return (
//         <section id="home" style={{
//             height: '100vh', 
//             display: 'flex', 
//             flexDirection: 'column',
//             justifyContent: 'center', 
//             alignItems: 'center', 
//             textAlign: 'center',
//             backgroundColor: theme.colors.black, 
//             padding: '0 20px', 
//             position: 'relative',
//             overflow: 'hidden' // Keeps the scale animation from causing layout overflow
//         }}>
//             {/* 1. Cinematic Background Image Container */}
//             <motion.div
//                 initial={{ scale: 1.1, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 0.35 }} // Reduced opacity keeps text completely legible
//                 transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     backgroundImage: `url(${bgImageUrl})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     zIndex: 1
//                 }}
//             />

//             {/* 2. Linear Gradient Mood Overlay (Blends image seamlessly into your Matt Black theme) */}
//             <div style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 background: `linear-gradient(to bottom, transparent 60%, ${theme.colors.black} 100%), 
//                             radial-gradient(circle, transparent 30%, ${theme.colors.black} 90%)`,
//                 zIndex: 1,
//                 pointerEvents: 'none'
//             }} />

//             {/* Hero Text Content */}
//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }} // Added slight delay so text hits after background starts
//                 style={{ maxWidth: '800px', zIndex: 2 }}
//             >
//                 <h1 style={{ fontSize: '64px', fontWeight: '900', color: theme.colors.white, margin: '0 0 20px 0', letterSpacing: '-1px' }}>
//                     CRAFTING <span style={{ color: theme.colors.copper }}>METICULOUS</span> MOMENTS
//                 </h1>
//                 <p style={{ fontSize: '18px', color: theme.colors.muted, maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
//                     High-end exhibitions, breakthrough brand activities, and luxury corporate events tailored to absolute perfection.
//                 </p>
//                 <button
//                     onClick={() => scrollTo('contact')}
//                     style={{
//                         backgroundColor: theme.colors.copper, 
//                         color: theme.colors.black,
//                         border: 'none', 
//                         padding: '16px 40px', 
//                         fontSize: '14px', 
//                         fontWeight: '700',
//                         textTransform: 'uppercase', 
//                         letterSpacing: '2px', 
//                         cursor: 'pointer',
//                         transition: theme.transitions.smooth
//                     }}
//                     onMouseOver={(e) => { e.target.style.backgroundColor = theme.colors.white; }}
//                     onMouseOut={(e) => { e.target.style.backgroundColor = theme.colors.copper; }}
//                 >
//                     Plan Your Event
//                 </button>
//             </motion.div>
//         </section>
//     );
// }

// export default Landingscreen;

import React from 'react';
import { motion } from 'framer-motion';
import { theme } from './theme';

const Landingscreen = ({ scrollTo }) => {
    const bgImageUrl = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop";

    return (
        <section 
            id="home" 
            style={{
                height: '100vh', 
                minHeight: '-webkit-fill-available', // Fixes mobile Safari address bar jumping bugs
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center', 
                textAlign: 'center',
                backgroundColor: theme.colors.black, 
                padding: '0 24px', 
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box'
            }}
        >
            {/* 1. Cinematic Background Image Container */}
            <motion.div
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.35 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${bgImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            />

            {/* 2. Linear Gradient Mood Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(to bottom, transparent 50%, ${theme.colors.black} 100%), 
                            radial-gradient(circle, transparent 20%, ${theme.colors.black} 95%)`,
                zIndex: 1,
                pointerEvents: 'none'
            }} />

            {/* Hero Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                    maxWidth: '900px', 
                    zIndex: 2,
                    width: '100%',
                    boxSizing: 'border-box'
                }}
            >
                {/* Responsive Typography Scales smoothly from 36px (mobile) up to 64px (desktop) */}
                <h1 style={{ 
                    fontSize: 'clamp(36px, 7vw, 64px)', 
                    fontWeight: '900', 
                    color: theme.colors.white, 
                    margin: '0 0 20px 0', 
                    letterSpacing: '-1px',
                    lineHeight: 1.15,
                    textTransform: 'uppercase'
                }}>
                    Crafting <span style={{ color: theme.colors.copper }}>Meticulous</span> Moments
                </h1>

                {/* Subtext Scales cleanly down to 15px on small screens */}
                <p style={{ 
                    fontSize: 'clamp(15px, 2vw, 18px)', 
                    color: theme.colors.muted, 
                    maxWidth: '600px', 
                    margin: '0 auto 40px auto', 
                    lineHeight: '1.6' 
                }}>
                    High-end exhibitions, breakthrough brand activities, and luxury corporate events tailored to absolute perfection.
                </p>

                {/* Framer Motion Interactive Action Button */}
                <motion.button
                    onClick={() => scrollTo('contact')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        backgroundColor: theme.colors.copper, 
                        color: theme.colors.black,
                        border: 'none', 
                        padding: '16px 36px', 
                        fontSize: '13px', 
                        fontWeight: '700',
                        textTransform: 'uppercase', 
                        letterSpacing: '2px', 
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                        borderRadius: '4px',
                        boxShadow: '0 4px 20px rgba(197, 143, 90, 0.15)'
                    }}
                    onMouseOver={(e) => { 
                        e.target.style.backgroundColor = theme.colors.white;
                        e.target.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseOut={(e) => { 
                        e.target.style.backgroundColor = theme.colors.copper;
                        e.target.style.boxShadow = '0 4px 20px rgba(197, 143, 90, 0.15)';
                    }}
                >
                    Plan Your Event
                </motion.button>
            </motion.div>
        </section>
    );
}

export default Landingscreen;