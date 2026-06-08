import React from 'react'
import { motion } from 'framer-motion';
import { theme } from './theme';

const Landingscreen = ({ scrollTo }) => {
    return (
        <section id="home" style={{
            height: '100vh', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', textAlign: 'center',
            backgroundColor: theme.colors.black, padding: '0 20px', position: 'relative'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ maxWidth: '800px', zIndex: 2 }}
            >
                <h1 style={{ fontSize: '64px', fontWeight: '900', color: theme.colors.white, margin: '0 0 20px 0', letterSpacing: '-1px' }}>
                    CRAFTING <span style={{ color: theme.colors.copper }}>METICULOUS</span> MOMENTS
                </h1>
                <p style={{ fontSize: '18px', color: theme.colors.muted, maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
                    High-end exhibitions, breakthrough brand activities, and luxury corporate events tailored to absolute perfection.
                </p>
                <button
                    onClick={() => scrollTo('contact')}
                    style={{
                        backgroundColor: theme.colors.copper, color: theme.colors.black,
                        border: 'none', padding: '16px 40px', fontSize: '14px', fontWeight: '700',
                        textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer',
                        transition: theme.transitions.smooth
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = theme.colors.white; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = theme.colors.copper; }}
                >
                    Plan Your Event
                </button>
            </motion.div>
        </section>
    );
}

export default Landingscreen