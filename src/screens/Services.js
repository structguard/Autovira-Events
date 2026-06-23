// import React from 'react'
// import { motion } from 'framer-motion';
// import { theme } from './theme';

// const Services = ({ scrollTo }) => {
//     const cards = [
//         { title: "Exhibitions", desc: "Custom pavilions, premium trade expo architecture, global installations, and spatial crowd dynamic designs.", border: theme.colors.copper },
//         { title: "Brand Activities", desc: "High-impact activation campaigns, immersive pop-up experiences, strategic PR operations, and experimental retail spaces.", border: theme.colors.white },
//         { title: "Bespoke Services", desc: "Advanced architectural audio/visual production, structural concert lighting rigs, logistics tracking, and talent booking.", border: theme.colors.copper }
//     ];
//     const stats = [
//         { num: "150+", label: "Exhibitions Hosted", color: theme.colors.copper },
//         { num: "420+", label: "Brand Activations", color: theme.colors.white },
//         { num: "99%", label: "Success Rating", color: theme.colors.copper },
//         { num: "25K+", label: "Attendees Engaged", color: theme.colors.white }
//     ];
//     const corporateBrands = ['ALPHA CORP', 'VERTEX DIGITAL', 'METRIC MEDIA', 'ROSEWOOD IND', 'KINETIC LABS'];
//     return (
//         <>
//             <section id="services" style={{ backgroundColor: theme.colors.charcoal, padding: '100px 40px' }}>
//                 <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
//                     <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//                         <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// Our Expertise Blueprint</span>
//                         <h2 style={{ color: theme.colors.white, fontSize: '36px', margin: '10px 0 0 0' }}>What We Do & Excel At</h2>
//                     </div>

//                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
//                         {cards.map((card, idx) => (
//                             <motion.div
//                                 key={idx}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                                 whileHover={{ y: -10 }}
//                                 style={{
//                                     backgroundColor: theme.colors.black, padding: '40px',
//                                     borderTop: `4px solid ${card.border}`, transition: 'all 0.3s ease'
//                                 }}
//                             >
//                                 <h3 style={{ color: theme.colors.white, fontSize: '22px', margin: '0 0 15px 0' }}>{card.title}</h3>
//                                 <p style={{ color: theme.colors.muted, fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{card.desc}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section id="experience" style={{ backgroundColor: theme.colors.black, padding: '80px 40px' }}>
//                 <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '40px', textAlign: 'center' }}>
//                     {stats.map((stat, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: idx * 0.1 }}
//                         >
//                             <h3 style={{ fontSize: '48px', fontWeight: '900', color: stat.color, margin: '0 0 10px 0' }}>{stat.num}</h3>
//                             <p style={{ color: theme.colors.muted, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>{stat.label}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             <section id="partners" style={{ backgroundColor: theme.colors.charcoal, padding: '60px 40px', borderTop: `1px solid ${theme.colors.border}`, borderBottom: `1px solid ${theme.colors.border}` }}>
//                 <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
//                     <h4 style={{ color: theme.colors.muted, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '30px', fontWeight: '700' }}>
//                         Trusted by Industry Leaders / Our Partners
//                     </h4>
//                     <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '20px', opacity: 0.6 }}>
//                         {corporateBrands.map((brand, i) => (
//                             <span
//                                 key={i}
//                                 style={{ color: theme.colors.white, fontSize: '20px', fontWeight: '900', letterSpacing: '4px', transition: theme.transitions.smooth, cursor: 'default' }}
//                                 onMouseOver={(e) => e.target.style.color = theme.colors.copper}
//                                 onMouseOut={(e) => e.target.style.color = theme.colors.white}
//                             >
//                                 {brand}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }

// export default Services


import React from 'react'
import { motion } from 'framer-motion';
import { theme } from './theme';

