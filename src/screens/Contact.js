// import React, { useState, useEffect } from 'react'
// import { theme } from './theme';
// import { Mail, Phone, MapPin, Building2 } from 'lucide-react';

// const Contact = ({ scrollTo }) => {
//     // --- Window Width Responsive Tracker State ---
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

//     useEffect(() => {
//         const handleResize = () =>
//             setIsMobile(window.innerWidth < 992);

//         window.addEventListener('resize', handleResize);

//         return () =>
//             window.removeEventListener('resize', handleResize);
//     }, []);

//  const styles = {
//         section: {
//             backgroundColor: theme.colors.charcoal,
//             padding: isMobile ? '60px 20px' : '100px 40px',
//             fontFamily: 'system-ui, -apple-system, sans-serif'
//         },
//         container: {
//             maxWidth: '1280px',
//             margin: '0 auto'
//         },
//         splitLayout: {
//             display: 'flex',
//             flexDirection: isMobile ? 'column' : 'row',
//             gap: '40px',
//             marginTop: '40px',
//             alignItems: 'stretch', // Forces both columns to have equal height side-by-side
//             textAlign: 'left'
//         },
//         columnLeft: {
//             flex: 1,
//             width: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center'
//         },
//         columnRight: {
//             flex: 1,
//             width: '100%',
//             display: 'flex'
//         },
//         input: {
//             width: '100%',
//             backgroundColor: theme.colors.black,
//             border: `1px solid ${theme.colors.border}`,
//             padding: '14px',
//             fontSize: '14px',
//             color: theme.colors.white,
//             boxSizing: 'border-box',
//             outline: 'none',
//             transition: theme.transitions.smooth
//         },
//         formGrid: {
//             display: 'grid',
//             gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
//             gap: '20px'
//         },
//         mapCard: {
//             background: theme.colors.black,
//             border: `1px solid ${theme.colors.border}`,
//             padding: '24px',
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '20px',
//             borderRadius: '4px',
//             width: '100%', // Ensures card claims full 50% flex column space
//             boxSizing: 'border-box'
//         },
//         embeddedFrame: {
//             width: '100%',
//             flex: 1, // Dynamically scales map height to perfectly match form column height
//             minHeight: '280px',
//             border: 'none',
//             filter: 'grayscale(1) invert(0.92) contrast(1.2)', // Locks custom deep-dark mapping overlay
//             opacity: 0.85,
//             borderRadius: '2px'
//         },
//         infoRow: {
//             display: 'flex',
//             alignItems: 'flex-start',
//             gap: '12px',
//             fontSize: '14px',
//             color: theme.colors.muted,
//             lineHeight: '1.4'
//         }
//     };


//     return (
//         <section id="contact" style={styles.section}>
//             <div style={styles.container}>

//                 {/* Section Header */}
//                 <div style={{ textAlign: 'center' }}>
//                     <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
//                         // Connect With Us
//                     </span>
//                     <h2 style={{ color: theme.colors.white, fontSize: isMobile ? '28px' : '36px', margin: '10px 0 0 0' }}>
//                         Ready to Elevate Your Next Venture?
//                     </h2>
//                 </div>

//                 {/* Main Split Content Grid */}
//                 <div style={styles.splitLayout}>

//                     {/* LEFT PANEL: EQUAL 50% WIDTH INPUT INQUIRY FORM */}
//                     {/* LEFT PANEL: EQUAL 50% HEIGHT FORM INQUIRY DISTRIBUTOR */}
//                     <div style={{ ...styles.columnLeft, height: '100%' }}>
//                         <form
//                             style={{
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 justifyContent: 'space-between', // Pushes sections to top/bottom cleanly
//                                 height: '100%',
//                                 minHeight: isMobile ? 'auto' : '380px', // Matches base map height constraints
//                                 boxSizing: 'border-box'
//                             }}
//                             onSubmit={e => e.preventDefault()}
//                         >
//                             {/* Inner wrapper group for inputs to manage spacing cleanly */}
//                             <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
//                                 <div style={styles.formGrid}>
//                                     <input
//                                         type="text"
//                                         placeholder="Your Name"
//                                         style={styles.input}
//                                         onFocus={(e) => e.target.style.borderColor = theme.colors.copper}
//                                         onBlur={(e) => e.target.style.borderColor = theme.colors.border}
//                                     />
//                                     <input
//                                         type="email"
//                                         placeholder="Your Email"
//                                         style={styles.input}
//                                         onFocus={(e) => e.target.style.borderColor = theme.colors.copper}
//                                         onBlur={(e) => e.target.style.borderColor = theme.colors.border}
//                                     />
//                                 </div>

