import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare } from 'lucide-react';

const AIAssistant = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="ai-finance" style={{ padding: '60px 0', background: 'var(--dark)', color: 'white', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '3rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ color: 'var(--primary)', fontWeight: '800', letterSpacing: '0.15em', fontSize: '0.75rem', textTransform: 'uppercase' }}>INTELLIGENT LAYER</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', margin: '0.5rem 0 1rem 0', lineHeight: '1.2', fontWeight: '900', color: '#ffffff' }}>
              Meet Witty, your <br />
              <span style={{ color: 'var(--primary)' }}>AI Finance Assistant</span>
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              Unify banking data, cash visibility, and approvals in one intelligent finance layer. Ask questions in natural language and get real-time insights directly on WhatsApp.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                "Live balance refresh in 2 seconds",
                "Faster treasury decisions",
                "Secure API connectivity"
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ width: '18px', height: '18px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle2 size={12} color="white" />
                  </div>
                  <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div style={{ position: 'relative' }}>
             {/* Chat Mockup Animation */}
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  padding: '1.5rem', 
                  borderRadius: '4px', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  zIndex: 2,
                  backdropFilter: 'blur(20px)'
                }}
              >
                 <div style={{ background: 'var(--primary)', color: 'white', padding: '0.6rem 1rem', borderRadius: '4px 4px 0 4px', marginLeft: 'auto', width: 'fit-content', marginBottom: '1.2rem', fontSize: '0.85rem', fontWeight: '800', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
                    Show me our live cash position
                 </div>
                 
                 <motion.div 
                   initial={{ scale: 0.9, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.6 }}
                   style={{ background: 'white', color: 'var(--dark)', padding: '1rem', borderRadius: '4px 4px 4px 0', border: '1px solid #f1f5f9', display: 'flex', gap: '0.8rem', alignItems: 'center' }}
                 >
                    <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '4px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '900', fontSize: '0.85rem' }}>W</div>
                    <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '800', lineHeight: '1.4' }}>
                      Your total cash position is ₹4.2 Cr. <br />
                      <span style={{ opacity: 0.6, fontSize: '0.75rem', fontWeight: '500' }}>HDFC ₹1.8 Cr, ICICI ₹1.5 Cr...</span>
                    </p>
                 </motion.div>
              </motion.div>

             {/* Background shapes */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '50%', zIndex: 1 }}
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
