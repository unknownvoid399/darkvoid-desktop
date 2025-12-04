# VOID Desktop (AI Chat + Image Generator) — Starter scaffold

Overview
- Electron desktop app with a small local Express API.
- Frontend: React + Vite.
- Backend: Express (node) proxies to OpenAI or local LLM / image servers.
- Local persistence: SQLite (conversation history).
- Modes: online (OpenAI), offline (local LLM/Stable Diffusion), or hybrid.

Quick start (dev)
1. Clone/create a repo and paste the files from this scaffold.
2. Install:
   npm install
3. Dev run (starts server, frontend dev server, and electron):
   npm run dev

Environment variables (.env or exported)
- OPENAI_API_KEY="sk-..."         # optional, used when OPENAI_MODE=online
- OPENAI_MODE="online"           # "online" or "disabled"
- LOCAL_LLM_URL="http://localhost:8080"
- LOCAL_SD_URL="http://localhost:7860"
- PORT=3000

Notes
- Do NOT add your .env to the repo. The .gitignore below already excludes .env files.
- If you're on a Chromebook that can't run Electron, you can still edit and push code here and run the project later on a PC/Mac or use a cloud dev environment (Codespaces / Gitpod).
