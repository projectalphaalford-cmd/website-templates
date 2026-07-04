# Project: website-templates — Permanent Context

## Overview
10 professional business website templates built with React 18 + Vite 5 + Tailwind CSS 3. Each template includes Hero, About, Services, Gallery, Testimonials, FAQ, Contact Form, Google Maps, WhatsApp Button, and Footer.

## Repository
- **GitHub:** https://github.com/projectalphaalford-cmd/website-templates
- **Default branch:** master
- **Local path:** C:/tmp/business-templates

## Deployment
- **Production URL:** https://website-templates-seven.vercel.app
- **Vercel Dashboard:** https://vercel.com/adarshalford-6004s-projects/website-templates
- **Framework:** Vite (auto-detected)
- **Build settings:**
  - Build command: `npm run build`
  - Output directory: `dist`
  - Install command: `npm install`
  - Node version: 24.x

## Credentials (REPLACE WITH YOUR OWN)
- **GitHub username:** projectalphaalford-cmd
- **GitHub PAT (classic, public_repo):** [SET YOUR OWN — classic PAT starting with ghp_]
- **Vercel token:** [SET YOUR OWN — Vercel token starting with vcp_]
- **Vercel team:** team_C4ejdYwSSeZtE2HVF24ap02d (adarshalford-6004s-projects)

## Templates Available
Each at `https://website-templates-seven.vercel.app/template/<name>`:
1. tuition-center — 🎓 Education & tutoring
2. dance-academy — 💃 Dance classes & studios
3. school — 🏫 Educational institutions
4. stationery — ✏️ Stationery & art supplies
5. restaurant — 🍽️ Fine dining & eateries
6. gym — 💪 Fitness centers
7. medical-clinic — 🏥 Healthcare & clinics
8. salon — 💇 Beauty salons & spas
9. clothing-store — 👗 Fashion boutiques
10. electronics — 📱 Tech & electronics

## Project Structure
```
website-templates/
├── src/
│   ├── components/
│   │   ├── ui/              # Button, Card, Container, Input, SectionHeading
│   │   └── sections/        # Navbar, Hero, About, Services, Gallery,
│   │                          Testimonials, FAQ, Contact, Maps, Footer, WhatsApp
│   ├── templates/           # ★ EDIT CONTENT HERE — each has data.js
│   │   ├── tuition-center/data.js
│   │   ├── dance-academy/data.js
│   │   ├── school/data.js
│   │   ├── stationery/data.js
│   │   ├── restaurant/data.js
│   │   ├── gym/data.js
│   │   ├── medical-clinic/data.js
│   │   ├── salon/data.js
│   │   ├── clothing-store/data.js
│   │   └── electronics/data.js
│   ├── pages/               # Home.jsx (gallery) + TemplatePage.jsx (renderer)
│   ├── hooks/               # useInView.js
│   ├── App.jsx              # React Router with all 10 routes
│   ├── main.jsx             # Entry point
│   └── index.css            # ★ EDIT COLORS HERE — 10 theme classes
├── screenshots/             # 11 preview images (home + 10 templates)
├── vercel.json              # Vercel deployment config
├── README.md                # Full documentation + customization guide
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

## Customization
- **Content:** Edit `src/templates/<name>/data.js` (business name, text, phone, address, prices, etc.)
- **Colors:** Edit `src/index.css` under `.theme-<name>` CSS classes (RGB values)
- **Icons:** All Lucide icons available — import in data.js
- **Layout variants:** Each template exports heroVariant, aboutVariant, servicesVariant, etc.

## How to Run Locally
```bash
cd C:/tmp/business-templates
npm install
npm run dev
# Opens at http://localhost:3000
```

## Git Commits
1. `7189911` — Initial commit: 15 templates
2. `18067a2` — Reorganize into subfolders, add screenshots, update README
