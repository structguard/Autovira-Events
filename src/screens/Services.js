import React from 'react'
import { motion } from 'framer-motion';
import { theme } from './theme';

const Services = () => {
    const cards = [
        { title: "Exhibitions", desc: "Custom pavilions, premium trade expo architecture, global installations, and spatial crowd dynamic designs.", border: theme.colors.copper },
        { title: "Brand Activities", desc: "High-impact activation campaigns, immersive pop-up experiences, strategic PR operations, and experimental retail spaces.", border: theme.colors.white },
        { title: "Bespoke Services", desc: "Advanced architectural audio/visual production, structural concert lighting rigs, logistics tracking, and talent booking.", border: theme.colors.copper }
    ];
    const stats = [
        { num: "150+", label: "Exhibitions Hosted", color: theme.colors.copper },
        { num: "420+", label: "Brand Activations", color: theme.colors.white },
        { num: "99%", label: "Success Rating", color: theme.colors.copper },
        { num: "25K+", label: "Attendees Engaged", color: theme.colors.white }
    ];
    const corporateBrands = ['ALPHA CORP', 'VERTEX DIGITAL', 'METRIC MEDIA', 'ROSEWOOD IND', 'KINETIC LABS'];
    return (
        <>
            <section id="services" style={{ backgroundColor: theme.colors.charcoal, padding: '100px 40px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// Our Expertise Blueprint</span>
                        <h2 style={{ color: theme.colors.white, fontSize: '36px', margin: '10px 0 0 0' }}>What We Do & Excel At</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                style={{
                                    backgroundColor: theme.colors.black, padding: '40px',
                                    borderTop: `4px solid ${card.border}`, transition: 'all 0.3s ease'
                                }}
                            >
                                <h3 style={{ color: theme.colors.white, fontSize: '22px', margin: '0 0 15px 0' }}>{card.title}</h3>
                                <p style={{ color: theme.colors.muted, fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="experience" style={{ backgroundColor: theme.colors.black, padding: '80px 40px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '40px', textAlign: 'center' }}>
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <h3 style={{ fontSize: '48px', fontWeight: '900', color: stat.color, margin: '0 0 10px 0' }}>{stat.num}</h3>
                            <p style={{ color: theme.colors.muted, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section id="partners" style={{ backgroundColor: theme.colors.charcoal, padding: '60px 40px', borderTop: `1px solid ${theme.colors.border}`, borderBottom: `1px solid ${theme.colors.border}` }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
                    <h4 style={{ color: theme.colors.muted, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '30px', fontWeight: '700' }}>
                        Trusted by Industry Leaders / Our Partners
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '20px', opacity: 0.6 }}>
                        {corporateBrands.map((brand, i) => (
                            <span
                                key={i}
                                style={{ color: theme.colors.white, fontSize: '20px', fontWeight: '900', letterSpacing: '4px', transition: theme.transitions.smooth, cursor: 'default' }}
                                onMouseOver={(e) => e.target.style.color = theme.colors.copper}
                                onMouseOut={(e) => e.target.style.color = theme.colors.white}
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Services