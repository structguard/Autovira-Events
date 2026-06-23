// import React from 'react'
// import { motion } from 'framer-motion';
// import { theme } from './theme';

// const About = ({ scrollTo }) => {
//     return (
//         <section id="about" style={{ backgroundColor: theme.colors.black, padding: '100px 40px' }}>
//             <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>

//                 <motion.div
//                     initial={{ opacity: 0, x: -40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// Who We Are</span>
//                     <h2 style={{ color: theme.colors.white, fontSize: '36px', margin: '10px 0 20px 0' }}>Architects of Immersive Experiences</h2>
//                     <p style={{ color: theme.colors.muted, lineHeight: '1.7', fontSize: '15px' }}>
//                         We reject the ordinary. Our collective team blends elite spatial design, cutting-edge tech structures, and flawless corporate execution to turn architectural visions into living, breathing milestones.
//                     </p>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     style={{ backgroundColor: theme.colors.charcoal, padding: '40px', borderLeft: `4px solid ${theme.colors.copper}` }}
//                 >
//                     <h3 style={{ color: theme.colors.copper, fontSize: '20px', margin: '0 0 15px 0' }}>Our Signature Approach</h3>
//                     <p style={{ color: theme.colors.white, fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
//                         From elite national conventions to highly exclusive media rollouts, we construct high-fidelity environments that capture instant attention and command total authority.
//                     </p>
//                 </motion.div>

//             </div>
//         </section>
//     )
// }

