// import React from 'react';
// import { theme } from './theme';

// export default function Header({ scrollTo }) {
//   const sections = ['home', 'about', 'services', 'experience', 'partners', 'reviews', 'contact'];

//   return (
//     <header style={{
//       position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
//       backgroundColor: 'rgba(18, 18, 18, 0.95)', backdropFilter: 'blur(10px)',
//       borderBottom: `1px solid ${theme.colors.border}`,
//       display: 'flex', justifyContent: 'space-between', alignItems: 'center',
//       padding: '20px 40px', boxSizing: 'border-box'
//     }}>
//       <div style={{ fontSize: '24px', fontWeight: '800', tracking: '2px', color: theme.colors.copper }}>
//         AUTOVIRA<span style={{ color: theme.colors.white }}>EVENTS</span>
//       </div>
//       <nav style={{ display: 'flex', gap: '30px' }}>
//         {sections.map((item) => (
//           <button 
//             key={item} 
//             onClick={() => scrollTo(item)}
//             style={{
//               background: 'none', border: 'none', color: theme.colors.white,
//               textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px',
//               cursor: 'pointer', transition: theme.transitions.smooth
//             }}
//             onMouseOver={(e) => e.target.style.color = theme.colors.copper}
//             onMouseOut={(e) => e.target.style.color = theme.colors.white}
//           >
//             {item}
//           </button>
//         ))}
//       </nav>
//     </header>
//   );
// }

import React, { useState } from 'react';
import { theme } from './theme';
import { Menu, X } from 'lucide-react';

export default function Header({ scrollTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['home', 'about', 'services',  'reviews', 'contact'];

  const handleNavClick = (section) => {
    scrollTo(section);
    setIsOpen(false);
  };

  return (
    <>
      <header style={{
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(18, 18, 18, 0.95)', 
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${theme.colors.border}`,
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '0 24px', 
        boxSizing: 'border-box',
        height: '70px'
      }}>
        
        {/* --- BRAND LOGO --- */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{ 
            fontSize: '18px', 
            fontWeight: '900', 
            letterSpacing: '2px', 
            color: theme.colors.copper,
            cursor: 'pointer',
            userSelect: 'none',
            whiteSpace: 'nowrap'
          }}
        >
          AUTOVIRA<span style={{ color: theme.colors.white, fontWeight: '400' }}>EVENTS</span>
        </div>

        {/* --- DESKTOP NAVIGATION MATRIX (Managed instantly by CSS) --- */}
        <nav className="nav-desktop-matrix" style={{ 
          display: 'flex', 
          gap: '20px',
          alignItems: 'center'
        }}>
          {sections.map((item) => (
            <button 
              key={item} 
              onClick={() => handleNavClick(item)}
              style={{
                background: 'none', border: 'none', color: theme.colors.white,
                textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.5px',
                fontWeight: '600', cursor: 'pointer', transition: theme.transitions.smooth,
                padding: '6px 2px',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => e.target.style.color = theme.colors.copper}
              onMouseOut={(e) => e.target.style.color = theme.colors.white}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* --- MOBILE HAMBURGER ACTION TOGGLE (Managed instantly by CSS) --- */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Panel"
          style={{
            background: 'none', 
            border: 'none', 
            color: theme.colors.white, 
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px', 
            zIndex: 1100,
            boxSizing: 'border-box'
          }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* --- OVERLAY FULLSCREEN MOBILE DRAWER --- */}
      <div style={{
        position: 'fixed', 
        top: 0, 
        left: 0,
        right: 0,
        width: '100%', 
        height: '100vh',
        backgroundColor: theme.colors.black,
        zIndex: 999,
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        gap: '24px',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none',
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
        boxSizing: 'border-box'
      }}>
        {sections.map((item, idx) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            style={{
              background: 'none', border: 'none',
              color: theme.colors.white, textTransform: 'uppercase',
              fontSize: '20px', letterSpacing: '3px', fontWeight: '700',
              cursor: 'pointer', transition: theme.transitions.smooth,
              transform: isOpen ? 'scale(1)' : 'scale(0.9)',
              opacity: isOpen ? 1 : 0,
              transitionDelay: `${idx * 0.03}s`
            }}
            onMouseOver={(e) => e.target.style.color = theme.colors.copper}
            onMouseOut={(e) => e.target.style.color = theme.colors.white}
          >
            {item}
          </button>
        ))}
      </div>

      {/* --- INJECTED INLINE MEDIA RULES --- */}
      <style>{`
        /* Desktop Default States */
        .nav-mobile-toggle { display: none; }
        .nav-desktop-matrix { display: flex; }

        /* Instant Mobile Overrides (Prevents Layout Flashing) */
        @media (max-width: 991px) {
          .nav-desktop-matrix { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}