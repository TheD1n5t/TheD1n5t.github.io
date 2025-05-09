
# GG Montı - LoL Stats (EUW)

Zeigt automatisch Statistiken für den Spieler **GG Montı** über die Riot API.

## 🔧 Setup

### 1. Frontend (GitHub Pages)
- Lege ein neues Repository an, z. B. `lol-stats-site`
- Füge folgende Dateien hinzu:
  - `index.html`
  - `main.js` (mit deiner Proxy-URL!)
  - optional: `style.css`
- Aktiviere GitHub Pages unter „Settings > Pages“ → Deploy from `main`

### 2. Backend (Render.com)
- Neues GitHub-Repo `lol-api-proxy`
- `riot_api_proxy.py` und `requirements.txt` hochladen
- Deploy als **Web Service**
- Environment Variable `RIOT_API_KEY` setzen

### 3. Wichtige Hinweise
- Der Riot API Key darf **niemals ins Frontend**
- Die Daten werden live über deinen Proxy geladen
- Aktuell ist der Summoner-Name fest auf **GG Montı** eingestellt

## 🔒 Sicherheit
- Der Key bleibt sicher im Render-Backend
- GitHub Pages ist rein statisch und zeigt keine geheimen Infos