//                                 <textarea
//                                     placeholder="Tell us about your architectural event details..."
//                                     rows="17"
//                                     style={{ ...styles.input, resize: 'none',}}
//                                     onFocus={(e) => e.target.style.borderColor = theme.colors.copper}
//                                     onBlur={(e) => e.target.style.borderColor = theme.colors.border}
//                                 ></textarea>
//                             </div>

//                             {/* Button block sits neatly at the bottom with explicit top clearance margin */}
//                             <button
//                                 style={{
//                                     backgroundColor: theme.colors.copper, color: theme.colors.black, border: 'none',
//                                     padding: '16px', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase',
//                                     letterSpacing: '2px', cursor: 'pointer', transition: theme.transitions.smooth,
//                                     marginTop: '24px', width: '100%'
//                                 }}
//                                 onMouseOver={(e) => e.target.style.backgroundColor = theme.colors.white}
//                                 onMouseOut={(e) => e.target.style.backgroundColor = theme.colors.copper}
//                             >
//                                 Send Inquiry
//                             </button>
//                         </form>
//                     </div>


//                     {/* RIGHT PANEL: EQUAL 50% WIDTH MAP & TELEMETRY ADDRESS */}
//                     <div style={styles.columnRight}>
//                         <div style={styles.mapCard}>

//                             {/* Updated Google Maps Node Targeting the Pune Location Near Audi Showroom */}
//                             <iframe
//                                 title="Pune Corporate Telemetry Map"
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.8648827132868!2d73.7678943447211!3d18.548598456595663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bee9fafbc545%3A0x7ba7e43566bcaa7d!2sPlatinum%209!5e1!3m2!1sen!2sin!4v1781869414947!5m2!1sen!2sin"
//                                 style={{
//                                     width: '100%',      // Stretches the map horizontally to fill its column container.
//                                     flex: 1,            // Dynamically scales the height of the map to perfectly match the height of your contact form.
//                                     minHeight: '280px', // Prevents the map from getting too squished or small on mobile viewports.
//                                     border: 'none',     // Removes the default ugly gray browser border around iframes.

//                                     // ⬇️ Cyberpunk Dark Theme Magic ⬇️
//                                     filter: 'grayscale(1) invert(0.92) contrast(1.2)',
//                                     // Turns standard bright Google Maps into a custom dark style that matches your Matt Black theme.

//                                     opacity: 0.85,      // Softens the map's bright elements slightly so it looks integrated.
//                                     borderRadius: '2px' // Gives a tiny subtle curve to the corners to match modern UI aesthetics.
//                                 }}
//                                 allowFullScreen=""
//                                 loading="lazy"
//                                 referrerPolicy="no-referrer-when-downgrade"
//                             />

//                             {/* Direct Localized Address Block */}
//                             <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: `1px solid ${theme.colors.border}`, paddingTop: '16px' }}>
//                                 <div style={styles.infoRow}>
//                                     <MapPin size={18} color={theme.colors.copper} style={{ flexShrink: 0, marginTop: '2px' }} />
//                                     <span>No. 52/5, Sr, 1, Pashan - Sus Rd, near Audi Showroom, Baner, Pune, Maharashtra 411045</span>
//                                 </div>
//                                 <div style={styles.infoRow}>
//                                     <Building2 size={16} color={theme.colors.copper} style={{ flexShrink: 0 }} />
//                                     <span>Pune Operational Center </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     )

   
// }

// export default Contact;


