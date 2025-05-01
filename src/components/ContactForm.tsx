
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would typically send the form data to a server
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    // Show success message (in a real app, you would use your toast component)
    alert(t.contact.successMessage);
  };

  return (
    <section id="contact" className="py-16 bg-dark relative">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1527576539890-dfa815648363" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark to-dark/80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="section-heading" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {t.contact.heading}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <h3 className="text-2xl font-playfair font-semibold text-gold mb-6">
              {t.contact.info}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-dark-light p-3 rounded-full">
                  <MapPin className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{t.contact.address.label}</h4>
                  <p className="text-white/70 mt-1">
                    {t.contact.address.line1}<br />
                    {t.contact.address.line2}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-dark-light p-3 rounded-full">
                  <Phone className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{t.contact.phone.label}</h4>
                  <p className="text-white/70 mt-1">
                    <a href="tel:+21671240291" className="hover:text-gold transition-colors">+216 71 240 291</a><br />
                    <a href="tel:+21671240787" className="hover:text-gold transition-colors">+216 71 240 787</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-dark-light p-3 rounded-full">
                  <Mail className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{t.contact.email.label}</h4>
                  <p className="text-white/70 mt-1">
                    <a href="mailto:contact@jouini-law.com" className="hover:text-gold transition-colors">
                      contact@jouini-law.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white font-medium mb-3">{t.contact.reviews}</h4>
              <div className="bg-dark-light p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-white ml-2">(4.9/5)</span>
                </div>
                <p className="text-white/80 text-sm italic">
                  "Excellent service, professional advice throughout my case. Highly recommended."
                </p>
              </div>
            </div>
          </div>
          
          <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="law-card p-6 rounded-lg">
              <h3 className="text-xl font-playfair font-semibold text-gold mb-6">
                {t.contact.form.title}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    {t.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={t.contact.form.namePlaceholder}
                    required
                    className="bg-dark-light border-dark-lighter text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    {t.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                    className="bg-dark-light border-dark-lighter text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                    {t.contact.form.phone}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder={t.contact.form.phonePlaceholder}
                    className="bg-dark-light border-dark-lighter text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={4}
                    required
                    className="bg-dark-light border-dark-lighter text-white resize-none"
                  />
                </div>
                
                <div className="pt-2">
                  <Button type="submit" className="w-full bg-gold hover:bg-gold-light text-dark">
                    {t.contact.form.submit}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
