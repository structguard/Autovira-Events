import React from 'react';
import { theme } from './theme';

export default function Header({ scrollTo }) {
  const sections = ['home', 'about', 'services', 'experience', 'partners', 'reviews', 'contact'];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
      backgroundColor: 'rgba(18, 18, 18, 0.95)', backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${theme.colors.border}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 40px', boxSizing: 'border-box'
    }}>
      <div style={{ fontSize: '24px', fontWeight: '800', tracking: '2px', color: theme.colors.copper }}>
        AUTOVIRA<span style={{ color: theme.colors.white }}>EVENTS</span>
      </div>
      <nav style={{ display: 'flex', gap: '30px' }}>
        {sections.map((item) => (
          <button 
            key={item} 
            onClick={() => scrollTo(item)}
            style={{
              background: 'none', border: 'none', color: theme.colors.white,
              textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px',
              cursor: 'pointer', transition: theme.transitions.smooth
            }}
            onMouseOver={(e) => e.target.style.color = theme.colors.copper}
            onMouseOut={(e) => e.target.style.color = theme.colors.white}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}