// export default About
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from './theme';
import imgTeamLandscape from "../images/team.jpg"
const About = () => {
    const [activePillar, setActivePillar] = useState(0);

    // Images
    const imgLeft = "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop";
    const imgRight = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop";
    // Premium wide landscape team shot (or dark boardroom/production workspace)
    // const imgTeamLandscape = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop";

    const metrics = [
        { value: "250+", label: "Elite Events Executed" },
        { value: "15+", label: "Global Brand Partners" },
        { value: "100%", label: "Precision Execution" }
    ];

    const pillars = [
        { title: "01 / Architectural Blueprinting", desc: "We don't just place stages; we design spatial flows. Every square inch of your venue is calculated to guide visitor psychology and maximize engagement." },
        { title: "02 / High-Fidelity Infrastructure", desc: "Utilizing advanced AV tech, custom lighting arrays, and perfectly engineered sound structures that submerge your guests entirely within your brand's atmosphere." },
        { title: "03 / Immaculate Operations", desc: "A military-grade execution philosophy. From countdown timelines to live broadcast contingencies, our backstage operations run invisibly and flawlessly." }
    ];

    return (
        <section id="about" style={{
            backgroundColor: theme.colors.black,
            padding: '120px 20px',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '100px' }}>

                {/* --- SECTION 1: HERO SPLIT LAYOUT --- */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
                    <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// Who We Are</span>
                            <h2 style={{ color: theme.colors.white, fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: '900', margin: '15px 0 25px 0', lineHeight: '1.1', letterSpacing: '-1px' }}>
                                Architects of <br />Immersive Experiences
                            </h2>
                            <p style={{ color: theme.colors.muted, lineHeight: '1.7', fontSize: '16px', margin: 0 }}>
                                We reject the ordinary. Our collective team blends elite spatial design, cutting-edge tech structures, and flawless corporate execution to turn architectural visions into living, breathing milestones.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 0.7, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ width: '100%', height: '320px', backgroundImage: `url(${imgLeft})`, backgroundSize: 'cover', backgroundPosition: 'center', border: `1px solid ${theme.colors.border}` }}
                        />
                    </div>

                    <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 0.5, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            style={{ width: '100%', height: '220px', backgroundImage: `url(${imgRight})`, backgroundSize: 'cover', backgroundPosition: 'center', border: `1px solid ${theme.colors.border}` }}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                backgroundColor: theme.colors.charcoal, padding: '45px 35px', borderLeft: `4px solid ${theme.colors.copper}`,
                                borderTop: `1px solid ${theme.colors.border}`, borderRight: `1px solid ${theme.colors.border}`, borderBottom: `1px solid ${theme.colors.border}`
                            }}
                        >
                            <h3 style={{ color: theme.colors.copper, fontSize: '22px', fontWeight: '700', margin: '0 0 15px 0', letterSpacing: '-0.5px' }}>Our Signature Approach</h3>
                            <p style={{ color: theme.colors.white, fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                                From elite national conventions to highly exclusive media rollouts, we construct high-fidelity environments that capture instant attention and command total authority.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* --- SECTION 2: AUTHORITY METRICS --- */}
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px',
                    borderTop: `1px solid ${theme.colors.border}`, borderBottom: `1px solid ${theme.colors.border}`, padding: '40px 0'
                }}>
                    {metrics.map((metric, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} style={{ textAlign: 'center' }}>
                            <h4 style={{ color: theme.colors.copper, fontSize: '48px', fontWeight: '900', margin: '0 0 5px 0', fontFamily: 'monospace' }}>{metric.value}</h4>
                            <p style={{ color: theme.colors.muted, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>{metric.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* --- NEW SECTION 4: THE TEAM LANDSCAPE & PROFILE --- */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
                    {/* Landscape Interactive Wrapper */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        style={{
                            width: '100%',
                            height: 'clamp(250px, 45vh, 480px)', // Fluid height scaling on mobile vs web
                            backgroundImage: `url(${imgTeamLandscape})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center 30%', // Focused centering alignment
                            border: `1px solid ${theme.colors.border}`,
                            position: 'relative',
                            filter: 'grayscale(30%) brightness(90%)' // Elegant cinema styling
                        }}
                    >
                        {/* Subtle inner dark gradient border mask */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                            background: 'linear-gradient(to top, rgba(18,18,18,0.7) 0%, transparent 100%)',
                            pointerEvents: 'none'
                        }} />
                    </motion.div>

                    {/* Team Text Layout */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// The Collective</span>
                            <h3 style={{ color: theme.colors.white, fontSize: '28px', fontWeight: '800', margin: '5px 0 0 0', letterSpacing: '-0.5px' }}>
                                Precision Engineered By Humans
                            </h3>
                        </div>
                        <div style={{ flex: '1 1 600px' }}>
                            <p style={{ color: theme.colors.muted, fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                                Autovira is powered by a handpicked assembly of scenic directors, mechanical designers, and obsessive technical logisticians. We don't farm out operations to standard temporary staffing pools. Every element of your environment is managed directly by specialized, resident experts who understand that execution error equals brand vulnerability.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- SECTION 3: THE THREE PILLARS --- */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                    <div style={{ flex: '1 1 350px' }}>
                        <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// Deep Capabilities</span>
                        <h3 style={{ color: theme.colors.white, fontSize: '32px', fontWeight: '800', margin: '10px 0 0 0', letterSpacing: '-0.5px' }}>How We Achieve Perfection</h3>
                    </div>
                    <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {pillars.map((pillar, idx) => {
                            const isOpen = activePillar === idx;
                            return (
                                <div key={idx} onClick={() => setActivePillar(idx)} style={{ backgroundColor: theme.colors.charcoal, border: `1px solid ${isOpen ? theme.colors.copper : theme.colors.border}`, padding: '24px', cursor: 'pointer', transition: theme.transitions.smooth }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 style={{ color: isOpen ? theme.colors.white : theme.colors.muted, fontSize: '18px', fontWeight: '700', margin: 0 }}>{pillar.title}</h4>
                                        <span style={{ color: theme.colors.copper, fontSize: '20px' }}>{isOpen ? '−' : '+'}</span>
                                    </div>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div initial={{ height: 0, opacity: 0, marginTop: 0 }} animate={{ height: 'auto', opacity: 1, marginTop: 15 }} exit={{ height: 0, opacity: 0, marginTop: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                                                <p style={{ color: theme.colors.muted, fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{pillar.desc}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>



            </div>
        </section>
    )
}

export default About;