import { useEffect, useRef } from "react";

/* ─── shared style tokens ─── */
const T = {
  tag: {
    fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em',
    textTransform: 'uppercase' as const, padding: '0.3rem 0.65rem', borderRadius: '3px',
    background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text-muted)',
  } as React.CSSProperties,
  tagH: {
    fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em',
    textTransform: 'uppercase' as const, padding: '0.3rem 0.65rem', borderRadius: '3px',
    border: '1px solid var(--accent-border)', color: 'var(--accent)', background: 'var(--accent-dim)',
  } as React.CSSProperties,
  divider: { height: '1px', background: 'var(--border)', maxWidth: '1100px', margin: '0 auto' } as React.CSSProperties,
};

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>{num}</span>
      <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>{title}</h2>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)', minWidth: '20px' }} />
    </div>
  );
}

export default function Home() {
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    fadeRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ref = (el: HTMLElement | null) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  const sectionStyle: React.CSSProperties = {
    padding: 'clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 2.5rem)',
    maxWidth: '1100px', margin: '0 auto',
  };

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)' }}>

      {/* ── HERO ── */}
      <div id="hero" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: 'clamp(5rem, 12vw, 7rem) clamp(1.25rem, 5vw, 2.5rem) clamp(3rem, 6vw, 4rem)',
        maxWidth: '1100px', margin: '0 auto',
      }}>
        <div style={{ maxWidth: '820px', width: '100%' }}>

          <div className="hero-tag" style={{
            display: 'inline-flex', alignItems: 'center',
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: '1.5rem',
          }}>Available for Full-time Roles</div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 8vw, 5.5rem)', fontWeight: 800,
            lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '0.5rem',
          }}>
            Md Enayat Ansari<br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
              Full Stack Developer
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)', color: 'var(--text-muted)',
            maxWidth: '560px', margin: '1.5rem 0 2rem', lineHeight: 1.7,
          }}>
            M.Tech CS graduate specializing in MERN stack and real-time distributed systems.
            I build scalable, production-ready applications — from live chat engines to billing platforms —
            with a focus on performance and reliability.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Get in Touch ↗', href: 'mailto:enayatansari33@gmail.com', primary: true },
              { label: 'View Projects', href: '#projects', primary: false },
              { label: 'Download Resume', href: 'https://drive.google.com/file/d/1Nx_xw8lE__-qszxkLPbB8wFByESWiNVJ/view?usp=drive_link', primary: false },
            ].map(btn => (
              <a key={btn.label} href={btn.href} target={btn.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 500,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '0.8rem 1.4rem', borderRadius: '4px', textDecoration: 'none', transition: 'all 0.2s',
                  ...(btn.primary
                    ? { background: 'var(--accent)', color: '#0a0a0a' }
                    : { background: 'transparent', color: 'var(--text)', border: '1px solid var(--border-hover)' }),
                }}>
                {btn.label}
              </a>
            ))}
          </div>

          <div className="hero-stats" style={{
            display: 'flex', gap: '2.5rem', marginTop: '3.5rem',
            paddingTop: '2rem', borderTop: '1px solid var(--border)',
          }}>
            {[
              { num: '6+', label: 'Deployed Projects' },
              { num: '1', label: 'Freelance Client' },
              { num: 'M.Tech', label: 'CS — RGPV' },
              { num: '2+', label: 'Years Building' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
                  {s.num.replace('+', '')}<span style={{ color: 'var(--accent)' }}>{s.num.includes('+') ? '+' : ''}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={T.divider} />

      {/* ── EXPERIENCE ── */}
      <section ref={ref} id="experience" className="fade-in" style={sectionStyle}>
        <SectionHeader num="01" title="Experience" />

        {/* Freelance card */}
        <div style={{
          background: 'var(--surface)', border: '1px solid rgba(0,229,160,0.25)',
          borderRadius: '8px', padding: 'clamp(1.25rem, 4vw, 2.5rem)', marginBottom: '1.5rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', fontWeight: 600 }}>Freelance Full Stack Developer</div>
              <div style={{ color: 'var(--accent)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Independent Client — Retail Business</div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>Jan 2025 — Mar 2025</div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            Contracted to build a production-grade, GST-compliant billing and invoice management system. Delivered a complete MERN stack application with multi-user support and real-time reporting.
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '1rem' }}>
            {[
              'Engineered GST invoice generation with automated tax calculation (CGST/SGST/IGST), reducing billing errors to near-zero',
              'Built role-based access control (RBAC) with JWT authentication and refresh-token rotation',
              'Real-time inventory tracking and low-stock alerts via WebSocket events',
              'Monthly sales analytics dashboard with revenue summaries and exportable reports',
              'Deployed on Vercel, Railway, and MongoDB Atlas — achieving 99.9% uptime',
            ].map((item, i) => (
              <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, paddingLeft: '1.25rem', position: 'relative', marginBottom: '0.3rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>{item}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'GST Compliance', 'Vercel', 'Railway'].map(t => (
              <span key={t} style={T.tag}>{t}</span>
            ))}
          </div>
        </div>

        {/* Thesis card */}
        <div ref={ref} className="thesis-card fade-in" style={{
          background: 'linear-gradient(135deg, var(--surface) 0%, #0f1f18 100%)',
          border: '1px solid var(--accent-border)', borderRadius: '12px',
          padding: 'clamp(1.5rem, 5vw, 3rem)',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-dim)',
            border: '1px solid var(--accent-border)', padding: '0.35rem 0.75rem', borderRadius: '3px', marginBottom: '1.5rem',
          }}>⬡ M.Tech Research — RGPV University</div>

          <h3 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 2.1rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '1rem' }}>
            Latency vs Throughput in Horizontally Scaled Real-Time Communication Architectures
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            Comparative analysis of Redis Pub/Sub against direct WebSocket broadcasting in multi-node Node.js clusters. Benchmarked message latency, throughput, and failure modes under concurrency stress.
          </p>

          <div className="thesis-metrics" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', padding: '1.5rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: '1.5rem' }}>
            {[
              { val: '~40%', label: 'Latency Reduction' },
              { val: '10K+', label: 'Concurrent Connections' },
              { val: '3', label: 'Cluster Configs Tested' },
            ].map(m => (
              <div key={m.label}>
                <div style={{ fontSize: 'clamp(1.3rem, 4vw, 1.6rem)', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.02em' }}>{m.val}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', marginTop: '0.2rem' }}>{m.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['Redis Pub/Sub', 'WebSockets'].map(t => <span key={t} style={T.tagH}>{t}</span>)}
            {['Node.js Clustering', 'Socket.IO', 'Docker', 'System Design', 'Distributed Systems'].map(t => <span key={t} style={T.tag}>{t}</span>)}
          </div>
        </div>
      </section>

      <div style={T.divider} />

      {/* ── PROJECTS ── */}
      <section ref={ref} id="projects" className="fade-in" style={sectionStyle}>
        <SectionHeader num="02" title="Projects" />

        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {[
            {
              featured: true,
              category: 'Real-Time Systems / Distributed',
              title: 'QuickChat — Scalable Chat Engine',
              desc: 'Production-grade real-time chat with Redis Pub/Sub synchronizing message broadcasting across multiple Node.js instances. Supports persistent chat history, rooms, and real-time user presence.',
              tags: [{ l: 'Redis Pub/Sub', h: true }, { l: 'Socket.IO', h: true }, { l: 'MongoDB' }, { l: 'Express.js' }, { l: 'React.js' }, { l: 'Docker' }],
              links: [{ label: '↗ Live Demo', href: 'https://quick-chat-eight-eta.vercel.app/', live: true }, { label: '⌥ GitHub', href: 'https://github.com/enayat-enoo/Quickchat', live: true }],
            },
            {
              featured: true,
              category: 'Backend Performance / Data Systems',
              title: 'Crypto Price Monitor',
              desc: 'High-frequency real-time monitoring system tracking live cryptocurrency prices. Optimized throughput with PostgreSQL indexing and a Redis caching layer — reducing query latency by ~60%.',
              tags: [{ l: 'PostgreSQL', h: true }, { l: 'Redis Cache', h: true }, { l: 'TypeScript' }, { l: 'Node.js' }, { l: 'WebSockets' }],
              links: [{ label: '↗ Live Demo', href: 'https://crypto-monitor-dun.vercel.app/', live: true },{ label: '⌥ GitHub', href: 'https://github.com/enayat-enoo/crypto-price-monitor', live: true }],
            },
            {
              featured: false,
              category: 'Real-Time / Peer-to-Peer',
              title: 'WebRTC Video Calling App',
              desc: 'Browser-native P2P video calling with ICE candidate exchange, STUN/TURN negotiation, and fallback reconnection. Supports screen sharing and audio/video toggle mid-call.',
              tags: [{ l: 'WebRTC', h: true }, { l: 'Socket.IO' }, { l: 'Node.js' }, { l: 'React.js' }],
              links: [{ label: '⌥ GitHub', href: 'https://github.com/enayat-enoo', live: false }],
            },
            {
              featured: false,
              category: 'Full Stack Application',
              title: 'BookIt — Booking Platform',
              desc: 'Full-stack booking system with availability engine, conflict detection, JWT auth, slot management, and Redux-powered multi-step booking flows.',
              tags: [{ l: 'React.js' }, { l: 'Redux' }, { l: 'Express.js' }, { l: 'MongoDB' }, { l: 'JWT' }],
              links: [{ label: '↗ Live Demo', href: 'https://book-it-beryl.vercel.app/', live: true }, { label: '⌥ GitHub', href: 'https://github.com/enayat-enoo/BookIt', live: false }],
            },
            {
              featured: false,
              category: 'Frontend Architecture',
              title: 'Ecom-Cart — E-Commerce Frontend',
              desc: 'E-commerce frontend with persistent cart, multi-filter product discovery, optimistic UI updates, and lazy-loaded images. State managed via Zustand.',
              tags: [{ l: 'React.js' }, { l: 'Zustand' }, { l: 'Tailwind CSS' }, { l: 'REST API' }],
              links: [{ label: '⌥ GitHub', href: 'https://github.com/enayat-enoo/E-com-cart', live: false }],
            },
          ].map(p => (
            <div key={p.title} className={`project-card${p.featured ? ' featured' : ''}`} style={{
              background: 'var(--surface)',
              border: `1px solid ${p.featured ? 'rgba(0,229,160,0.2)' : 'var(--border)'}`,
              borderRadius: '8px', padding: 'clamp(1.25rem, 4vw, 2rem)', transition: 'all 0.25s',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                {p.category}
              </div>
              <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', fontWeight: 700, marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {p.tags.map(t => <span key={t.l} style={t.h ? T.tagH : T.tag}>{t.l}</span>)}
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {p.links.map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center',
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em',
                    textTransform: 'uppercase', textDecoration: 'none', padding: '0.4rem 0.85rem',
                    borderRadius: '3px', transition: 'all 0.2s',
                    ...(link.live
                      ? { background: 'var(--accent)', color: '#0a0a0a' }
                      : { border: '1px solid var(--border-hover)', color: 'var(--text-muted)' }),
                  }}>{link.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={T.divider} />

      {/* ── SKILLS ── */}
      <section ref={ref} id="skills" className="fade-in" style={sectionStyle}>
        <SectionHeader num="03" title="Skills" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {[
            { title: 'Frontend', skills: [{ l: 'React.js', h: true }, { l: 'JavaScript (ES6+)' }, { l: 'Redux / Zustand' }, { l: 'Tailwind CSS' }, { l: 'HTML5 / CSS3' }, { l: 'REST APIs' }] },
            { title: 'Backend', skills: [{ l: 'Node.js', h: true }, { l: 'Express.js', h: true }, { l: 'Socket.IO' }, { l: 'WebSockets' }, { l: 'WebRTC' }, { l: 'JWT Auth' }] },
            { title: 'Databases & Caching', skills: [{ l: 'MongoDB', h: true }, { l: 'Redis Pub/Sub', h: true }, { l: 'PostgreSQL' }, { l: 'Mongoose' }, { l: 'Redis Cache' }] },
            { title: 'DevOps & Tools', skills: [{ l: 'Docker', h: true }, { l: 'Vercel' }, { l: 'Railway' }, { l: 'MongoDB Atlas' }, { l: 'Git / GitHub' }, { l: 'Linux CLI' }] },
            { title: 'Architecture', skills: [{ l: 'Distributed Systems', h: true }, { l: 'System Design' }, { l: 'Horizontal Scaling' }, { l: 'Pub/Sub Patterns' }, { l: 'RBAC' }, { l: 'MVC' }] },
            { title: 'Education', skills: [{ l: 'M.Tech — CS', h: true }, { l: 'RGPV University, Bhopal' }, { l: 'DSA' }, { l: 'DBMS' }, { l: 'OS Concepts' }] },
          ].map(group => (
            <div key={group.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
                {group.title}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {group.skills.map(s => (
                  <span key={s.l} style={s.h ? T.tagH : T.tag}>{s.l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={T.divider} />

      {/* ── CONTACT ── */}
      <section ref={ref} id="contact" className="fade-in" style={sectionStyle}>
        <SectionHeader num="04" title="Contact" />

        <div className="contact-grid" style={{
          background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px',
          padding: 'clamp(1.5rem, 5vw, 3.5rem)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center',
        }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Let's build<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent)' }}>something real.</em>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.75rem', fontSize: '0.95rem' }}>
              Actively looking for full-time Full Stack Developer roles — MERN stack, backend-heavy, or real-time systems. Based in Bhopal, open to Noida, Pune, Bengaluru, or remote.
            </p>
            <a href="mailto:enayatansari33@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--accent)', color: '#0a0a0a',
              fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '0.8rem 1.4rem', borderRadius: '4px', textDecoration: 'none',
              wordBreak: 'break-all',
            }}>enayatansari33@gmail.com ↗</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { icon: '✉', label: 'enayatansari33@gmail.com', href: 'mailto:enayatansari33@gmail.com' },
              { icon: '⌥', label: 'github.com/enayat-enoo', href: 'https://github.com/enayat-enoo' },
              { icon: 'in', label: 'linkedin.com/in/md-enayat-ansari', href: 'https://www.linkedin.com/in/md-enayat-ansari-856667228' },
              { icon: '↓', label: 'Download Resume (PDF)', href: 'https://drive.google.com/file/d/1Nx_xw8lE__-qszxkLPbB8wFByESWiNVJ/view?usp=drive_link' },
              { icon: '☎', label: '+91 90749 32835', href: 'tel:+919074932835' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.06em',
                color: 'var(--text-muted)', textDecoration: 'none',
                padding: '0.75rem 1rem', background: 'var(--surface-2)',
                border: '1px solid var(--border)', borderRadius: '6px', transition: 'all 0.2s',
                wordBreak: 'break-all',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-border)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                <span style={{ width: '28px', textAlign: 'center', flexShrink: 0 }}>{link.icon}</span>
                <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>{link.label}</span>
                <span style={{ color: 'var(--text-dim)', flexShrink: 0 }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
