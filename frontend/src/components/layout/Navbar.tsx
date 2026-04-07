function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.25rem 2.5rem',
      background: 'rgba(10,10,10,0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <a href="#hero" style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
        color: 'var(--accent)', letterSpacing: '0.05em', textDecoration: 'none',
      }}>enayat.in</a>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {['experience', 'projects', 'skills', 'contact'].map((item) => (
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

      <a
        href="https://drive.google.com/file/d/1Nx_xw8lE__-qszxkLPbB8wFByESWiNVJ/view?usp=drive_link"
        target="_blank" rel="noreferrer"
        style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
          letterSpacing: '0.1em', textTransform: 'uppercase' as const,
          color: 'var(--accent)', border: '1px solid var(--accent-border)',
          padding: '0.45rem 1rem', borderRadius: '4px', textDecoration: 'none', transition: 'all 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-dim)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >↓ Resume</a>
    </nav>
  );
}

export default Navbar;
