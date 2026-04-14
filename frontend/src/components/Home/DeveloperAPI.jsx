import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DeveloperAPI = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Open API', 'Webhook Intelligence', 'SDKs', 'curl Snippets'];

  const snippets = [
    // Open API
    (
      <>
        <div style={{ color: '#ff79c6' }}>const <span style={{ color: '#f8f8f2' }}>request = require(</span><span style={{ color: '#f1fa8c' }}>"request"</span><span style={{ color: '#f8f8f2' }}>);</span></div>
        <div style={{ color: '#ff79c6' }}>const <span style={{ color: '#f8f8f2' }}>options = {`{`}</span></div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>method: <span style={{ color: '#f1fa8c' }}>"POST"</span>,</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>url: <span style={{ color: '#f1fa8c' }}>"https://api.digiway.in/pg/orders"</span>,</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>headers: {`{`} <span style={{ color: '#f1fa8c' }}>"Content-Type"</span>: <span style={{ color: '#f1fa8c' }}>"application/json"</span> {`}`},</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>body: <span style={{ color: '#8be9fd' }}>JSON</span>.stringify({`{`}</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '4rem' }}>amount: <span style={{ color: '#bd93f9' }}>10000</span>,</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '4rem' }}>currency: <span style={{ color: '#f1fa8c' }}>"INR"</span>,</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '4rem' }}>receipt: <span style={{ color: '#f1fa8c' }}>"receipt#1"</span>,</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '4rem' }}>notes: {`{`} key1: <span style={{ color: '#f1fa8c' }}>"value3"</span>, key2: <span style={{ color: '#f1fa8c' }}>"value2"</span> {`}`}</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>{`}`} )</div>
        <div style={{ color: '#f8f8f2' }}>{`}`} ;</div>
      </>
    ),
    // Webhook Intelligence
    (
      <>
        <div style={{ color: '#ff79c6' }}>const <span style={{ color: '#f8f8f2' }}>crypto = require(</span><span style={{ color: '#f1fa8c' }}>"crypto"</span><span style={{ color: '#f8f8f2' }}>);</span></div>
        <div style={{ color: '#ff79c6' }}>app.<span style={{ color: '#50fa7b' }}>post</span><span style={{ color: '#f8f8f2' }}>(</span><span style={{ color: '#f1fa8c' }}>"/webhook"</span><span style={{ color: '#f8f8f2' }}>, (req, res) =&gt; {`{`}</span></div>
        <div style={{ color: '#ff79c6', paddingLeft: '2rem' }}>const <span style={{ color: '#f8f8f2' }}>secret = </span><span style={{ color: '#f1fa8c' }}>"whsec_xxx9982"</span><span style={{ color: '#f8f8f2' }}>;</span></div>
        <div style={{ color: '#ff79c6', paddingLeft: '2rem' }}>const <span style={{ color: '#f8f8f2' }}>sig = req.headers[</span><span style={{ color: '#f1fa8c' }}>"x-digiway-signature"</span><span style={{ color: '#f8f8f2' }}>];</span></div>
        <div style={{ paddingLeft: '2rem' }}>&nbsp;</div>
        <div style={{ color: '#ff79c6', paddingLeft: '2rem' }}>const <span style={{ color: '#f8f8f2' }}>hash = crypto.createHmac(</span><span style={{ color: '#f1fa8c' }}>"sha256"</span><span style={{ color: '#f8f8f2' }}>, secret)</span></div>
        <div style={{ color: '#f8f8f2', paddingLeft: '4rem' }}>.update(<span style={{ color: '#8be9fd' }}>JSON</span>.stringify(req.body))</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '4rem' }}>.digest(<span style={{ color: '#f1fa8c' }}>"hex"</span>);</div>
        <div style={{ paddingLeft: '2rem' }}>&nbsp;</div>
        <div style={{ color: '#ff79c6', paddingLeft: '2rem' }}>if <span style={{ color: '#f8f8f2' }}>(hash === sig) {`{`}</span></div>
        <div style={{ color: '#f8f8f2', paddingLeft: '4rem' }}>res.status(<span style={{ color: '#bd93f9' }}>200</span>).send(<span style={{ color: '#f1fa8c' }}>"OK"</span>);</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>{`}`}</div>
        <div style={{ color: '#f8f8f2' }}>{`}`});</div>
      </>
    ),
    // SDKs
    (
      <>
        <div style={{ color: '#ff79c6' }}>import <span style={{ color: '#f8f8f2' }}>{`{ Digiway }`}</span> from <span style={{ color: '#f1fa8c' }}>"@digiway/sdk"</span><span style={{ color: '#f8f8f2' }}>;</span></div>
        <div style={{ paddingLeft: '2rem' }}>&nbsp;</div>
        <div style={{ color: '#ff79c6' }}>const <span style={{ color: '#f8f8f2' }}>dw = </span><span style={{ color: '#ff79c6' }}>new</span> <span style={{ color: '#50fa7b' }}>Digiway</span><span style={{ color: '#f8f8f2' }}>(</span><span style={{ color: '#f1fa8c' }}>"pk_live_xxxxxxxxx"</span><span style={{ color: '#f8f8f2' }}>);</span></div>
        <div style={{ paddingLeft: '2rem' }}>&nbsp;</div>
        <div style={{ color: '#6272a4' }}>// Execute a high-volume payout seamlessly</div>
        <div style={{ color: '#ff79c6' }}>const <span style={{ color: '#f8f8f2' }}>payout = </span><span style={{ color: '#ff79c6' }}>await</span> <span style={{ color: '#f8f8f2' }}>dw.payouts.create({`{`}</span></div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>account: <span style={{ color: '#f1fa8c' }}>"acc_123456789"</span>,</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>amount: <span style={{ color: '#bd93f9' }}>50000</span>,</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>currency: <span style={{ color: '#f1fa8c' }}>"INR"</span>,</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>purpose: <span style={{ color: '#f1fa8c' }}>"vendor_settlement"</span></div>
        <div style={{ color: '#f8f8f2' }}>{`}`});</div>
        <div style={{ paddingLeft: '2rem' }}>&nbsp;</div>
        <div style={{ color: '#f8f8f2' }}>console.log(<span style={{ color: '#f1fa8c' }}>"Payout initiated:"</span>, payout.id);</div>
      </>
    ),
    // curl
    (
      <>
        <div style={{ color: '#50fa7b' }}>curl <span style={{ color: '#f8f8f2' }}>-X POST https://api.digiway.in/v1/customers \</span></div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>-H <span style={{ color: '#f1fa8c' }}>"Authorization: Bearer sk_live_xxxxxxxxxx"</span> \</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>-H <span style={{ color: '#f1fa8c' }}>"Content-Type: application/json"</span> \</div>
        <div style={{ color: '#f8f8f2', paddingLeft: '2rem' }}>-d <span style={{ color: '#f1fa8c' }}>'{`{`}</span></div>
        <div style={{ color: '#f1fa8c', paddingLeft: '4rem' }}>"name": "Acme Corp",</div>
        <div style={{ color: '#f1fa8c', paddingLeft: '4rem' }}>"email": "billing@acmecorp.com"</div>
        <div style={{ color: '#f1fa8c', paddingLeft: '2rem' }}>{`}'`}</div>
        <div style={{ paddingLeft: '2rem' }}>&nbsp;</div>
        <div style={{ color: '#6272a4' }}># Returns a unique Customer ID for future txns</div>
      </>
    )
  ];

  return (
    <section id="developer" style={{
      padding: '60px 0',
      background: '#4c3a91', // Exact Paywize Purple 
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Tech Grid Background (Simulating Video/Matrix) */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#4c3a91' }}>
        <motion.div
          animate={{ y: [0, -2000] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: 0,
            left: -100,
            right: -100,
            opacity: 0.15,
            fontFamily: 'monospace',
            fontSize: '1.2rem',
            fontWeight: '800',
            whiteSpace: 'pre-wrap',
            userSelect: 'none',
            pointerEvents: 'none',
            color: '#ffffff',
            lineHeight: '1.4',
            letterSpacing: '-0.02em',
            zIndex: 0
          }}
        >
          {`import { Digiway } from '@digiway/sdk';
const dw = new Digiway('pk_live_...');
export const processPayout = async (batchId) => {
  const result = await dw.payouts.execute({ id: batchId, speed: 'instant' });
};
router.post('/dw/webhook', async (req, res) => {
  const sig = req.headers['x-digiway-signature'];
  const event = dw.webhook.verify(req.rawBody, sig);
});
`.repeat(300)}
        </motion.div>

        {/* Secondary Reverse Layer */}
        <motion.div
          animate={{ y: [-2000, 0] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: 0,
            left: 100,
            right: -100,
            opacity: 0.08,
            fontFamily: 'monospace',
            fontSize: '1rem',
            fontWeight: '700',
            whiteSpace: 'pre-wrap',
            userSelect: 'none',
            pointerEvents: 'none',
            color: '#ffffff',
            lineHeight: '1.8'
          }}
        >
          {`// Transaction log stream
[2026-04-12] Settlement processing...
[2026-04-12] API Key authorized...
[2026-04-12] Handshake successful...
[2026-04-12] Payload delivery confirmed...
`.repeat(300)}
        </motion.div>

        {/* Paywize Style Radial Glow Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(15, 23, 42, 0.4) 100%)',
          zIndex: 1
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '900', marginBottom: '0.5rem', letterSpacing: '-0.04em', color: '#ffffff' }}
          >
            THE INFRASTRUCTURE THAT <br /> BUILDS WITH YOU.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.5' }}
          >
            APIs, SDKs, and developer tools designed for clarity, compliance, and scale, letting teams move fast without losing control.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ marginTop: '0.8rem', fontSize: '0.8rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Sandbox → Stage → Production in 24 Hours
          </motion.div>
        </div>

        {/* Action Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          {tabs.map((text, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                padding: '0.4rem 1.2rem',
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: activeTab === i ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {text}
            </button>
          ))}
        </div>

        {/* Code Snippet Box */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '4px',
            padding: '1.5rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.08)',
            fontFamily: 'monospace',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 2,
            minHeight: '380px'
          }}
        >
          <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div 
               key={activeTab}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.2 }}
               style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#d1d1e9' }}
            >
              {snippets[activeTab]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperAPI;
