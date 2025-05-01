
import React from 'react';
import { Phone, MapPin, Mail, Menu, X, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      {/* Top header with contact info */}
      <div className="bg-dark-light py-2 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 text-sm text-white/80 mb-2 md:mb-0 flex-wrap justify-center md:justify-start">
            <div className="flex items-center gap-1">
              <Phone size={14} className="text-gold" />
              <a href="tel:+21671240291" className="hover:text-gold transition-colors">+216 71 240 291</a>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={14} className="text-gold" />
              <a href="tel:+21671240787" className="hover:text-gold transition-colors">+216 71 240 787</a>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} className="text-gold" />
              <a href="mailto:contact@jouini-law.com" className="hover:text-gold transition-colors">contact@jouini-law.com</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a href="https://wa.me/21671240291" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 hover:bg-opacity-90 transition-colors">
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <div className="bg-dark/90 backdrop-blur-md py-4 px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white font-playfair font-bold text-xl md:text-2xl">
            <span className="text-lg md:text-xl">Cabinet</span><br />
            Sami JOUINI <span className="text-gold">&</span> Associés
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden text-white p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-white hover:text-gold transition-colors">{t.nav.home}</a>
            <a href="#about" className="text-white hover:text-gold transition-colors">{t.nav.about}</a>
            <a href="#specialties" className="text-white hover:text-gold transition-colors">{t.nav.specialties}</a>
            <a href="#news" className="text-white hover:text-gold transition-colors">{t.nav.news}</a>
            <a href="#contact" className="text-white hover:text-gold transition-colors">{t.nav.contact}</a>
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-dark-light absolute w-full z-50 py-4 px-6 flex flex-col gap-4 shadow-lg animate-fade-in">
          <a href="#home" className="text-white hover:text-gold transition-colors" onClick={toggleMenu}>
            {t.nav.home}
          </a>
          <a href="#about" className="text-white hover:text-gold transition-colors" onClick={toggleMenu}>
            {t.nav.about}
          </a>
          <a href="#specialties" className="text-white hover:text-gold transition-colors" onClick={toggleMenu}>
            {t.nav.specialties}
          </a>
          <a href="#news" className="text-white hover:text-gold transition-colors" onClick={toggleMenu}>
            {t.nav.news}
          </a>
          <a href="#contact" className="text-white hover:text-gold transition-colors" onClick={toggleMenu}>
            {t.nav.contact}
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