import React from 'react';
import { theme } from './theme';
import { Mail, Phone, MapPin, Building2, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{
            backgroundColor: theme.colors.charcoal,
            padding: 'clamp(60px, 8vw, 120px) 20px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

                {/* --- HEADER BLOCK --- */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
                    <span style={{ 
                        color: theme.colors.copper, 
                        fontSize: '12px', 
                        fontWeight: '700', 
                        letterSpacing: '3px', 
                        textTransform: 'uppercase' 
                    }}>
                        // Connect With Us
                    </span>
                    <h2 style={{ 
                        color: theme.colors.white, 
                        fontSize: 'clamp(26px, 4vw, 42px)', 
                        fontWeight: '900', 
                        margin: '12px 0 0 0',
                        letterSpacing: '-1px'
                    }}>
                        Ready to Elevate Your Next Venture?
                    </h2>
                </div>

                {/* --- CORE CONTENT PARTITION --- */}
                {/* Automatically wraps from inline row layout to stacked column feed on smaller viewports */}
                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '40px', 
                    alignItems: 'stretch'
                }}>

                    {/* LEFT PANEL: 50% Flex Grow Input Inquiry System */}
                    <div style={{ 
                        flex: '1 1 500px', 
                        display: 'flex', 
                        flexDirection: 'column' 
                    }}>
                        <form 
                            onSubmit={e => e.preventDefault()}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                gap: '24px'
                            }}
                        >
                            {/* Responsive Inline Input Row */}
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                                gap: '20px' 
                            }}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    style={{
                                        backgroundColor: theme.colors.black,
                                        border: `1px solid ${theme.colors.border}`,
                                        padding: '16px',
                                        fontSize: '14px',
                                        color: theme.colors.white,
                                        outline: 'none',
                                        transition: theme.transitions.smooth
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = theme.colors.copper}
                                    onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    style={{
                                        backgroundColor: theme.colors.black,
                                        border: `1px solid ${theme.colors.border}`,
                                        padding: '16px',
                                        fontSize: '14px',
                                        color: theme.colors.white,
                                        outline: 'none',
                                        transition: theme.transitions.smooth
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = theme.colors.copper}
                                    onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                                />
                            </div>

                            <textarea
                                placeholder="Tell us about your architectural event details..."
                                rows="10"
                                style={{
                                    backgroundColor: theme.colors.black,
                                    border: `1px solid ${theme.colors.border}`,
                                    padding: '16px',
                                    fontSize: '14px',
                                    color: theme.colors.white,
                                    outline: 'none',
                                    resize: 'none',
                                    flexGrow: 1,
                                    minHeight: '200px',
                                    transition: theme.transitions.smooth
                                }}
                                onFocus={(e) => e.target.style.borderColor = theme.colors.copper}
                                onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                            ></textarea>

                            <button
                                type="submit"
                                style={{
                                    backgroundColor: theme.colors.copper,
                                    color: theme.colors.black,
                                    border: 'none',
                                    padding: '18px',
                                    fontSize: '13px',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    transition: theme.transitions.smooth
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = theme.colors.white;
                                    e.currentTarget.style.color = theme.colors.black;
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = theme.colors.copper;
                                    e.currentTarget.style.color = theme.colors.black;
                                }}
                            >
                                <span>Send Inquiry</span>
                                <Send size={14} />
                            </button>
                        </form>
                    </div>

                    {/* RIGHT PANEL: 50% Flex Grow Embedded Map & Interactive Comms Node */}
                    <div style={{ 
                        flex: '1 1 500px', 
                        display: 'flex' 
                    }}>
                        <div style={{
                            background: theme.colors.black,
                            border: `1px solid ${theme.colors.border}`,
                            padding: 'clamp(20px, 4vw, 32px)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            width: '100%'
                        }}>
                            {/* Grayscale Cyberpunk Styled Iframe Anchor */}
                            <iframe
                                title="Pune Corporate Telemetry Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.8648827132868!2d73.7678943447211!3d18.548598456595663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bee9fafbc545%3A0x7ba7e43566bcaa7d!2sPlatinum%209!5e1!3m2!1sen!2sin!4v1781869414947!5m2!1sen!2sin"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    minHeight: '300px',
                                    border: 'none',
                                    filter: 'grayscale(1) invert(0.92) contrast(1.2)',
                                    opacity: 0.85
                                }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            {/* Info Rows Container */}
                            <div style={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                gap: '16px', 
                                borderTop: `1px solid ${theme.colors.border}`, 
                                paddingTop: '24px' 
                            }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                                    <MapPin size={18} color={theme.colors.copper} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ color: theme.colors.muted, fontSize: '14px', lineHeight: '1.5' }}>
                                        No. 52/5, Sr, 1, Pashan - Sus Rd, near Audi Showroom, Baner, Pune, Maharashtra 411045
                                    </span>
                                </div>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                    <Building2 size={18} color={theme.colors.copper} style={{ flexShrink: 0 }} />
                                    <span style={{ color: theme.colors.white, fontSize: '14px', fontWeight: '600' }}>
                                        Pune Operational Center
                                    </span>
                                </div>

                                {/* Newly Provisioned High-Intent Fast Connect Links */}
                                <div style={{ 
                                    display: 'flex', 
                                    flexWrap: 'wrap', 
                                    gap: '15px 30px', 
                                    marginTop: '6px',
                                    fontSize: '13px'
                                }}>
                                    <a href="mailto:ops@agency.com" style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '8px', 
                                        color: theme.colors.copper, 
                                        textDecoration: 'none',
                                        fontWeight: '600'
                                    }}>
                                        <Mail size={14} /> ops@agency.com
                                    </a>
                                    <a href="tel:+912000000000" style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '8px', 
                                        color: theme.colors.copper, 
                                        textDecoration: 'none',
                                        fontWeight: '600'
                                    }}>
                                        <Phone size={14} /> +91 20 0000 0000
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;