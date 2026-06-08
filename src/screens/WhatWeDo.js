import React from 'react'
import { motion } from 'framer-motion';
import { theme } from './theme';

const WhatWeDo = () => {
    const pillars = [
        { title: "Strategic Vision", detail: "Translating architectural scale corporate blueprints into high-fidelity actionable layouts." },
        { title: "Spatial Engineering", detail: "Transforming empty environments using industrial matt black frameworks and structural illumination." },
        { title: "Flawless Execution", detail: "Managing vendor networks and timing sequences safely with split-second precision." }
    ];
    return (
        <section id="whatwedo" style={{ backgroundColor: theme.colors.black, padding: '100px 40px', borderTop: `1px solid ${theme.colors.border}` }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Section Heading */}
                <div style={{ marginBottom: '60px' }}>
                    <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// Core Capabilities</span>
                    <h2 style={{ color: theme.colors.white, fontSize: '36px', margin: '10px 0 0 0' }}>Our Operational Pillars</h2>
                </div>

                {/* 3-Column Pillars Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            style={{ paddingBottom: '20px' }}
                        >
                            {/* Animated Copper Line Indicator */}
                            <div style={{ width: '40px', height: '2px', backgroundColor: theme.colors.copper, marginBottom: '20px' }} />
                            <h3 style={{ color: theme.colors.white, fontSize: '20px', margin: '0 0 15px 0', fontWeight: '600' }}>
                                0{idx + 1}. {pillar.title}
                            </h3>
                            <p style={{ color: theme.colors.muted, fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                                {pillar.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WhatWeDo

