
interface Translation {
  nav: {
    home: string;
    about: string;
    specialties: string;
    news: string;
    contact: string;
  };
  hero: {
    heading1: string;
    heading2: string;
    slogan1: string;
    slogan2: string;
    button: string;
  };
  specialties: {
    real_estate: {
      title: string;
      description: string;
    };
    family: {
      title: string;
      description: string;
    };
    business: {
      title: string;
      description: string;
    };
  };
  about: {
    heading: string;
    lawyerName: string;
    lawyerTitle: string;
    description: string;
    values: {
      humanity: string;
      independence: string;
      confidentiality: string;
    };
    videoTitle: string;
  };
  expertise: {
    heading: string;
    labor: {
      title: string;
      description: string;
    };
    commercial: {
      title: string;
      description: string;
    };
    investment: {
      title: string;
      description: string;
    };
    bankruptcy: {
      title: string;
      description: string;
    };
    civil: {
      title: string;
      description: string;
    };
    copyright: {
      title: string;
      description: string;
    };
  };
  stats: {
    heading: string;
    cases: string;
    satisfaction: string;
    success: string;
    members: string;
  };
  services: {
    heading: string;
    consultation: {
      title: string;
      description: string;
    };
    audit: {
      title: string;
      description: string;
    };
    professional: {
      title: string;
      description: string;
    };
  };
  contact: {
    heading: string;
    info: string;
    address: {
      label: string;
      line1: string;
      line2: string;
    };
    phone: {
      label: string;
    };
    email: {
      label: string;
    };
    reviews: string;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    successMessage: string;
  };
  footer: {
    about: string;
    description: string;
    contact: string;
    location: string;
    rights: string;
  };
}

