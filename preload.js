// Minimal preload. We expose nothing for now but keep this file for safe IPC later.
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Add safe, explicit IPC methods here later.
});
