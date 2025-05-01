
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="home" className="relative h-[70vh] md:h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-dark">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
          alt="Law firm building" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.hero.heading1} <br/>
            <span className="text-gold">{t.hero.heading2}</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90 mb-8">
            {t.hero.slogan1} <br/>
            <span className="italic gold-gradient font-semibold">{t.hero.slogan2}</span>
          </p>
          <a href="https://wa.me/21671240291" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-md bg-gold text-dark font-medium hover:bg-gold-light transition-colors gap-2">
            <MessageCircle size={18} />
            {t.hero.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
