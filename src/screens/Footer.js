import React from 'react'
import { theme } from './theme';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: theme.colors.black, padding: '50px 20px',
            textAlign: 'center', borderTop: `1px solid ${theme.colors.border}`,
            fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: theme.colors.muted
        }}>
            <div style={{ color: theme.colors.white, fontWeight: '700', marginBottom: '10px' }}>
                NEXUS EVENTS © {new Date().getFullYear()}
            </div>
            <p style={{ margin: '0 0 20px 0', fontSize: '10px' }}>Premium Experience Spatial Engineering</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                <a href="#home" style={{ color: theme.colors.muted, textDecoration: 'none' }}>Privacy Policy</a>
                <a href="#home" style={{ color: theme.colors.muted, textDecoration: 'none' }}>Terms of Service</a>
            </div>
        </footer>
    )
}

export default Footer