const Services = () => {
    const cards = [
        {
            title: "Exhibitions",
            desc: "Custom pavilions, premium trade expo architecture, global installations, and spatial crowd dynamic designs.",
            border: theme.colors.copper,
            img: "https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: "Brand Activities",
            desc: "High-impact activation campaigns, immersive pop-up experiences, strategic PR operations, and experimental retail spaces.",
            border: theme.colors.white,
            img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: "Bespoke Services",
            desc: "Advanced architectural audio/visual production, structural concert lighting rigs, logistics tracking, and talent booking.",
            border: theme.colors.copper,
            img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop"
        }
    ];

    const stats = [
        { num: "150+", label: "Exhibitions Hosted", color: theme.colors.copper },
        { num: "420+", label: "Brand Activations", color: theme.colors.white },
        { num: "99%", label: "Success Rating", color: theme.colors.copper },
        { num: "25K+", label: "Attendees Engaged", color: theme.colors.white }
    ];

    const corporateBrands = ['ALPHA CORP', 'VERTEX DIGITAL', 'METRIC MEDIA', 'ROSEWOOD IND', 'KINETIC LABS', 'ALPHA CORP', 'VERTEX DIGITAL', 'METRIC MEDIA'];

    return (
        <>
            {/* --- SECTION 1: SERVICES CARDS GRID WITH MASKED IMAGES --- */}
            {/* <section id="services" style={{ backgroundColor: theme.colors.charcoal, padding: '100px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// Our Expertise Blueprint</span>
                        <h2 style={{ color: theme.colors.white, fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', margin: '10px 0 0 0', letterSpacing: '-1px' }}>What We Do & Excel At</h2>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                        justifyContent: 'center'
                    }}>
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                whileHover={{ y: -12 }}
                                style={{
                                    flex: '1 1 320px',
                                    maxWidth: '380px',
                                    backgroundColor: theme.colors.black,
                                    padding: '45px 35px',
                                    borderTop: `4px solid ${card.border}`,
                                    borderRight: `1px solid ${theme.colors.border}`,
                                    borderBottom: `1px solid ${theme.colors.border}`,
                                    borderLeft: `1px solid ${theme.colors.border}`,
                                    transition: theme.transitions.smooth,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '340px'
                                }}
                                onMouseEnter={(e) => {
                                    const imgEl = e.currentTarget.querySelector('.card-bg-img');
                                    if (imgEl) { imgEl.style.transform = 'scale(1.08)'; imgEl.style.opacity = '0.18'; }
                                }}
                                onMouseLeave={(e) => {
                                    const imgEl = e.currentTarget.querySelector('.card-bg-img');
                                    if (imgEl) { imgEl.style.transform = 'scale(1)'; imgEl.style.opacity = '0.05'; }
                                }}
                            >
                                {/* Immersive Card Background Image Blend */}
                                {/* <div
                                    className="card-bg-img"
                                    style={{
                                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                        backgroundImage: `url(${card.img})`, backgroundSize: 'cover', backgroundPosition: 'center',
                                        opacity: 0.05, zIndex: 1, transition: theme.transitions.smooth, pointerEvents: 'none'
                                    }}
                                />

                                <div style={{ zIndex: 2, position: 'relative' }}>
                                    <h3 style={{ color: theme.colors.white, fontSize: '24px', fontWeight: '800', margin: '0 0 20px 0' }}>{card.title}</h3>
                                    <p style={{ color: theme.colors.muted, fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{card.desc}</p>
                                </div>

                                <div style={{
                                    zIndex: 2, position: 'relative', marginTop: '30px',
                                    color: card.border, fontSize: '12px', fontWeight: '700',
                                    letterSpacing: '1px', textTransform: 'uppercase'
                                }}>
                                    View Blueprint Engine →
                                </div>
                            </motion.div>
                        ))}
                    </div>
            //     </div> 
            // </section> */}

            <section id="services" style={{ backgroundColor: theme.colors.charcoal, padding: '120px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
                            // Our Expertise Blueprint
                        </span>
                        <h2 style={{ color: theme.colors.white, fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: '900', margin: '15px 0 0 0', letterSpacing: '-1px' }}>
                            What We Do & Excel At
                        </h2>
                    </div>

                    {/* Responsive Grid System: Shifts gracefully from 3 to 1 column dynamically */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px'
                    }}>
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                style={{
                                    backgroundColor: theme.colors.black,
                                    borderTop: `4px solid ${card.border}`,
                                    borderLeft: `1px solid ${theme.colors.border}`,
                                    borderRight: `1px solid ${theme.colors.border}`,
                                    borderBottom: `1px solid ${theme.colors.border}`,
                                    transition: theme.transitions.smooth,
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'
                                }}
                            >
                                {/* Embedded Context Image Block */}
                                <div style={{
                                    width: '100%',
                                    height: '200px',
                                    backgroundImage: `url(${card.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: 'brightness(75%) contrast(110%)'
                                }} />

                                {/* Card Body Details */}
                                <div style={{ padding: '35px 30px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <h3 style={{ color: theme.colors.white, fontSize: '22px', fontWeight: '800', margin: '0 0 15px 0' }}>
                                            {card.title}
                                        </h3>
                                        <p style={{ color: theme.colors.muted, fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                                            {card.desc}
                                        </p>
                                    </div>

                                    {/* Structural Premium CTA Anchor Link */}
                                    <div style={{
                                        marginTop: '30px',
                                        color: theme.colors.copper,
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        Initialize Blueprint →
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: METRICS & AUTHORITY SCALING COUNTERS --- */}
            <section id="experience" style={{ backgroundColor: theme.colors.black, padding: '80px 20px' }}>
                <div style={{
                    maxWidth: '1200px', margin: '0 auto',
                    display: 'flex', flexWrap: 'wrap',
                    gap: '40px', justifyContent: 'space-around', textAlign: 'center'
                }}>
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            style={{ flex: '1 1 200px' }}
                        >
                            <h3 style={{ fontSize: 'clamp(38px, 5vw, 54px)', fontWeight: '900', color: stat.color, margin: '0 0 8px 0', fontFamily: 'monospace' }}>{stat.num}</h3>
                            <p style={{ color: theme.colors.muted, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', margin: 0, fontWeight: '600' }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- SECTION 3: INFINITE LOGO MARQUEE TICKER --- */}
            <section id="partners" style={{
                backgroundColor: theme.colors.charcoal,
                padding: '50px 0',
                borderTop: `1px solid ${theme.colors.border}`,
                borderBottom: `1px solid ${theme.colors.border}`,
                overflow: 'hidden' // Completely hides out of bound scrolling logos
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
                    <h4 style={{ color: theme.colors.muted, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '35px', fontWeight: '700' }}>
                        Trusted by Industry Leaders / Our Corporate Network
                    </h4>
                </div>

                {/* Infinite Moving Wrapper using Framer Motion */}
                <div style={{ display: 'flex', width: '100%', position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
                        style={{ display: 'flex', gap: '60px', whitespace: 'nowrap', paddingRight: '60px' }}
                    >
                        {corporateBrands.map((brand, i) => (
                            <span
                                key={i}
                                style={{
                                    color: theme.colors.white, fontSize: '22px', fontWeight: '900',
                                    letterSpacing: '5px', transition: 'color 0.3s ease', cursor: 'default',
                                    whiteSpace: 'nowrap', display: 'inline-block', opacity: 0.45
                                }}
                                onMouseOver={(e) => { e.target.style.color = theme.colors.copper; e.target.style.opacity = '1'; }}
                                onMouseOut={(e) => { e.target.style.color = theme.colors.white; e.target.style.opacity = '0.45'; }}
                            >
                                {brand}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Services;