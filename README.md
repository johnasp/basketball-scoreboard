# Basketball Scoreboard

This is a basic JavaScript app using Sass for CSS styling. It features live development tools for a modern workflow.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start development mode (watches Sass & serves with live reload):**
   ```sh
   npm run dev
   ```
   This will:
   - Watch and auto-compile `src/style.scss` to `public/style.css`
   - Serve the `public/` folder with live reload using `live-server`
3. **Open your browser:**
   - Visit the URL shown in your terminal (usually http://127.0.0.1:8080)

## Available Scripts

- `npm run build:sass` — Compile Sass to CSS once
- `npm run watch:sass` — Watch Sass and auto-compile on changes
- `npm run serve` — Serve the `public/` folder with live reload
- `npm run dev` — Run both the Sass watcher and live server together (recommended for development)
- `npm run watch:html` — Watch for changes in `public/index.html` (logs a message)

## VS Code Tasks & Shortcuts
- Tasks for building and watching Sass/HTML are available in the VS Code task runner.
- Press `Cmd+Shift+D` to run the `dev` script from within VS Code.
- The editor font size is set to 13 for this workspace.

---

Feel free to expand the app and styles as needed!
