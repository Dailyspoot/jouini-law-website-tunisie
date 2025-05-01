
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const AboutLawyer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-16 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {t.about.heading}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`${language === 'ar' ? 'order-1' : 'order-1 md:order-0'}`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold opacity-50 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" 
                alt="Maître Sami JOUINI" 
                className="w-full h-[400px] object-cover rounded-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold opacity-50 z-0"></div>
            </div>
          </div>
          
          <div className={`${language === 'ar' ? 'order-0 text-right' : 'order-0 md:order-1'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <h3 className="text-2xl font-playfair font-bold mb-4 text-white">
              {t.about.lawyerName}
            </h3>
            <p className="text-gold mb-2 font-medium">{t.about.lawyerTitle}</p>
            <p className="text-white/80 mb-6">
              {t.about.description}
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gold/20 text-gold">01</span>
                <p className="font-medium text-white">{t.about.values.humanity}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gold/20 text-gold">02</span>
                <p className="font-medium text-white">{t.about.values.independence}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gold/20 text-gold">03</span>
                <p className="font-medium text-white">{t.about.values.confidentiality}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-playfair font-bold mb-6 text-center text-white">
            {t.about.videoTitle}
          </h3>
          <div className="aspect-w-16 aspect-h-9">
            <div className="w-full h-0 pt-[56.25%] relative bg-dark-light rounded-lg overflow-hidden">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Cabinet Sami JOUINI & Associés"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLawyer;
