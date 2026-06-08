import React from 'react'
import { theme } from './theme';


const Contact = () => {
    const inputStyle = {
        width: '100%', backgroundColor: theme.colors.black, border: `1px solid ${theme.colors.border}`,
        padding: '14px', fontSize: '14px', color: theme.colors.white, boxSizing: 'border-box',
        outline: 'none', transition: theme.transitions.smooth
    };
    return (
        <section id="contact" style={{ backgroundColor: theme.colors.charcoal, padding: '100px 40px' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// Connect With Us</span>
                <h2 style={{ color: theme.colors.white, fontSize: '36px', margin: '10px 0 40px 0' }}>Ready to Elevate Your Next Venture?</h2>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }} onSubmit={e => e.preventDefault()}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <input type="text" placeholder="Your Name" style={inputStyle} onFocus={(e) => e.target.style.borderColor = theme.colors.copper} onBlur={(e) => e.target.style.borderColor = theme.colors.border} />
                        <input type="email" placeholder="Your Email" style={inputStyle} onFocus={(e) => e.target.style.borderColor = theme.colors.copper} onBlur={(e) => e.target.style.borderColor = theme.colors.border} />
                    </div>
                    <textarea placeholder="Tell us about your architectural event details..." rows="5" style={inputStyle} onFocus={(e) => e.target.style.borderColor = theme.colors.copper} onBlur={(e) => e.target.style.borderColor = theme.colors.border}></textarea>
                    <button style={{
                        backgroundColor: theme.colors.copper, color: theme.colors.black, border: 'none',
                        padding: '16px', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase',
                        letterSpacing: '2px', cursor: 'pointer', transition: theme.transitions.smooth
                    }}
                        onMouseOver={(e) => e.target.style.backgroundColor = theme.colors.white}
                        onMouseOut={(e) => e.target.style.backgroundColor = theme.colors.copper}
                    >
                        Send Inquiry
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact

