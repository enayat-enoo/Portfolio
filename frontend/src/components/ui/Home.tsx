import { useEffect, useRef } from "react";

const S = {
  section: {
    padding: '6rem 2.5rem',
    maxWidth: '1100px',
    margin: '0 auto',
  } as React.CSSProperties,
  sectionHeader: {
    display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem',
  } as React.CSSProperties,
  sectionNum: {
    fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.1em',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '2.25rem', fontWeight: 700, letterSpacing: '-0.02em',
  } as React.CSSProperties,
  sectionLine: {
    flex: 1, height: '1px', background: 'var(--border)',
  } as React.CSSProperties,
  divider: {
    height: '1px', background: 'var(--border)', maxWidth: '1100px', margin: '0 auto',
  } as React.CSSProperties,
  tag: {
    fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em',
    textTransform: 'uppercase' as const, padding: '0.3rem 0.65rem', borderRadius: '3px',
    background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text-muted)',
  } as React.CSSProperties,
  tagHighlight: {
    fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em',
    textTransform: 'uppercase' as const, padding: '0.3rem 0.65rem', borderRadius: '3px',
    border: '1px solid var(--accent-border)', color: 'var(--accent)', background: 'var(--accent-dim)',
  } as React.CSSProperties,
};

function Home() {
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    fadeRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addFadeRef = (el: HTMLElement | null) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>

      {/* HERO */}
      <div id="hero" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '6rem 2.5rem 4rem', maxWidth: '1100px', margin: '0 auto',
      }}>
        <div style={{ maxWidth: '820px' }}>
          <div className="hero-tag" style={{
            display: 'inline-flex', alignItems: 'center',
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: '1.75rem',
          }}>
            Available for Full-time Roles
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 800,
            lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '0.5rem',
          }}>
            Md Enayat Ansari<br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
              Full Stack Developer
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-muted)',
            maxWidth: '560px', margin: '1.75rem 0 2.5rem', lineHeight: 1.7, fontWeight: 400,
          }}>
            M.Tech CS graduate specializing in MERN stack and real-time distributed systems.
            I build scalable, production-ready applications — from live chat engines to billing platforms —
            with a focus on performance and reliability.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:enayatansari33@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--accent)', color: '#0a0a0a',
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '0.85rem 1.75rem', borderRadius: '4px', textDecoration: 'none', transition: 'all 0.2s',
            }}>Get in Touch ↗</a>
            <a href="#projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'transparent', color: 'var(--text)',
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '0.85rem 1.75rem', borderRadius: '4px', textDecoration: 'none',
              border: '1px solid var(--border-hover)', transition: 'all 0.2s',
            }}>View Projects</a>
            <a href="https://drive.google.com/file/d/1Nx_xw8lE__-qszxkLPbB8wFByESWiNVJ/view?usp=drive_link"
              target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'transparent', color: 'var(--text)',
                fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '0.85rem 1.75rem', borderRadius: '4px', textDecoration: 'none',
                border: '1px solid var(--border-hover)', transition: 'all 0.2s',
              }}>Download Resume</a>
          </div>

          <div style={{
            display: 'flex', gap: '3rem', marginTop: '4rem',
            paddingTop: '2.5rem', borderTop: '1px solid var(--border)',
          }}>
            {[
              { num: '6+', label: 'Deployed Projects' },
              { num: '1', label: 'Freelance Client' },
              { num: 'M.Tech', label: 'CS — RGPV' },
              { num: '2+', label: 'Years Building' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
                  {stat.num.replace(/[+]/, '')}<span style={{ color: 'var(--accent)' }}>{stat.num.includes('+') ? '+' : ''}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={S.divider} />

      {/* EXPERIENCE */}
      <section ref={addFadeRef} id="experience" className="fade-in" style={S.section}>
        <div style={S.sectionHeader}>
          <span style={S.sectionNum}>01</span>
          <h2 style={S.sectionTitle}>Experience</h2>
          <div style={S.sectionLine} />
        </div>

        {/* Freelance */}
        <div style={{
          background: 'var(--surface)', border: '1px solid rgba(0,229,160,0.25)',
          borderRadius: '8px', padding: '2rem 2.5rem', marginBottom: '1.5rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Freelance Full Stack Developer</div>
              <div style={{ color: 'var(--accent)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Independent Client — Retail Business</div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>Jan 2025 — Mar 2025</div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            Contracted to build a production-grade, GST-compliant billing and invoice management system from scratch for a local retail business. Delivered a complete MERN stack application with multi-user support and real-time reporting.
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '1rem' }}>
            {[
              'Engineered end-to-end GST invoice generation with automated tax calculation (CGST/SGST/IGST), reducing billing errors to near-zero',
              'Built role-based access control (RBAC) supporting Admin and Staff roles with JWT authentication and refresh-token rotation',
              'Implemented real-time inventory tracking and low-stock alerts using WebSocket events',
              'Delivered monthly sales analytics dashboard with revenue summaries and exportable reports',
              'Deployed on Vercel (frontend), Railway (backend), and MongoDB Atlas — achieving 99.9% uptime',
            ].map((item, i) => (
              <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, paddingLeft: '1.25rem', position: 'relative', marginBottom: '0.3rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '0.8rem' }}>→</span>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'GST Compliance', 'Vercel', 'Railway'].map(t => (
              <span key={t} style={S.tag}>{t}</span>
            ))}
          </div>
        </div>

        {/* Thesis */}
        <div ref={addFadeRef} className="thesis-card fade-in" style={{
          background: 'linear-gradient(135deg, var(--surface) 0%, #0f1f18 100%)',
          border: '1px solid var(--accent-border)', borderRadius: '12px', padding: '3rem',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-dim)',
            border: '1px solid var(--accent-border)', padding: '0.35rem 0.75rem', borderRadius: '3px', marginBottom: '1.5rem',
          }}>⬡ M.Tech Research — RGPV University</div>

          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1rem' }}>
            Latency vs Throughput in Horizontally Scaled<br />Real-Time Communication Architectures
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            Conducted a rigorous comparative analysis of Redis Pub/Sub against direct WebSocket broadcasting in multi-node Node.js clusters. Measured and benchmarked message latency, throughput, and failure modes under concurrency stress.
          </p>

          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', padding: '1.5rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: '2rem' }}>
            {[
              { val: '~40%', label: 'Latency Reduction (Redis vs Direct)' },
              { val: '10K+', label: 'Concurrent Connections Benchmarked' },
              { val: '3', label: 'Node Cluster Configurations Tested' },
            ].map(m => (
              <div key={m.label}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.02em' }}>{m.val}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', marginTop: '0.2rem' }}>{m.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['Redis Pub/Sub', 'WebSockets'].map(t => <span key={t} style={S.tagHighlight}>{t}</span>)}
            {['Node.js Clustering', 'Socket.IO', 'Docker', 'System Design', 'Distributed Systems'].map(t => <span key={t} style={S.tag}>{t}</span>)}
          </div>
        </div>
      </section>

      <div style={S.divider} />

      {/* PROJECTS */}
      <section ref={addFadeRef} id="projects" className="fade-in" style={S.section}>
        <div style={S.sectionHeader}>
          <span style={S.sectionNum}>02</span>
          <h2 style={S.sectionTitle}>Projects</h2>
          <div style={S.sectionLine} />
        </div>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {[
            {
              featured: true,
              category: 'Real-Time Systems / Distributed',
              title: 'QuickChat — Scalable Chat Engine',
              desc: 'Production-grade real-time chat application built with horizontal scalability in mind. Implemented Redis Pub/Sub to synchronize message broadcasting across multiple Node.js instances — direct application of M.Tech thesis research.',
              tags: [{ label: 'Redis Pub/Sub', h: true }, { label: 'Socket.IO', h: true }, { label: 'MongoDB' }, { label: 'Express.js' }, { label: 'React.js' }, { label: 'Docker' }],
              links: [{ label: '↗ Live Demo', href: 'https://quick-chat-eight-eta.vercel.app/', type: 'live' }, { label: '⌥ GitHub', href: 'https://github.com/enayat-enoo/Quickchat', type: 'github' }],
            },
            {
              featured: true,
              category: 'Backend Performance / Data Systems',
              title: 'Crypto Price Monitor',
              desc: 'High-frequency real-time monitoring system tracking live cryptocurrency prices. Optimized database read/write throughput using PostgreSQL indexing and a Redis caching layer — reducing query latency by ~60%.',
              tags: [{ label: 'PostgreSQL', h: true }, { label: 'Redis Cache', h: true }, { label: 'TypeScript' }, { label: 'Node.js' }, { label: 'WebSockets' }],
              links: [{ label: '⌥ GitHub', href: 'https://github.com/enayat-enoo/crypto-price-monitor', type: 'github' }],
            },
            {
              featured: false,
              category: 'Real-Time / Peer-to-Peer',
              title: 'WebRTC Video Calling App',
              desc: 'Browser-native peer-to-peer video calling using WebRTC with a Node.js signaling server. Implemented ICE candidate exchange, STUN/TURN negotiation, and fallback reconnection logic. Supports screen sharing and audio/video toggle mid-call.',
              tags: [{ label: 'WebRTC', h: true }, { label: 'Socket.IO' }, { label: 'Node.js' }, { label: 'React.js' }],
              links: [{ label: '⌥ GitHub', href: 'https://github.com/enayat-enoo', type: 'github' }],
            },
            {
              featured: false,
              category: 'Full Stack Application',
              title: 'BookIt — Booking Platform',
              desc: 'Full-stack appointment and resource booking system with a custom availability engine, conflict detection, and JWT-secured authentication. Features slot management, email confirmation logic, and Redux-powered state across multi-step booking flows.',
              tags: [{ label: 'React.js' }, { label: 'Redux' }, { label: 'Express.js' }, { label: 'MongoDB' }, { label: 'JWT' }],
              links: [{ label: '↗ Live Demo', href: 'https://book-it-beryl.vercel.app/', type: 'live' }, { label: '⌥ GitHub', href: 'https://github.com/enayat-enoo/BookIt', type: 'github' }],
            },
            {
              featured: false,
              category: 'Frontend Architecture',
              title: 'Ecom-Cart — E-Commerce Frontend',
              desc: 'Feature-rich e-commerce frontend with persistent cart state, multi-filter product discovery, optimistic UI updates, and lazy-loaded image rendering. State managed via Zustand for minimal re-renders.',
              tags: [{ label: 'React.js' }, { label: 'Zustand' }, { label: 'Tailwind CSS' }, { label: 'REST API' }],
              links: [{ label: '⌥ GitHub', href: 'https://github.com/enayat-enoo/E-com-cart', type: 'github' }],
            },
          ].map((project) => (
            <div
              key={project.title}
              className={`project-card${project.featured ? ' featured' : ''}`}
              style={{
                background: 'var(--surface)',
                border: `1px solid ${project.featured ? 'rgba(0,229,160,0.2)' : 'var(--border)'}`,
                borderRadius: '8px', padding: '2rem 2.5rem', transition: 'all 0.25s',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                {project.category}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>{project.desc}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                {project.tags.map(t => <span key={t.label} style={t.h ? S.tagHighlight : S.tag}>{t.label}</span>)}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {project.links.map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em',
                    textTransform: 'uppercase', textDecoration: 'none', padding: '0.4rem 0.85rem',
                    borderRadius: '3px', transition: 'all 0.2s',
                    ...(link.type === 'live'
                      ? { background: 'var(--accent)', color: '#0a0a0a' }
                      : { border: '1px solid var(--border-hover)', color: 'var(--text-muted)' }),
                  }}>{link.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* SKILLS */}
      <section ref={addFadeRef} id="skills" className="fade-in" style={S.section}>
        <div style={S.sectionHeader}>
          <span style={S.sectionNum}>03</span>
          <h2 style={S.sectionTitle}>Skills</h2>
          <div style={S.sectionLine} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {[
            { title: 'Frontend', skills: [{ l: 'React.js', h: true }, { l: 'JavaScript (ES6+)' }, { l: 'Redux / Zustand' }, { l: 'Tailwind CSS' }, { l: 'HTML5 / CSS3' }, { l: 'REST APIs' }] },
            { title: 'Backend', skills: [{ l: 'Node.js', h: true }, { l: 'Express.js', h: true }, { l: 'Socket.IO' }, { l: 'WebSockets' }, { l: 'WebRTC' }, { l: 'JWT Auth' }, { l: 'REST Design' }] },
            { title: 'Databases & Caching', skills: [{ l: 'MongoDB', h: true }, { l: 'Redis Pub/Sub', h: true }, { l: 'PostgreSQL' }, { l: 'Mongoose' }, { l: 'Redis Cache' }] },
            { title: 'DevOps & Tools', skills: [{ l: 'Docker', h: true }, { l: 'Vercel' }, { l: 'Railway' }, { l: 'MongoDB Atlas' }, { l: 'Git / GitHub' }, { l: 'Linux CLI' }] },
            { title: 'Architecture & Concepts', skills: [{ l: 'Distributed Systems', h: true }, { l: 'System Design' }, { l: 'Horizontal Scaling' }, { l: 'Pub/Sub Patterns' }, { l: 'RBAC' }, { l: 'MVC' }] },
            { title: 'Education', skills: [{ l: 'M.Tech — Computer Science', h: true }, { l: 'RGPV University, Bhopal' }, { l: 'DSA' }, { l: 'DBMS' }, { l: 'OS Concepts' }] },
          ].map(group => (
            <div key={group.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.75rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem' }}>
                {group.title}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map(s => (
                  <span key={s.l} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem', padding: '0.3rem 0.65rem',
                    borderRadius: '3px', letterSpacing: '0.04em',
                    ...(s.h
                      ? { border: '1px solid var(--accent-border)', color: 'var(--accent)', background: 'var(--accent-dim)' }
                      : { background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text-muted)' }),
                  }}>{s.l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* CONTACT */}
      <section ref={addFadeRef} id="contact" className="fade-in" style={S.section}>
        <div style={S.sectionHeader}>
          <span style={S.sectionNum}>04</span>
          <h2 style={S.sectionTitle}>Contact</h2>
          <div style={S.sectionLine} />
        </div>

        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px',
          padding: '3.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center',
        }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Let's build<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent)' }}>something real.</em>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              I'm actively looking for full-time Full Stack Developer roles — MERN stack, backend-heavy, or real-time systems. Based in Bhopal, open to Noida, Pune, Bengaluru, or remote.
            </p>
            <a href="mailto:enayatansari33@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--accent)', color: '#0a0a0a',
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '0.85rem 1.75rem', borderRadius: '4px', textDecoration: 'none',
            }}>enayatansari33@gmail.com ↗</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { icon: '✉', label: 'enayatansari33@gmail.com', href: 'mailto:enayatansari33@gmail.com' },
              { icon: '⌥', label: 'github.com/enayat-enoo', href: 'https://github.com/enayat-enoo' },
              { icon: 'in', label: 'linkedin.com/in/md-enayat-ansari', href: 'https://www.linkedin.com/in/md-enayat-ansari-856667228' },
              { icon: '↓', label: 'Download Resume (PDF)', href: 'https://drive.google.com/file/d/1Nx_xw8lE__-qszxkLPbB8wFByESWiNVJ/view?usp=drive_link' },
              { icon: '☎', label: '+91 90749 32835', href: 'tel:+919074932835' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.06em',
                color: 'var(--text-muted)', textDecoration: 'none',
                padding: '0.85rem 1.25rem', background: 'var(--surface-2)',
                border: '1px solid var(--border)', borderRadius: '6px', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-border)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                <span style={{ width: '32px', textAlign: 'center', fontSize: '0.85rem' }}>{link.icon}</span>
                <span style={{ flex: 1 }}>{link.label}</span>
                <span style={{ color: 'var(--text-dim)' }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
