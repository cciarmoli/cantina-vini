# Cantina Vini – PWA

Questa cartella contiene la versione pronta per GitHub Pages.

## Deploy su GitHub Pages
1. Crea un repository (pubblico o privato con Pages abilitate).
2. Carica **tutti** i file nella root del repo.
3. Vai su **Settings → Pages** e scegli come source la branch (es. `main`) e la **root**.
4. Attendi la pubblicazione e apri l’URL `https://<tuo-utente>.github.io/<repo>/`.
5. Su iPhone: apri l’URL con **Safari** → **Condividi** → **Aggiungi alla schermata Home**.

### Note
- Service worker: strategia **cache-first** (`service-worker.js`).
- Manifest: `start_url` relativo (`./index.html?source=pwa`) e `scope: '.'` per funzionare anche se il sito è ospitato in una sottocartella (GitHub Pages).
- Icone: aggiunta `icons/icon-180.png` per iOS; mantenute 192/512 per manifest.
- Splash: immagini segnaposto incluse nelle dimensioni referenziate dall'HTML.
- Backup: usa il tab **Backup** per esportare/importare i dati JSON.
