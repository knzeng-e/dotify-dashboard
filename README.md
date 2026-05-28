# Dotify — Public Dashboard

> **Let the music connect the dots.**

A bilingual (English / French) public-facing dashboard presenting the Dotify project — a decentralized cultural social hub for real-time shared music listening, built on Polkadot.

---

## What is this?

This is a single-file static HTML dashboard (`index.html`) designed to introduce Dotify to potential collaborators, investors, artists, and the broader Polkadot community.

It covers:

- The project vision and three core pillars
- How the product works, step by step
- The Web3 / Polkadot technical architecture
- The 4-phase product roadmap
- The Dotify manifesto

---

## Features

- **Bilingual** — language selection screen on load (EN default), switchable at any time via the nav
- **Single file** — no build step, no dependencies, no framework; just `index.html`
- **Fully responsive** — works on desktop, tablet and mobile
- **IPFS-ready** — self-contained, deployable to any static host or IPFS gateway
- **Polkadot-native aesthetic** — deep blue, cyan, and Polkadot pink palette

---

## Quick deploy

### Netlify (2 minutes, drag & drop)

1. Go to [netlify.com](https://netlify.com) and create a free account
2. On your dashboard, drag and drop `index.html` into the deploy zone
3. Your site is live instantly at `https://random-name.netlify.app`

### GitHub Pages

```bash
git init
git add index.html
git commit -m "init: Dotify dashboard"
gh repo create dotify-dashboard --public --push
# then enable Pages in Settings → Pages → main branch
```

URL: `https://your-username.github.io/dotify-dashboard`

### Vercel

```bash
npm i -g vercel
vercel
# follow the prompts — done in under a minute
```

### IPFS / Pinata

Upload `index.html` to [pinata.cloud](https://pinata.cloud) and access it via:

```
https://gateway.pinata.cloud/ipfs/<YOUR_CID>
```

For a Polkadot-native URL, register a `.dot.li` name via DotNS pointing to your CID.

---

## Project structure

```
dotify-dashboard/
└── index.html      # The entire dashboard — HTML, CSS, JS in one file
└── README.md       # This file
```

---

## Tech stack

| Layer | Choice |
|---|---|
| Markup | HTML5 |
| Styling | CSS custom properties, no framework |
| Interactivity | Vanilla JS (language switch, scroll reveal) |
| Fonts | Syne (display) + DM Sans (body) via Google Fonts |
| Hosting | Any static host — Netlify, Vercel, GitHub Pages, IPFS |

---

## About Dotify

Dotify is a decentralized cultural social hub where music becomes a live social connector.

- **For listeners** — discover music through people, not algorithms. Join a room and enter the same listening moment as someone else.
- **For artists** — publish through artist-owned SmartRuntimes on Polkadot Asset Hub, with on-chain access policy, royalty splits, and protected audio.
- **For communities** — turn isolated listening into a living cultural commons.

Built on **Polkadot** using EVM SmartRuntimes (ERC-2535 Diamond proxy), IPFS/Pinata for storage, WebRTC for real-time audio streaming, and Socket.IO for room signaling.

→ Full technical documentation: [`docs/`](./docs/)  
→ Smart contracts: [`contracts/evm/`](./contracts/evm/)  
→ Web app: [`web/`](./web/)

---

## Roadmap

| Phase | Focus | Status |
|---|---|---|
| 1 | Production spine — key backend, server-side uploads, hosted signaling | 🟡 In progress |
| 2 | Stabilization — E2E tests, frontend modularization | ⬜ Upcoming |
| 3 | Differentiation — live Proof of Personhood, ambassadors | ⬜ Upcoming |
| 4 | Ecosystem — DAO, staking-subscription, P2P relays | ⬜ Future |

---

## License

MIT — see [LICENSE](./LICENSE) for details.

---

*Dotify must be as simple as a shared link, as alive as a listening room, as fair as an auditable access policy, and as deep as a cultural commons.*