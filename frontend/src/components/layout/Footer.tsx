function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem 2.5rem',
      maxWidth: '1100px', margin: '0 auto',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap' as const, gap: '1rem',
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
