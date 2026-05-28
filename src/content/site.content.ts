import type { DashboardContent } from './types'

export const siteContent: DashboardContent = {
  nav: {
    brand: {
      name: 'Dotify',
      dot: '◉',
      sub: {
        en: 'Shared listening for human connection',
        fr: "Écoute partagée pour le lien humain",
      },
    },
    links: [
      { label: { en: 'Product', fr: 'Produit' }, href: '#product' },
      { label: { en: 'How it works', fr: 'Comment ça marche' }, href: '#flow' },
      { label: { en: 'Values', fr: 'Valeurs' }, href: '#values' },
      { label: { en: 'Trust', fr: 'Confiance' }, href: '#trust' },
    ],
  },
  hero: {
    eyebrow: {
      en: 'Let the Music connect the dots',
      fr: 'La musique connecte les points',
    },
    title: {
      en: 'Music becomes a shared presence.',
      fr: 'La musique devient une présence partagée.',
    },
    lead: {
      en: 'Dotify is a music app for real-time listening rooms, artist-owned rights, and simple human discovery. Join a room with a link, listen together, and let Web3 work quietly as trust infrastructure.',
      fr: "Dotify est une app musicale pour les rooms d'écoute en temps réel, les droits contrôlés par les artistes et la découverte humaine. Rejoins une room avec un lien, écoute avec les autres, et laisse le Web3 agir discrètement comme infrastructure de confiance.",
    },
    primaryCta: { en: 'See the experience', fr: "Voir l'expérience" },
    secondaryCta: { en: 'Understand the values', fr: 'Comprendre les valeurs' },
  },
  product: {
    title: {
      en: 'One music app, three simple promises',
      fr: 'Une app musicale, trois promesses simples',
    },
    intro: {
      en: 'The listener should feel music first. The deeper rights, access, and royalty logic should support that experience without becoming the first thing people see.',
      fr: "L'auditeur doit d'abord ressentir la musique. Les droits, l'accès et les royalties doivent soutenir l'expérience sans devenir la première chose que l'on voit.",
    },
    cards: [
      {
        title: { en: 'Listen together', fr: 'Écouter ensemble' },
        body: {
          en: 'A host starts a room, shares a link or code, and others hear the same moment in real time.',
          fr: "Un hôte lance une room, partage un lien ou un code, et les autres entendent le même moment en temps réel.",
        },
      },
      {
        title: { en: 'Artists stay sovereign', fr: 'Les artistes restent souverains' },
        body: {
          en: 'Each artist can own a SmartRuntime that defines catalog, access rules, royalty splits, and how their work circulates.',
          fr: "Chaque artiste peut posséder un SmartRuntime qui définit son catalogue, ses règles d'accès, ses partages de royalties et la circulation de son œuvre.",
        },
      },
      {
        title: { en: 'Trust stays invisible', fr: 'La confiance reste invisible' },
        body: {
          en: 'Wallets, IPFS, contracts, and access checks exist to protect the music without turning listening into an admin task.',
          fr: "Wallets, IPFS, contrats et contrôles d'accès protègent la musique sans transformer l'écoute en tâche administrative.",
        },
      },
    ],
  },
  flow: {
    title: { en: 'From private listening to a room', fr: "De l'écoute privée à la room" },
    intro: {
      en: 'Dotify keeps the core action familiar: choose music, open a room, share it, listen together.',
      fr: "Dotify garde l'action centrale familière : choisir une musique, ouvrir une room, la partager, écouter ensemble.",
    },
    steps: [
      {
        label: { en: '1', fr: '1' },
        title: { en: 'Discover a track', fr: 'Découvrir un titre' },
        body: {
          en: 'Browse artist-grouped tracks, covers, descriptions, access badges, and previews without wallet friction.',
          fr: "Parcourir les titres par artiste, pochettes, descriptions, badges d'accès et extraits sans friction wallet.",
        },
      },
      {
        label: { en: '2', fr: '2' },
        title: { en: 'Host a room', fr: 'Ouvrir une room' },
        body: {
          en: 'A host starts a real-time WebRTC stream and gets a simple room link or code.',
          fr: "Un hôte lance un stream WebRTC en temps réel et reçoit un simple lien ou code de room.",
        },
      },
      {
        label: { en: '3', fr: '3' },
        title: { en: 'Guests join freely', fr: 'Les invités rejoignent librement' },
        body: {
          en: 'Room guests listen without connecting a wallet. They receive the ephemeral stream, not the protected source file.',
          fr: "Les invités écoutent sans connecter de wallet. Ils reçoivent le stream éphémère, pas le fichier source protégé.",
        },
      },
      {
        label: { en: '4', fr: '4' },
        title: { en: 'Value flows back', fr: 'La valeur revient' },
        body: {
          en: 'Access policies, payments, and royalties are recorded through the artist-owned runtime when full access is unlocked.',
          fr: "Les règles d'accès, paiements et royalties sont enregistrés via le runtime de l'artiste quand l'accès complet est débloqué.",
        },
      },
    ],
  },
  values: {
    title: {
      en: 'The cultural value of Dotify',
      fr: 'La valeur culturelle de Dotify',
    },
    intro: {
      en: 'The app is not trying to be a music catalog with a wallet button. Its center is relation: music as memory, invitation, culture, and shared presence.',
      fr: "L'app ne cherche pas à être un catalogue musical avec un bouton wallet. Son centre est la relation : la musique comme mémoire, invitation, culture et présence partagée.",
    },
    points: [
      {
        title: { en: 'Music reopens the commons', fr: 'La musique rouvre le commun' },
        body: {
          en: 'Dotify turns isolated listening into a temporary village square where discovery happens through people.',
          fr: "Dotify transforme l'écoute isolée en place de village temporaire où la découverte passe par les personnes.",
        },
      },
      {
        title: { en: 'Human free matters', fr: 'Human Free compte' },
        body: {
          en: 'Some music should circulate freely for verified humans, with dignity and without surveillance theater.',
          fr: "Certaines musiques doivent circuler librement pour les humains vérifiés, avec dignité et sans théâtre de surveillance.",
        },
      },
      {
        title: { en: 'No casino in headphones', fr: 'Pas de casino avec casque' },
        body: {
          en: 'The product rejects empty token mechanics. It rewards meaningful listening, hosting, artist support, and cultural transmission.',
          fr: "Le produit rejette les mécaniques de token vides. Il valorise l'écoute, l'accueil, le soutien artiste et la transmission culturelle.",
        },
      },
    ],
  },
  trust: {
    title: {
      en: 'What the technology quietly protects',
      fr: 'Ce que la technologie protège discrètement',
    },
    intro: {
      en: 'Dotify uses Web3 where it has a job: ownership, access, payment, and verifiability. The user experience should still feel like music.',
      fr: "Dotify utilise le Web3 là où il a un rôle : propriété, accès, paiement et vérifiabilité. L'expérience doit rester musicale.",
    },
    points: [
      {
        title: { en: 'Artist-owned runtimes', fr: 'Runtimes possédés par les artistes' },
        body: {
          en: 'A personal SmartRuntime lets an artist define rights, access mode, royalties, and registration for each release.',
          fr: "Un SmartRuntime personnel permet à l'artiste de définir droits, mode d'accès, royalties et enregistrement de chaque release.",
        },
      },
      {
        title: { en: 'Protected source files', fr: 'Fichiers sources protégés' },
        body: {
          en: 'Protected audio can be encrypted and delivered through temporary access keys; room guests only hear the stream.',
          fr: "L'audio protégé peut être chiffré et livré par clés temporaires ; les invités d'une room entendent seulement le stream.",
        },
      },
      {
        title: { en: 'Transparent royalties', fr: 'Royalties transparentes' },
        body: {
          en: 'Classic unlocks and royalty splits can be settled through auditable on-chain records instead of hidden platform accounting.',
          fr: "Les accès Classic et partages de royalties peuvent être réglés via des traces on-chain auditables plutôt qu'une comptabilité opaque.",
        },
      },
    ],
  },
  manifesto: {
    quote: {
      en: 'Dotify must be as simple as a shared link, as alive as a listening room, as fair as an auditable access policy, and as deep as a cultural commons.',
      fr: "Dotify doit être aussi simple qu'un lien partagé, aussi vivant qu'une room d'écoute, aussi juste qu'une politique d'accès auditable, et aussi profond qu'un commun culturel.",
    },
    attribution: '— Dotify manifesto / product north star',
  },
  footer: {
    tagline: {
      en: 'Dotify — make music social again without dispossessing the artist.',
      fr: "Dotify — rendre la musique sociale à nouveau sans déposséder l'artiste.",
    },
    links: [
      {
        label: 'Dotify product repo',
        href: 'https://github.com/knzeng-e/dotify/tree/feat/issue-%233-server-side-pinata-uploads',
        external: true,
      },
      { label: 'Polkadot', href: 'https://polkadot.network', external: true },
    ],
  },
  langToggle: { en: 'EN', fr: 'FR' },
}
