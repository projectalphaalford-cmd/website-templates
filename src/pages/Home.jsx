import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Code, Palette, Smartphone } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const templates = [
  { id: 'tuition-center', name: 'Tuition Center', desc: 'Education & tutoring services', color: 'bg-blue-600', icon: '🎓' },
  { id: 'dance-academy', name: 'Dance Academy', desc: 'Dance classes & studios', color: 'bg-pink-600', icon: '💃' },
  { id: 'school', name: 'School', desc: 'Educational institutions', color: 'bg-green-600', icon: '🏫' },
  { id: 'stationery', name: 'Stationery Shop', desc: 'Stationery & art supplies', color: 'bg-teal-600', icon: '✏️' },
  { id: 'restaurant', name: 'Restaurant', desc: 'Fine dining & eateries', color: 'bg-red-700', icon: '🍽️' },
  { id: 'gym', name: 'Gym', desc: 'Fitness centers & gyms', color: 'bg-orange-600', icon: '💪' },
  { id: 'medical-clinic', name: 'Medical Clinic', desc: 'Healthcare & clinics', color: 'bg-cyan-600', icon: '🏥' },
  { id: 'salon', name: 'Salon', desc: 'Beauty salons & spas', color: 'bg-rose-600', icon: '💇' },
  { id: 'clothing-store', name: 'Clothing Store', desc: 'Fashion boutiques', color: 'bg-violet-600', icon: '👗' },
  { id: 'electronics', name: 'Electronics Shop', desc: 'Tech & electronics', color: 'bg-blue-700', icon: '📱' },
];

const features = [
  { icon: Palette, title: '10 Unique Designs', desc: 'Each template is uniquely styled for its industry with custom color schemes.' },
  { icon: Smartphone, title: 'Fully Responsive', desc: 'Every template looks perfect on desktop, tablet, and mobile devices.' },
  { icon: Code, title: 'Easy to Customize', desc: 'Clean, modular React components with Tailwind CSS. Edit content in data files.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-24 md:py-36">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              🚀 10 Templates Ready to Deploy
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Professional Website Templates
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Modern, production-ready templates for local businesses. Built with React, Vite, and Tailwind CSS.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="#templates" variant="white" size="lg">
                Browse Templates <ArrowRight size={20} />
              </Button>
              <a
                href="https://github.com/projectalphaalford-cmd/website-templates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
              >
                <ExternalLink size={20} /> View on GitHub
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="border-b border-zinc-100 py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                  <f.icon size={28} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Template Grid */}
      <section id="templates" className="py-20 md:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Choose Your Template</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
              Each includes Hero, About, Services, Gallery, Testimonials, FAQ, Contact, Maps, WhatsApp, and Footer.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <Link
                key={t.id}
                to={`/template/${t.id}`}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`flex h-20 w-20 items-center justify-center rounded-2xl text-3xl ${t.color} bg-opacity-10`}>
                  <span>{t.icon}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-zinc-900 group-hover:text-indigo-600">{t.name}</h3>
                <p className="mt-1 text-zinc-600">{t.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-indigo-600">
                  Preview <ArrowRight size={16} />
                </div>
                <div className={`absolute right-0 top-0 h-1 w-full ${t.color}`} />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* How to use */}
      <section className="bg-zinc-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Get Started in Minutes</h2>
            <div className="mt-12 grid gap-8 text-left">
              {[
                { step: '01', title: 'Clone the Repository', desc: 'git clone https://github.com/projectalphaalford-cmd/website-templates.git && cd website-templates' },
                { step: '02', title: 'Install Dependencies', desc: 'npm install' },
                { step: '03', title: 'Run Locally', desc: 'npm run dev — Opens at http://localhost:3000' },
                { step: '04', title: 'Deploy to Vercel', desc: 'Click "Deploy" or run: npx vercel --prod' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                    <p className="mt-1 font-mono text-sm text-zinc-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-12 text-center text-zinc-400">
        <Container>
          <p className="text-sm">
            Built with React, Vite & Tailwind CSS. Free to use for personal and commercial projects.
          </p>
          <p className="mt-2 text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Business Templates. MIT License.
          </p>
        </Container>
      </footer>
    </div>
  );
}
