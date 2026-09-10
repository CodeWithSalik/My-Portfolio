# Salik Pirzada — Engineering Portfolio

> **Developer • Builder • Computer Science Student**  
> Brand: **CodeWithSalik** • [salikpirzada.dev](https://salikpirzada.dev)

A personal portfolio engineered from the ground up to showcase production full-stack systems, architectural depth, defensive security practices, and factual academic achievements.

---

## 🚀 Key Architectural Highlights

- **Next.js 16 App Router & React 19**: Server Components by default for zero layout shift and instant initial load.
- **Tailwind CSS v4 Design System**: Semantic color tokens with WCAG AA compliance in both dark and light modes.
- **Audited Case Studies**: Detailed engineering breakdowns of flagship systems including:
  - **KashmirStag**: Production B2C e-commerce platform with atomic two-phase inventory reservations (`availableQty = onHand - reservedQty`), timing-safe Razorpay HMAC verification, and 28-step audited admin operations.
  - **Fragments of Me**: Emotion-first reading sanctuary with ambient audio soundscapes, Firestore subcollections, and dedicated transactional microservice.
  - **Azad Associates Solar**: Commercial platform and solar estimator for an authorized KPDCL vendor under PM Surya Ghar Muft Bijli Yojana.
- **Recruiter-Optimized Resume Experience**: Editorial web presentation paired with an ATS-compliant, single-click printable format.
- **Accessible & Fast**: Full keyboard navigation (Command Palette via `Ctrl+K` / `Cmd+K`, Skip to Content, visible focus indicators).

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **UI & Styling** | React 19, Tailwind CSS v4, Framer Motion, Lucide Icons |
| **Type Safety** | TypeScript 5 (Strict Mode) |
| **Fonts** | Geist Sans & Geist Mono (`next/font/google`) |
| **Deployment** | Vercel production deployment with statically prerendered routes |

---

## 📁 Repository Structure

```text
src/
├── app/                  # Next.js App Router routes & static metadata
│   ├── about/            # Journey timeline & engineering philosophy
│   ├── achievements/     # Verified academic & technical honors
│   ├── contact/          # Direct contact channels
│   ├── projects/         # Case studies (KashmirStag, Fragments, Azad)
│   ├── resume/           # Recruiter & ATS resume views
│   ├── not-found.tsx     # Custom 404 handler
│   ├── robots.ts         # Dynamic robots.txt
│   └── sitemap.ts        # Search engine sitemap
├── components/           # Reusable UI, layout, and feature components
│   ├── layout/           # Navbar, Footer, CommandPalette, ThemeProvider
│   ├── projects/         # Architecture diagrams, metrics, cards
│   ├── resume/           # Editorial resume layout & print engine
│   └── ui/               # Button, Card, Badge, Modal, FadeIn
├── data/                 # Single-source-of-truth typed datasets
│   ├── achievements.ts   # Verified institutional recognitions
│   ├── education.ts      # Class X, XII & B.Tech credentials
│   ├── personal.ts       # Core bio & contact data
│   ├── projects.ts       # Flagship projects metadata & highlights
│   └── skills.ts         # Domain-categorized technical stack
└── lib/                  # Utilities, constants, and theme hooks
```

---

## ⚙️ Environment Configuration

Copy `.env.example` to `.env.local` for local customizations:

```bash
# Site Base URL (used for canonical URLs, OpenGraph, sitemap, and robots.txt)
NEXT_PUBLIC_SITE_URL=https://salikpirzada.dev
```

---

## 💻 Development & Build Scripts

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run TypeScript typecheck (zero errors)
npm run typecheck

# Run ESLint validation (zero warnings)
npm run lint

# Compile production build
npm run build

# Start production server locally
npm run start
```

---

## 🚢 Deployment (Vercel)

This application is fully optimized for continuous deployment on **Vercel**:

1. Push code to your GitHub repository (`github.com/CodeWithSalik/portfolio`).
2. Import the project into Vercel.
3. (Optional) Set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Deploy — all 14 routes will automatically prerender statically with zero runtime cold-start overhead.

---

## 📄 License & Attribution

© 2026 Salik Pirzada. All rights reserved. Created with initiative and care by [CodeWithSalik](https://github.com/CodeWithSalik).

