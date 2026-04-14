import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CreditCard, LayoutDashboard, Send, RefreshCcw, Landmark, Wallet } from 'lucide-react';

const MainFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      id: 0,
      slug: 'mf-payin',
      tab: 'Pay-in Services',
      title: 'Seamless',
      titleHighlight: 'Pay-in',
      desc: 'Accept payments effortlessly using deep integrations with NSDL, Razorpay, and other trusted services with multi-channel support.',
      checkpoints: ['Intelligent Smart Routing', 'Highest success rates', 'Instant & T+0 settlements'],
      visual: (
        <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ padding: '1rem', background: 'white', borderRadius: '0px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '800' }}>Active Pay-in Partners</h4>
                <button className="btn-payu-pill-dark" style={{ padding: '0.3rem 0.8rem', fontSize: '0.65rem' }}>View Analytics &gt;</button>
             </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem', borderRadius: '12px', background: '#f8fbf9' }}>
                    <div style={{ width: '40px', height: '40px', background: 'white', border: '1px solid #eee', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#4f46e5' }}>
                        ₹
                    </div>
                    <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: '700' }}>NSDL Payments</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-main)' }}>Status: Active <span style={{ color: '#22c55e' }}>●</span></div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem', borderRadius: '12px', background: '#f8fbf9' }}>
                    <div style={{ width: '40px', height: '40px', background: 'white', border: '1px solid #eee', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#2563eb' }}>
                        ⚡
                    </div>
                    <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: '700' }}>Razorpay</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-main)' }}>Status: Active <span style={{ color: '#22c55e' }}>●</span></div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      slug: 'mf-bulk',
      tab: 'Bulk-Payments',
      title: 'Bulk',
      titleHighlight: 'Payments',
      desc: 'Disburse funds via NEFT, RTGS, IMPS or UPI - all routed intelligently for speed and success',
      checkpoints: ['Smart auto failure routing', 'Multi level approvals', '99.9% Uptime'],
      visual: (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div style={{ width: '120px', height: '120px', background: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <CheckCircle2 size={64} />
            </div>
        </div>
      )
    },
    {
      id: 2,
      slug: 'mf-recon',
      tab: 'Auto Reconciliation',
      title: 'Auto',
      titleHighlight: 'Reconciliation',
      desc: 'AI powered matching with 99% + accuracy so finance teams close books faster, with zero manual errors.',
      checkpoints: ['Instant discrepancy alerts', 'Millions of daily TXN\'s', '99% + accuracy'],
      visual: (
        <div style={{ display: 'flex', gap: '1rem', height: '100%', alignItems: 'center' }}>
            <div style={{ flex: 1, height: '180px', background: 'white', borderRadius: '12px', border: '2px solid var(--secondary)', padding: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '1rem', textAlign: 'center' }}>Transactions</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {[1, 0, 1, 1, 0].map((v, i) => (
                        <div key={i} style={{ height: '14px', background: '#f1f5f9', borderRadius: '4px', width: '100%', position: 'relative' }}>
                            <div style={{ position: 'absolute', right: '4px', top: '2px', color: v ? 'var(--secondary)' : 'red', fontSize: '8px' }}>{v ? '✓' : '✗'}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ flex: 1, height: '180px', background: 'white', borderRadius: '12px', border: '2px solid var(--secondary)', padding: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '1rem', textAlign: 'center' }}>Bank reconciliation</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {[1, 1, 1, 0, 0].map((v, i) => (
                        <div key={i} style={{ height: '14px', background: '#f1f5f9', borderRadius: '4px', width: '100%', position: 'relative' }}>
                            <div style={{ position: 'absolute', right: '4px', top: '2px', color: v ? 'var(--secondary)' : '#cbd5e1', fontSize: '8px' }}>{v ? '✓' : '☐'}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )
    },

    {
      id: 4,
      slug: 'mf-bills',
      tab: 'Bill Payments(BBPS)',
      title: 'Bill',
      titleHighlight: 'Payments',
      desc: 'Manage and pay all utility, insurance, and tax bills from one place with automated tracking.',
      checkpoints: ['100+ billers supported', 'Multi level approvals', 'Instant settlements'],
      visual: (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '0.8rem', background: 'white', borderRadius: '2px', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', background: '#fef3c7', color: '#d97706', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>⚡</div>
                    <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>Electricity Bill</div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>BESCOM - Karnataka</div>
                    </div>
                </div>
                <div style={{ fontWeight: '800' }}>₹ 4,250</div>
            </div>
            <div style={{ padding: '0.8rem', background: 'white', borderRadius: '2px', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🌐</div>
                    <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>Broadband</div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Airtel Broadband</div>
                    </div>
                </div>
                <div style={{ fontWeight: '800' }}>₹ 1,179</div>
            </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = features.findIndex(f => f.slug === entry.target.id);
          if (index !== -1) setActiveTab(index);
        }
      });
    }, { threshold: 0, rootMargin: '-50% 0px -50% 0px' });

    features.forEach(f => {
      const el = document.getElementById(f.slug);
      if (el) observer.current.observe(el);
    });

    return () => observer.current.disconnect();
  }, []);

  return (
    <section id="main-features" style={{ padding: '20px 0 0 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
             <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '900', letterSpacing: '-0.04em' }}
             >
                THE MODERN <span style={{ color: 'var(--primary)' }}>FINANCIAL STACK</span>
             </motion.h2>
             <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.8rem' }}
             >
                Everything you need to manage business finances in one unified platform.
             </motion.p>
        </div>

        <div style={{ 
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '300px 1fr',
            gap: isMobile ? '2rem' : '4rem',
            alignItems: 'start'
        }}>
          {/* Sticky Sidebar */}
          {!isMobile && (
            <div style={{ position: 'sticky', top: '150px', paddingBottom: '4rem' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {features.map((f, i) => (
                  <li key={f.id}>
                    <motion.a
                      href={`#${f.slug}`}
                      whileHover={{ x: 5, background: 'rgba(79, 70, 229, 0.08)' }}
                      style={{
                        display: 'block',
                        width: '100%',
                        textDecoration: 'none',
                        padding: '1.2rem 1rem',
                        borderRadius: '2px',
                        background: activeTab === i ? '#f5f7ff' : 'transparent',
                        transition: 'color 0.3s ease',
                        position: 'relative'
                      }}
                    >
                      {activeTab === i && (
                          <motion.div 
                              layoutId="active-marker"
                              style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '4px', background: 'var(--secondary)', borderRadius: '0 4px 4px 0' }}
                          />
                      )}
                      <motion.span 
                          animate={{ 
                            color: activeTab === i ? 'var(--secondary)' : 'rgba(0,0,0,0.4)',
                            scale: activeTab === i ? 1.05 : 1
                          }}
                          style={{ 
                            display: 'block',
                            fontSize: '1rem', 
                            fontWeight: '800', 
                            fontFamily: 'var(--font-heading)',
                            transition: { duration: 0.3 }
                          }}
                      >
                          {f.tab}
                      </motion.span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Scrolling Content */}
          <div style={{ paddingBottom: isMobile ? '0' : '20px' }}>
            {features.map((f, i) => (
              <motion.div 
                key={f.id} 
                id={f.slug} 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                    marginBottom: '0', 
                    minHeight: 'auto', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    padding: isMobile ? '2rem 1.5rem' : '3rem',
                    background: 'linear-gradient(145deg, #0a0f1c 0%, #111827 100%)',
                    borderRadius: '0px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderBottom: i !== features.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)',
                    boxShadow: 'none'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', gap: isMobile ? '1rem' : '1.5rem' }}>
                    <div>
                        <motion.h3 
                            className="paywize-heading" 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{ marginBottom: '1rem', fontSize: isMobile ? '1.6rem' : '2rem', color: 'white' }}
                        >
                            {f.title} <span style={{ color: 'var(--secondary)' }}>{f.titleHighlight}</span>
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', color: 'rgba(255,255,255,0.6)', marginBottom: isMobile ? '1.2rem' : '2rem', lineHeight: '1.6' }}
                        >
                            {f.desc}
                        </motion.p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {f.checkpoints.map((check, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', fontWeight: '600', color: 'white' }}>
                                    <CheckCircle2 size={16} color="var(--secondary)" />
                                    <span>{check}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ 
                        background: '#ffffff', 
                        borderRadius: '16px', 
                        padding: isMobile ? '1.5rem' : '2rem',
                        border: 'none',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: isMobile ? '240px' : 'auto'
                    }}>
                        <div style={{ transform: isMobile ? 'scale(0.85)' : 'scale(1)', transition: 'transform 0.3s ease' }}>
                            {f.visual}
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
