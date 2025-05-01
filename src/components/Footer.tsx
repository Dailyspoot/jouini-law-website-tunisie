
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import GoogleMap from './GoogleMap';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white/80">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <h3 className="text-xl font-playfair font-semibold text-gold mb-6">
              {t.footer.about}
            </h3>
            <div className="mb-6">
              <a href="#" className="text-white font-playfair font-bold text-xl block mb-3">
                Cabinet Sami JOUINI <span className="text-gold">&</span> Associés
              </a>
              <p className="text-white/70 text-sm">
                {t.footer.description}
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-dark-light flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-dark-light flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-dark-light flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <h3 className="text-xl font-playfair font-semibold text-gold mb-6">
              {t.footer.contact}
            </h3>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={18} />
                <span>
                  Rue du Lac Turkana, Immeuble Malak,<br />
                  1053 Les Berges du Lac, Tunis
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-gold flex-shrink-0" size={18} />
                <span>
                  +216 71 240 291<br />
                  +216 71 240 787
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-gold flex-shrink-0" size={18} />
                <span>contact@jouini-law.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold text-gold mb-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {t.footer.location}
            </h3>
            <GoogleMap />
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            © {currentYear} Cabinet Sami JOUINI & Associés. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
