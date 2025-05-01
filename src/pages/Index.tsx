
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SpecialtiesOverview from '@/components/SpecialtiesOverview';
import AboutLawyer from '@/components/AboutLawyer';
import AreasOfExpertise from '@/components/AreasOfExpertise';
import Statistics from '@/components/Statistics';
import ServicesOverview from '@/components/ServicesOverview';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark">
        <Header />
        <Hero />
        <SpecialtiesOverview />
        <AboutLawyer />
        <AreasOfExpertise />
        <Statistics />
        <ServicesOverview />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
