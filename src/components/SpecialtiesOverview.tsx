
import React from 'react';
import { Building, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const SpecialtiesOverview = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const specialties = [
    {
      icon: <Building className="text-gold w-12 h-12" />,
      title: t.specialties.real_estate.title,
      description: t.specialties.real_estate.description,
    },
    {
      icon: <Users className="text-gold w-12 h-12" />,
      title: t.specialties.family.title,
      description: t.specialties.family.description,
    },
    {
      icon: <Briefcase className="text-gold w-12 h-12" />,
      title: t.specialties.business.title,
      description: t.specialties.business.description,
    },
  ];

  return (
    <section id="specialties-overview" className="py-16 bg-dark-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="law-card rounded-lg p-6 flex flex-col items-center"
            >
              <div className="mb-4">
                {specialty.icon}
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3 text-gold">{specialty.title}</h3>
              <p className="text-white/80 text-sm">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesOverview;
