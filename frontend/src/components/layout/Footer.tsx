function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: 'clamp(1.25rem, 4vw, 2rem) clamp(1.25rem, 5vw, 2.5rem)',
      maxWidth: '1100px', margin: '0 auto',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap' as const, gap: '0.75rem',
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--text-dim)' }}>
        © 2026 <span style={{ color: 'var(--accent)' }}>Md Enayat Ansari</span> — Built with React.js & Vite
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--text-dim)' }}>
        Bhopal, India · Open to Relocation
      </div>
    </footer>
  );
}

export default Footer;
