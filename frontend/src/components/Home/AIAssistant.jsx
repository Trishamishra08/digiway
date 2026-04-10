import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare } from 'lucide-react';

const AIAssistant = () => {
  return (
    <section id="ai-finance" style={{ padding: '120px 0', background: 'var(--dark)', color: 'white', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '0.1em', fontSize: '0.9rem' }}>INTELLIGENT LAYER</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', margin: '1.5rem 0', lineHeight: '1.1', fontWeight: '800' }}>
              Meet Witty, your <br />
              <span style={{ color: 'var(--primary)' }}>AI Finance Assistant</span>
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6' }}>
              Unify banking data, cash visibility, and approvals in one intelligent finance layer. Ask questions in natural language and get real-time insights directly on WhatsApp.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                "Live balance refresh in 2 seconds",
                "Faster treasury decisions",
                "Secure API connectivity"
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle2 size={14} color="white" />
                  </div>
                  <span style={{ fontWeight: '500', fontSize: '1.1rem' }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div style={{ position: 'relative' }}>
             {/* Chat Mockup Animation */}
             <motion.div
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.3 }}
               style={{ 
                 background: 'rgba(255,255,255,0.05)', 
                 padding: '2.5rem', 
                 borderRadius: '40px', 
                 border: '1px solid rgba(255,255,255,0.1)',
                 position: 'relative',
                 zIndex: 2,
                 backdropFilter: 'blur(20px)'
               }}
             >
                <div style={{ background: 'var(--primary)', color: 'white', padding: '1rem 1.5rem', borderRadius: '20px 20px 0 20px', marginLeft: 'auto', width: 'fit-content', marginBottom: '2rem', fontSize: '1rem', fontWeight: '600', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                   Show me our live cash position
                </div>
                
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  style={{ background: 'white', color: 'var(--dark)', padding: '1.5rem', borderRadius: '20px 20px 20px 0', border: '1px solid #f1f5f9', display: 'flex', gap: '1rem', alignItems: 'center' }}
                >
                   <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800' }}>W</div>
                   <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: '600', lineHeight: '1.4' }}>
                     Your total cash position is ₹4.2 Cr. <br />
                     <span style={{ opacity: 0.6, fontSize: '0.8rem' }}>HDFC ₹1.8 Cr, ICICI ₹1.5 Cr...</span>
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
