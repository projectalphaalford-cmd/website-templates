# Business Website Templates 🚀

A production-ready collection of **15 professional website templates** for local businesses. Built with **React 18**, **Vite 5**, and **Tailwind CSS 3**. Deploy any template to Vercel in under 2 minutes.

## ✨ Features

- **15 Industry Templates** — Tuition Center, Dance Academy, School, Gym, Restaurant, Cafe, Stationery, Medical Clinic, Salon, Clothing Store, Electronics, Real Estate, Travel Agency, Photography, Personal Portfolio
- **Complete Page Sections** — Hero, About, Services, Gallery, Testimonials, FAQ, Contact Form, Google Maps, WhatsApp, Footer
- **Modern Tech Stack** — React 18, Vite 5, Tailwind CSS 3, React Router 6
- **Fully Responsive** — Mobile-first design, works on all devices
- **Beautiful UI** — Premium design with animations, lightbox, carousels, and filters
- **SEO Friendly** — Semantic HTML, meta tags, fast loading
- **Easy to Customize** — Edit content in data files, change colors via CSS variables
- **One-Click Deploy** — Ready for Vercel deployment

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/business-templates.git
cd business-templates

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
business-templates/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Input.jsx
│   │   │   └── SectionHeading.jsx
│   │   └── sections/        # Reusable section components
│   │       ├── Navbar.jsx
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── ServicesSection.jsx
│   │       ├── GallerySection.jsx
│   │       ├── TestimonialsSection.jsx
│   │       ├── FaqSection.jsx
│   │       ├── ContactSection.jsx
│   │       ├── GoogleMapsSection.jsx
│   │       ├── FooterSection.jsx
│   │       └── WhatsAppButton.jsx
│   ├── data/                # Template content (edit these to customize)
│   │   ├── tuition-center.js
│   │   ├── dance-academy.js
│   │   ├── school.js
│   │   ├── gym.js
│   │   ├── restaurant.js
│   │   ├── cafe.js
│   │   ├── stationery.js
│   │   ├── medical-clinic.js
│   │   ├── salon.js
│   │   ├── clothing-store.js
│   │   ├── electronics.js
│   │   ├── real-estate.js
│   │   ├── travel-agency.js
│   │   ├── photography.js
│   │   └── portfolio.js
│   ├── hooks/               # Custom React hooks
│   │   └── useInView.js
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   └── TemplatePage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── vercel.json
└── package.json
```

## 🎨 Customization Guide

### Changing Content

Each template has a data file in `src/data/`. Edit the file to change text, prices, images, phone numbers, etc.

```js
// Example: src/data/restaurant.js
export const brand = { name: 'Your Restaurant Name', tagline: 'Your Tagline' };
export const hero = { title: 'Your Headline', subtitle: 'Your subtitle here' };
export const contact = { email: 'you@example.com', phone: '+1 (555) 000-0000' };
export const whatsapp = { phone: '+15550000000' };
export const mapAddress = 'Your Address';
```

### Changing Colors

Colors are defined via CSS custom properties in `src/index.css`. Each template has a theme class:

```css
.theme-restaurant {
  --color-brand: 185 28 28;       /* Primary color (RGB values) */
  --color-brand-light: 239 68 68;  /* Lighter shade */
  --color-brand-dark: 153 27 27;   /* Darker shade */
  --color-brand-muted: 254 202 202; /* Muted/pastel shade */
}
```

To change a template's colors, edit its `--color-*` values in `src/index.css`.

### Adding Images

The templates use placeholder gradients. Replace with actual images by modifying the section components or adding an `image` field to the data files.

## 🌐 Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fbusiness-templates)

Click the button above, log in with GitHub, and your project is live in under 2 minutes.

### Option 2: CLI Deploy

```bash
npm i -g vercel
vercel --prod
```

### Option 3: Git Integration

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Vercel auto-detects Vite — just click Deploy

### After Deployment

Each template is available at:
- `https://your-project.vercel.app/template/tuition-center`
- `https://your-project.vercel.app/template/restaurant`
- `https://your-project.vercel.app/template/gym`
- etc.

The landing page with all templates: `https://your-project.vercel.app/`

## 📱 Templates Available

| Template | Route | Best For |
|----------|-------|----------|
| 🎓 Tuition Center | `/template/tuition-center` | Education & tutoring |
| 💃 Dance Academy | `/template/dance-academy` | Dance schools & studios |
| 🏫 School | `/template/school` | Educational institutions |
| 💪 Gym | `/template/gym` | Fitness centers |
| 🍽️ Restaurant | `/template/restaurant` | Fine dining & eateries |
| ☕ Cafe | `/template/cafe` | Coffee shops & cafes |
| ✏️ Stationery Shop | `/template/stationery` | Stationery & art supplies |
| 🏥 Medical Clinic | `/template/medical-clinic` | Healthcare & clinics |
| 💇 Salon | `/template/salon` | Beauty salons & spas |
| 👗 Clothing Store | `/template/clothing-store` | Fashion boutiques |
| 📱 Electronics Shop | `/template/electronics` | Tech & electronics |
| 🏠 Real Estate | `/template/real-estate` | Property & realty |
| ✈️ Travel Agency | `/template/travel-agency` | Travel & tours |
| 📷 Photography Studio | `/template/photography` | Photography services |
| 👤 Portfolio | `/template/portfolio` | Personal portfolio |

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first CSS framework
- **React Router 6** — Client-side routing
- **Lucide React** — Icon library
- **Vercel** — Deployment platform

## 📄 License

This project is licensed under the MIT License — free to use for personal and commercial projects.

## 🤝 Contributing

Contributions are welcome! Feel free to add new templates, improve existing ones, or fix issues.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-template`)
3. Commit your changes (`git commit -m 'Add amazing template'`)
4. Push to the branch (`git push origin feature/amazing-template`)
5. Open a Pull Request
