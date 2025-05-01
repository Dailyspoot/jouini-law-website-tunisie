
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={() => setLanguage('fr')}
        className={`text-xs font-medium px-2 py-1 rounded transition-all ${language === 'fr' ? 'bg-gold text-dark font-bold' : 'text-white/80 hover:text-white'}`}
      >
        FR
      </button>
      <span className="text-white/50">|</span>
      <button 
        onClick={() => setLanguage('ar')}
        className={`text-xs font-medium px-2 py-1 rounded transition-all ${language === 'ar' ? 'bg-gold text-dark font-bold' : 'text-white/80 hover:text-white'}`}
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSwitcher;
