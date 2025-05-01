
import React from 'react';
import { Briefcase, TrendingUp, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const AreasOfExpertise = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const expertiseAreas = [
    {
      icon: <Briefcase className="w-10 h-10 text-gold" />,
      title: t.expertise.labor.title,
      description: t.expertise.labor.description,
    },
    {
      icon: <Briefcase className="w-10 h-10 text-gold" />,
      title: t.expertise.commercial.title,
      description: t.expertise.commercial.description,
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-gold" />,
      title: t.expertise.investment.title,
      description: t.expertise.investment.description,
    },
    {
      icon: <Briefcase className="w-10 h-10 text-gold" />,
      title: t.expertise.bankruptcy.title,
      description: t.expertise.bankruptcy.description,
    },
    {
      icon: <FileText className="w-10 h-10 text-gold" />,
      title: t.expertise.civil.title,
      description: t.expertise.civil.description,
    },
    {
      icon: <FileText className="w-10 h-10 text-gold" />,
      title: t.expertise.copyright.title,
      description: t.expertise.copyright.description,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dark-light to-dark">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {t.expertise.heading}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index} 
              className="law-card p-6 rounded-lg"
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  {area.icon}
                </div>
                <h3 className="text-lg font-playfair font-bold text-white">
                  {area.title}
                </h3>
              </div>
              <p className="text-white/70 text-sm">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;
