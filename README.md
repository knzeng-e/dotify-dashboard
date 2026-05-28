# Dotify Dashboard

> Let the Music connect the dots.

An intuitive public dashboard for Dotify, focused only on the music app: shared listening rooms, artist sovereignty, low-friction discovery, and Web3 as quiet trust infrastructure.

The page is intentionally simple. It explains what Dotify is, why it matters culturally, how rooms work, and what the technology protects without making the visitor understand blockchain first.

Product reference: [github.com/knzeng-e/dotify](https://github.com/knzeng-e/dotify/tree/feat/issue-%233-server-side-pinata-uploads)

---

## What The Page Communicates

- Dotify turns isolated listening into shared presence.
- A room should be as simple as a link.
- Room guests listen without wallet friction.
- Artists keep control of catalog, access, rights, and royalties.
- Web3 is used for trust, ownership, access, and settlement, not spectacle.
- Dotify is not a token farm, NFT marketplace, or "Spotify with a wallet button."

---

## Tech Stack

| Layer | Choice |
| ----- | ------ |
| UI | React 18 + Vite 5 + TypeScript strict |
| State | Zustand for language selection |
| Visual | Native HTML canvas animation |
| Styling | Vanilla CSS |
| Testing | Vitest + Playwright |

---

## Local Development

Requires Node 22.

```bash
nvm use
npm install
npm run dev
```

Open:

```text
http://localhost:5173/
```

---

## Build And Preview

```bash
# GitHub Pages build, using /dotify-dashboard/ asset base
npm run build

# Local preview build, using / asset base
npm run build:local
npm run preview

# IPFS-style relative asset build
npm run build:ipfs
```

---

## Test

```bash
npm run lint
npm test
npm run test:e2e
```

First Playwright run only:

```bash
npx playwright install chromium
```

---

## Project Structure

```text
src/
├── components/
│   ├── layout/TopNav.tsx
│   └── music/MusicFlowCanvas.tsx
├── content/
│   ├── site.content.ts
│   └── types.ts
├── hooks/useLanguage.ts
├── pages/DashboardPage.tsx
├── store/useStore.ts
└── index.css
```

---

## Content Sources

The product story is grounded in:

- the Dotify manifesto / north-star language;
- the linked Dotify product branch;
- product docs for rooms, access policy, artist SmartRuntimes, protected audio, and UX signature flows.
