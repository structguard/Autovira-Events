// import React from 'react'
// import { motion } from 'framer-motion';
// import { theme } from './theme';

// const WhatWeDo = ({ scrollTo }) => {
//     const pillars = [
//         { title: "Strategic Vision", detail: "Translating architectural scale corporate blueprints into high-fidelity actionable layouts." },
//         { title: "Spatial Engineering", detail: "Transforming empty environments using industrial matt black frameworks and structural illumination." },
//         { title: "Flawless Execution", detail: "Managing vendor networks and timing sequences safely with split-second precision." }
//     ];
//     return (
//         <section id="whatwedo" style={{ backgroundColor: theme.colors.black, padding: '100px 40px', borderTop: `1px solid ${theme.colors.border}` }}>
//             <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

//                 {/* Section Heading */}
//                 <div style={{ marginBottom: '60px' }}>
//                     <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// Core Capabilities</span>
//                     <h2 style={{ color: theme.colors.white, fontSize: '36px', margin: '10px 0 0 0' }}>Our Operational Pillars</h2>
//                 </div>

//                 {/* 3-Column Pillars Layout */}
//                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
//                     {pillars.map((pillar, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: idx * 0.1 }}
//                             style={{ paddingBottom: '20px' }}
//                         >
//                             {/* Animated Copper Line Indicator */}
//                             <div style={{ width: '40px', height: '2px', backgroundColor: theme.colors.copper, marginBottom: '20px' }} />
//                             <h3 style={{ color: theme.colors.white, fontSize: '20px', margin: '0 0 15px 0', fontWeight: '600' }}>
//                                 0{idx + 1}. {pillar.title}
//                             </h3>
//                             <p style={{ color: theme.colors.muted, fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
//                                 {pillar.detail}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default WhatWeDo

import React from 'react';
import { motion } from 'framer-motion';
import { theme } from './theme';

const WhatWeDo = ({ scrollTo }) => {
    const pillars = [
        { title: "Strategic Vision", detail: "Translating architectural scale corporate blueprints into high-fidelity actionable layouts." },
        { title: "Spatial Engineering", detail: "Transforming empty environments using industrial matt black frameworks and structural illumination." },
        { title: "Flawless Execution", detail: "Managing vendor networks and timing sequences safely with split-second precision." }
    ];

    return (
        <section 
            id="whatwedo" 
            style={{ 
                backgroundColor: theme.colors.black, 
                padding: 'clamp(60px, 10vw, 100px) 24px', // Fluid padding avoids side clipping
                borderTop: `1px solid ${theme.colors.border}`,
                width: '100%',
                overflow: 'hidden', // Extra defensive layout barrier
                boxSizing: 'border-box'
            }}
        >
            <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

                {/* --- ANIMATED HEADING BLOCK --- */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ marginBottom: '50px' }}
                >
                    <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', display: 'block' }}>
                        // Core Capabilities
                    </span>
                    <h2 style={{ color: theme.colors.white, fontSize: 'clamp(28px, 4vw, 36px)', margin: '10px 0 0 0', fontWeight: '800', lineHeight: 1.2 }}>
                        Our Operational Pillars
                    </h2>
                </motion.div>

                {/* --- RESPONSIVE INTERACTIVE GRID MESH --- */}
                <div 
                    className="capabilities-responsive-grid"
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr 1fr', 
                        gap: '40px',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                >
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8 }} // Hover lift micro-interaction
                            className="pillar-card"
                            style={{ 
                                padding: '24px',
                                background: 'rgba(255, 255, 255, 0.01)',
                                border: `1px solid ${theme.colors.border}`,
                                borderRadius: '4px',
                                transition: 'border-color 0.3s ease, background-color 0.3s ease',
                                boxSizing: 'border-box'
                            }}
                        >
                            {/* Animated Copper Line Indicator (Expands smoothly on card hover) */}
                            <div 
                                className="animated-line"
                                style={{ 
                                    width: '40px', 
                                    height: '2px', 
                                    backgroundColor: theme.colors.copper, 
                                    marginBottom: '24px',
                                    transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                }} 
                            />
                            
                            <h3 style={{ color: theme.colors.white, fontSize: '19px', margin: '0 0 14px 0', fontWeight: '700', letterSpacing: '0.5px' }}>
                                0{idx + 1}. {pillar.title}
                            </h3>
                            
                            <p style={{ color: theme.colors.muted, fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                                {pillar.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* --- INJECTED ISOLATED MEDIA QUERY RULES --- */}
            <style>{`
                /* Instant Grid Folding for tablets and mobile devices */
                @media (max-width: 991px) {
                    .capabilities-responsive-grid {
                        grid-template-columns: 1fr !important;
                        gap: 24px !important;
                    }
                }

                /* Interactive Card Glow styling rules */
                .pillar-card:hover {
                    border-color: ${theme.colors.copper} !important;
                    background: rgba(197, 143, 90, 0.03) !important;
                }

                .pillar-card:hover .animated-line {
                    width: 80px !important;
                }
            `}</style>
        </section>
    );
};

export default WhatWeDo;