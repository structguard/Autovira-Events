import React from 'react'
import { motion } from 'framer-motion';
import { theme } from './theme';

const About = () => {
    return (
        <section id="about" style={{ backgroundColor: theme.colors.black, padding: '100px 40px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// Who We Are</span>
                    <h2 style={{ color: theme.colors.white, fontSize: '36px', margin: '10px 0 20px 0' }}>Architects of Immersive Experiences</h2>
                    <p style={{ color: theme.colors.muted, lineHeight: '1.7', fontSize: '15px' }}>
                        We reject the ordinary. Our collective team blends elite spatial design, cutting-edge tech structures, and flawless corporate execution to turn architectural visions into living, breathing milestones.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ backgroundColor: theme.colors.charcoal, padding: '40px', borderLeft: `4px solid ${theme.colors.copper}` }}
                >
                    <h3 style={{ color: theme.colors.copper, fontSize: '20px', margin: '0 0 15px 0' }}>Our Signature Approach</h3>
                    <p style={{ color: theme.colors.white, fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        From elite national conventions to highly exclusive media rollouts, we construct high-fidelity environments that capture instant attention and command total authority.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}

export default About

