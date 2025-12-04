// Simple sqlite helper using better-sqlite3 for sync simplicity.
const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname, '..', 'data.sqlite'));

db.exec(`
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  role TEXT,
  content TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

module.exports = {
  saveMessage: (msg) => {
    const stmt = db.prepare('INSERT INTO messages (role, content) VALUES (?, ?)');
    return stmt.run(msg.role || 'assistant', msg.content || '');
  },
  getMessages: () => {
    const stmt = db.prepare('SELECT id, role, content, created_at FROM messages ORDER BY id ASC');
    return stmt.all();
  }
};
