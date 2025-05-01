
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const Statistics = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    {
      value: "+3824",
      label: t.stats.cases,
    },
    {
      value: "97%",
      label: t.stats.satisfaction,
    },
    {
      value: "+75%",
      label: t.stats.success,
    },
    {
      value: "12",
      label: t.stats.members,
    },
  ];

  return (
    <section className="py-16 bg-dark relative">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1473177104440-ffee2f376098" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-dark/70"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="section-heading text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {t.stats.heading}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              <div className="gold-border-gradient inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 mx-auto">
                <span className="text-gold text-3xl font-bold">{stat.value}</span>
              </div>
              <p className="text-white/90 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
