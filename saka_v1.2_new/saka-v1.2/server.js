// Custom server entry point for cPanel's "Setup Node.js App" (Phusion Passenger).
// Passenger sets process.env.PORT automatically and expects the app to listen on it.
// This file is NOT used by Vercel — Vercel ignores it and uses its own runtime.
// Set this file as the "Application startup file" in cPanel's Node.js Selector.

const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => handle(req, res)).listen(port, () => {
      console.log(`SAKA Solusindo website ready on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
