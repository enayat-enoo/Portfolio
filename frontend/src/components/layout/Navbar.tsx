import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['experience', 'projects', 'skills', 'contact'];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 1.5rem',
        background: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <a href="#hero" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
          color: 'var(--accent)', letterSpacing: '0.05em', textDecoration: 'none',
        }}>enayat.in</a>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {links.map((item) => (
            <li key={item}>
              <a href={`#${item}`} style={{
                fontSize: '0.8rem', fontFamily: 'var(--font-mono)',
                letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >{item}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="https://drive.google.com/file/d/1Nx_xw8lE__-qszxkLPbB8wFByESWiNVJ/view?usp=drive_link"
            target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
              letterSpacing: '0.1em', textTransform: 'uppercase' as const,
              color: 'var(--accent)', border: '1px solid var(--accent-border)',
              padding: '0.45rem 1rem', borderRadius: '4px', textDecoration: 'none',
            }}>↓ Resume</a>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text)', padding: '0.25rem', display: 'none',
              flexDirection: 'column' as const, gap: '5px',
            }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'var(--accent)' : 'var(--text)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'var(--accent)' : 'var(--text)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'var(--accent)' : 'var(--text)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '57px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {links.map(item => (
            <a key={item} href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
                letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                color: 'var(--text-muted)', textDecoration: 'none',
                padding: '0.5rem 0', borderBottom: '1px solid var(--border)',
              }}>{item}</a>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
