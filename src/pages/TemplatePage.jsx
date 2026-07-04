import { useEffect } from 'react';
import Navbar from '../components/sections/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import GallerySection from '../components/sections/GallerySection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FaqSection from '../components/sections/FaqSection';
import ContactSection from '../components/sections/ContactSection';
import GoogleMapsSection from '../components/sections/GoogleMapsSection';
import FooterSection from '../components/sections/FooterSection';
import WhatsAppButton from '../components/sections/WhatsAppButton';

export default function TemplatePage({ data }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.id]);

  return (
    <div className={data.theme || ''}>
      <Navbar brand={data.brand} navLinks={data.navLinks} />
      <main>
        <section id="home">
          <HeroSection hero={data.hero} brand={data.brand} variant={data.heroVariant} />
        </section>
        <AboutSection about={data.about} variant={data.aboutVariant} />
        <ServicesSection services={{ title: data.services.title, subtitle: data.services.subtitle, items: data.services.items }} variant={data.servicesVariant} />
        <GallerySection gallery={{ title: data.gallery.title, subtitle: data.gallery.subtitle, items: data.gallery.items }} variant={data.galleryVariant} />
        <TestimonialsSection testimonials={{ title: data.testimonials.title, subtitle: data.testimonials.subtitle, items: data.testimonials.items }} variant={data.testimonialsVariant} />
        <FaqSection faq={{ title: data.faq.title, subtitle: data.faq.subtitle, items: data.faq.items }} variant={data.faqVariant} />
        <ContactSection contact={data.contact} variant={data.contactVariant} />
        <GoogleMapsSection address={data.mapAddress} />
      </main>
      <FooterSection footer={data.footer} social={data.social} />
      <WhatsAppButton phone={data.whatsapp?.phone} message={data.whatsapp?.message} />
    </div>
  );
}
