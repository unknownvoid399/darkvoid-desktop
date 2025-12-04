import React, { useEffect, useState } from 'react';

export default function App() {
  const [health, setHealth] = useState('checking...');

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((d) => setHealth(d.ok ? 'ok' : 'error'))
      .catch(() => setHealth('network error'));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'system-ui, Roboto, Arial' }}>
      <h1>VOID Desktop (minimal)</h1>
      <p>Server health: {health}</p>
      <p>This is a minimal UI. Next we can add Chat and Image components.</p>
    </div>
  );
}