export const translations: Record<string, Translation> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "Notre cabinet",
      specialties: "Nos spécialités",
      news: "Actualités juridiques",
      contact: "Contactez-nous",
    },
    hero: {
      heading1: "Cabinet Sami JOUINI & Associés",
      heading2: "Avocats à la Cour",
      slogan1: "Il y a une seul sorte de justice",
      slogan2: "Un avocat qui connaît bien la loi",
      button: "Contactez-nous sur WhatsApp",
    },
    specialties: {
      real_estate: {
        title: "Droit Immobilier",
        description: "Assistance juridique complète pour toutes transactions immobilières, baux commerciaux et résidentiels, conseil en investissement immobilier.",
      },
      family: {
        title: "Droit de la famille",
        description: "Conseil et accompagnement dans les procédures de divorce, garde d'enfants, pensions alimentaires et successions.",
      },
      business: {
        title: "Droit des affaires",
        description: "Expertise en création d'entreprises, rédaction de contrats, fusions et acquisitions, droit des sociétés et contentieux commercial.",
      },
    },
    about: {
      heading: "Votre Avocat en Tunisie",
      lawyerName: "Maître Sami JOUINI",
      lawyerTitle: "Avocat à la Cour - Fondateur",
      description: "Avec plus de 20 ans d'expérience, notre cabinet d'avocats offre une expertise juridique de premier plan dans de nombreux domaines du droit. Notre engagement envers l'excellence et notre approche personnalisée nous permettent de défendre efficacement les intérêts de nos clients.",
      values: {
        humanity: "Humanité et écoute dans notre approche",
        independence: "Indépendance dans nos conseils et actions",
        confidentialité: "Confidentialité absolue des dossiers",
      },
      videoTitle: "Découvrez notre vision du métier d'avocat",
    },
    expertise: {
      heading: "Nos domaines d'expertise",
      labor: {
        title: "Droit du travail",
        description: "Conseil en contrats de travail, licenciements, négociations collectives et litiges employeur-employé.",
      },
      commercial: {
        title: "Droit commercial",
        description: "Expertise en droit des contrats commerciaux, distribution, concurrence et protection des consommateurs.",
      },
      investment: {
        title: "Investir en Tunisie",
        description: "Accompagnement des investisseurs étrangers, conseil sur la réglementation tunisienne et optimisation fiscale.",
      },
      bankruptcy: {
        title: "Droit des entreprises en difficulté",
        description: "Assistance dans les procédures de sauvegarde, redressement et liquidation judiciaire.",
      },
      civil: {
        title: "Droit Civil",
        description: "Représentation dans les litiges civils, droit des obligations, responsabilité civile et réparation du préjudice.",
      },
      copyright: {
        title: "Droit d'Auteur",
        description: "Protection des œuvres intellectuelles, gestion des droits d'auteur et lutte contre la contrefaçon.",
      },
    },
    stats: {
      heading: "Dans notre cabinet, on est toujours à votre écoute",
      cases: "Affaires traitées",
      satisfaction: "Clients satisfaits",
      success: "Taux de réussite",
      members: "Membres de l'équipe",
    },
    services: {
      heading: "Nos services",
      consultation: {
        title: "Des consultations juridiques fiables",
        description: "Conseils personnalisés adaptés à vos besoins spécifiques avec une analyse approfondie de votre situation.",
      },
      audit: {
        title: "Audit juridique",
        description: "Analyse complète de votre situation juridique pour identifier les risques et opportunités.",
      },
      professional: {
        title: "Des prestations professionnelles",
        description: "Services juridiques de qualité dans tous les domaines du droit, avec un engagement total pour défendre vos intérêts.",
      },
    },
    contact: {
      heading: "Contactez-nous",
      info: "Nos coordonnées",
      address: {
        label: "Adresse",
        line1: "Rue du Lac Turkana, Immeuble Malak,",
        line2: "1053 Les Berges du Lac, Tunis",
      },
      phone: {
        label: "Téléphone",
      },
      email: {
        label: "Email",
      },
      reviews: "Avis de nos clients",
      form: {
        title: "Contactez-nous vite pour une consultation juridique ou pour un conseil",
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "Votre adresse email",
        phone: "Téléphone",
        phonePlaceholder: "Votre numéro de téléphone",
        message: "Message",
        messagePlaceholder: "Votre message",
        submit: "Envoyer",
      },
      successMessage: "Merci pour votre message ! Nous vous contacterons rapidement.",
    },
    footer: {
      about: "À propos de nous",
      description: "Cabinet d'avocats d'affaires de premier plan en Tunisie, offrant des services juridiques complets aux entreprises et aux particuliers.",
      contact: "Contactez-nous",
      location: "Notre localisation",
      rights: "Tous droits réservés.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "مكتبنا",
      specialties: "مجالات تخصصنا",
      news: "الأخبار القانونية",
      contact: "اتصل بنا",
    },
    hero: {
      heading1: "مكتب سامي الجويني وشركاؤه",
      heading2: "محامون لدى المحكمة",
      slogan1: "هناك نوع واحد فقط من العدالة",
      slogan2: "محامي يعرف القانون جيدًا",
      button: "تواصل معنا عبر واتساب",
    },
    specialties: {
      real_estate: {
        title: "قانون العقارات",
        description: "مساعدة قانونية كاملة لجميع المعاملات العقارية، الإيجارات التجارية والسكنية، والاستشارات في الاستثمار العقاري.",
      },
      family: {
        title: "قانون الأسرة",
        description: "المشورة والدعم في إجراءات الطلاق، حضانة الأطفال، النفقة والميراث.",
      },
      business: {
        title: "قانون الأعمال",
        description: "خبرة في إنشاء الشركات، صياغة العقود، الاندماج والاستحواذ، قانون الشركات والمنازعات التجارية.",
      },
    },
    about: {
      heading: "محاميك في تونس",
      lawyerName: "الأستاذ سامي الجويني",
      lawyerTitle: "محام لدى المحكمة - المؤسس",
      description: "مع أكثر من 20 عامًا من الخبرة، يقدم مكتبنا خبرة قانونية رفيعة المستوى في العديد من مجالات القانون. التزامنا بالتميز ونهجنا الشخصي يمكننا من الدفاع عن مصالح عملائنا بفعالية.",
      values: {
        humanity: "الإنسانية والاستماع في نهجنا",
        independence: "الاستقلالية في نصائحنا وأعمالنا",
        confidentiality: "السرية المطلقة للملفات",
      },
      videoTitle: "اكتشف رؤيتنا لمهنة المحاماة",
    },
    expertise: {
      heading: "مجالات خبرتنا",
      labor: {
        title: "قانون العمل",
        description: "استشارات في عقود العمل، الفصل، المفاوضات الجماعية والنزاعات بين أصحاب العمل والموظفين.",
      },
      commercial: {
        title: "القانون التجاري",
        description: "خبرة في قانون العقود التجارية، التوزيع، المنافسة وحماية المستهلك.",
      },
      investment: {
        title: "الاستثمار في تونس",
        description: "مرافقة المستثمرين الأجانب، المشورة بشأن اللوائح التونسية وتحسين الضرائب.",
      },
      bankruptcy: {
        title: "قانون الشركات المتعثرة",
        description: "المساعدة في إجراءات الإنقاذ، إعادة الهيكلة والتصفية القضائية.",
      },
      civil: {
        title: "القانون المدني",
        description: "التمثيل في المنازعات المدنية، قانون الالتزامات، المسؤولية المدنية وتعويض الضرر.",
      },
      copyright: {
        title: "حقوق المؤلف",
        description: "حماية الأعمال الفكرية، إدارة حقوق المؤلف ومكافحة التقليد.",
      },
    },
    stats: {
      heading: "في مكتبنا، نحن دائمًا في خدمتكم",
      cases: "القضايا المعالجة",
      satisfaction: "العملاء الراضون",
      success: "معدل النجاح",
      members: "أعضاء الفريق",
    },
    services: {
      heading: "خدماتنا",
      consultation: {
        title: "استشارات قانونية موثوقة",
        description: "نصائح مخصصة تناسب احتياجاتك الخاصة مع تحليل متعمق لوضعك.",
      },
      audit: {
        title: "التدقيق القانوني",
        description: "تحليل شامل لوضعك القانوني لتحديد المخاطر والفرص.",
      },
      professional: {
        title: "خدمات مهنية",
        description: "خدمات قانونية عالية الجودة في جميع مجالات القانون، مع التزام كامل بالدفاع عن مصالحك.",
      },
    },
    contact: {
      heading: "اتصل بنا",
      info: "بيانات الاتصال",
      address: {
        label: "العنوان",
        line1: "شارع بحيرة توركانا، مبنى ملاك،",
        line2: "1053 ضفاف البحيرة، تونس",
      },
      phone: {
        label: "الهاتف",
      },
      email: {
        label: "البريد الإلكتروني",
      },
      reviews: "آراء عملائنا",
      form: {
        title: "اتصل بنا سريعًا للحصول على استشارة قانونية أو نصيحة",
        name: "الاسم",
        namePlaceholder: "أدخل اسمك",
        email: "البريد الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        phone: "الهاتف",
        phonePlaceholder: "أدخل رقم هاتفك",
        message: "الرسالة",
        messagePlaceholder: "اكتب رسالتك",
        submit: "إرسال",
      },
      successMessage: "شكرا لرسالتك! سنتواصل معك قريبا.",
    },
    footer: {
      about: "معلومات عنا",
      description: "مكتب محاماة رائد في تونس، يقدم خدمات قانونية شاملة للشركات والأفراد.",
      contact: "اتصل بنا",
      location: "موقعنا",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};
