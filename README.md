# Interactive Spare Parts Catalogue

A lightweight HTML/CSS/JS page for spare-part catalogues.

## Files in this project
- `index.html` → page structure
- `styles.css` → page styling
- `script.js` → parts data + interactivity
- `machine-placeholder.svg` → sample machine image

## How to open terminal
### Windows
- Press `Win + R`, type `cmd`, then press Enter (Command Prompt), or type `powershell` for PowerShell.
- In VS Code: **Terminal → New Terminal**.

### macOS
- Press `Cmd + Space`, type `Terminal`, and press Enter.
- In VS Code: **Terminal → New Terminal**.

### Linux
- Use app search and open **Terminal**.
- Common shortcut on many distros: `Ctrl + Alt + T`.
- In VS Code: **Terminal → New Terminal**.

After opening terminal, move into this project folder:
```bash
cd /workspace/parts_catalogue
```

## Run from terminal (copy/paste)
Use these exact commands:
```bash
cd /workspace/parts_catalogue
python3 -m http.server 8000
```
Then open: `http://127.0.0.1:8000`

To stop server: press `Ctrl + C` in terminal.

## How to run
### Option 1 (quickest)
1. Open `index.html` directly in your browser (double-click it).

### Option 2 (recommended: local web server)
1. Open a terminal in this project folder.
2. Run:
   ```bash
   python3 -m http.server 8000
   ```
3. Open in your browser:
   ```
   http://127.0.0.1:8000
   ```
4. Stop the server with `Ctrl + C`.

## Features
- Left panel: machine image with clickable numbered balloons.
- Right panel: table with **index number**, **part number**, and **quantity**.
- Two-way highlight: selecting a balloon highlights the matching table row, and selecting a row highlights the balloon.

## Customizing with your PDF catalogue
1. Export the needed PDF page as PNG/JPG.
2. Replace the `src` of `#partsImage` in `index.html` with your image file path.
3. Update the `parts` array in `script.js`:
   - `index`: balloon/index number
   - `partNo`: component/part number
   - `qty`: quantity
   - `x`, `y`: balloon position in SVG `viewBox` coordinates (1000x650)

## Example local checks
```bash
node --check script.js
python3 -m http.server 8000
```
