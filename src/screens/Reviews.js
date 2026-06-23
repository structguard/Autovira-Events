import React from 'react';
import { motion } from 'framer-motion';
import { theme } from './theme';

export default function Reviews() {
  const reviewsList = [
    { 
      quote: "The corporate brand launch executed by the Autovira team was entirely jaw-dropping. The matt black industrial columns combined with modern copper framework lit up our venue perfectly.", 
      author: "Director of Brand Marketing", 
      company: "Vertex Digital",
      project: "Annual Flagship Keynote Launch",
      accentColor: theme.colors.copper
    },
    { 
      quote: "Flawless exhibition engineering operations. They safely managed over 5,000 corporate trade guests over a 72-hour window without a single logistical or technological misstep.", 
      author: "Lead Expo Operations", 
      company: "Metric Media",
      project: "Global Tech Expo Installation",
      accentColor: theme.colors.white
    },
     { 
      quote: "Flawless exhibition engineering operations. They safely managed over 5,000 corporate trade guests over a 72-hour window without a single logistical or technological misstep.", 
      author: "Lead Expo Operations", 
      company: "Metric Media",
      project: "Global Tech Expo Installation",
      accentColor: theme.colors.white
    }
  ];

  return (
    <section id="reviews" style={{ 
      backgroundColor: theme.colors.black, 
      padding: '120px 20px', // Extra breathing room top/bottom, safe margins left/right
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Subtle Luxury Line Grid Accent */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: '1200px', height: '100%',
        borderLeft: `1px solid ${theme.colors.border}`, borderRight: `1px solid ${theme.colors.border}`,
        pointerEvents: 'none', zIndex: 0, opacity: 0.3
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>
            // Verification & Feedback
          </span>
          <h2 style={{ color: theme.colors.white, fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: '900', margin: '15px 0 0 0', letterSpacing: '-1px' }}>
            Impeccable Endorsements
          </h2>
        </div>

        {/* Responsive Testimonial Card Grid Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '40px' 
        }}>
          {reviewsList.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: theme.colors.copper }}
              style={{ 
                backgroundColor: theme.colors.charcoal, 
                padding: '45px 40px', 
                borderLeft: `4px solid ${rev.accentColor}`,
                borderTop: `1px solid ${theme.colors.border}`,
                borderRight: `1px solid ${theme.colors.border}`,
                borderBottom: `1px solid ${theme.colors.border}`,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: theme.transitions.smooth
              }}
            >
              {/* Premium Editorial Large Quote Icon Backdrop */}
              <span style={{ 
                position: 'absolute', top: '15px', right: '30px', 
                fontSize: '90px', fontFamily: 'serif', fontWeight: '900',
                color: theme.colors.border, opacity: 0.4, pointerEvents: 'none',
                lineHeight: 1
              }}>
                “
              </span>

              {/* Verified Badge / Star Metric Accent */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '25px' }}>
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} style={{ color: theme.colors.copper, fontSize: '14px' }}>★</span>
                ))}
              </div>

              {/* Main Feedback Content */}
              <div style={{ flexGrow: 1 }}>
                <p style={{ 
                  color: theme.colors.white, 
                  fontSize: '15px', 
                  fontStyle: 'normal', 
                  lineHeight: '1.75', 
                  margin: '0 0 35px 0',
                  fontWeight: '400',
                  letterSpacing: '0.2px'
                }}>
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Meta Details Blocks */}
              <div style={{ borderTop: `1px solid ${theme.colors.border}`, paddingTop: '20px', marginTop: 'auto' }}>
                <h5 style={{ color: theme.colors.white, fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 4px 0' }}>
                  {rev.author}
                </h5>
                <p style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '600', margin: '0 0 2px 0' }}>
                  {rev.company}
                </p>
                <p style={{ color: theme.colors.muted, fontSize: '11px', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Project: {rev.project}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}