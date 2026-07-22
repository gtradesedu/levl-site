# levlhq.com

Static marketing site for **Levl** — TradingView indicators without the noise.

Plain HTML/CSS/JS. No build step, no dependencies, no tracking, no cookies.
Fonts are self-hosted, images are embedded, so loading the site contacts no third party.

## Deploy
Cloudflare Pages → connect this repo → build command: *(none)* → output directory: `/`

## Editing
- `index.html` — landing page (styles and scripts are inline)
- `privacy.html` · `terms.html` · `disclaimer.html` · `imprint.html` — legal pages, share `legal.css`
- `assets/fonts/` + `assets/fonts.css` — self-hosted webfonts

Links and prices live in the `LINKS` / `PLANS` / `LUCID` objects at the top of the script block in `index.html`.
