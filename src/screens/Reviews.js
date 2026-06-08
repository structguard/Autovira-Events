import React from 'react';
import { theme } from './theme';

export default function Reviews() {
  const reviewsList = [
    { quote: "The corporate brand launch executed by the Nexus team was entirely jaw-dropping. The matt black industrial columns combined with modern copper framework lit up our venue perfectly.", author: "Director of Brand Marketing, Vertex" },
    { quote: "Flawless exhibition engineering operations. They safely managed over 5,000 corporate trade guests over a 72-hour window without a single logistical or technological misstep.", author: "Lead Expo Operations, Metric" }
  ];

  return (
    <section id="reviews" style={{ backgroundColor: theme.colors.black, padding: '100px 40px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: theme.colors.copper, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>// Verification & Feedback</span>
          <h2 style={{ color: theme.colors.white, fontSize: '36px', margin: '10px 0 0 0' }}>Client Testimonials</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {reviewsList.map((rev, i) => (
            <div key={i} style={{ backgroundColor: theme.colors.charcoal, padding: '40px', borderLeft: `2px solid ${i === 0 ? theme.colors.copper : theme.colors.white}` }}>
              <p style={{ color: theme.colors.muted, fontSize: '14px', fontStyle: 'italic', lineHeight: '1.7', margin: '0 0 20px 0' }}>"{rev.quote}"</p>
              <h5 style={{ color: theme.colors.white, fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>— {rev.author}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
