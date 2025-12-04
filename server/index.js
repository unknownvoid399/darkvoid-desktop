// Minimal Express server to verify structure and provide a health endpoint.
// Later you can replace this with the full API proxy logic (OpenAI/local LLM).
require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// Serve UI in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'renderer', 'dist')));
}

// Health
app.get('/api/health', (req, res) => res.json({ ok: true }));

// Simple history endpoint (reads from sqlite)
app.get('/api/history', (req, res) => {
  try {
    const rows = db.getMessages();
    res.json({ ok: true, data: rows });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err) });
  }
});

// Placeholder chat endpoint (returns a simple echo assistant)
app.post('/api/chat', (req, res) => {
  const { messages = [] } = req.body;
  const last = messages[messages.length - 1] || { role: 'user', content: '' };
  const assistant = { role: 'assistant', content: `Echo: ${last.content}` };
  db.saveMessage(last);
  db.saveMessage(assistant);
  res.json({ ok: true, assistant });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
