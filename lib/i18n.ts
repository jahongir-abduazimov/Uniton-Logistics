export type Locale = 'en' | 'ru';

export const locales: Locale[] = ['en', 'ru'];
export const defaultLocale: Locale = 'en';

export interface Translations {
  locale: Locale;
  header: {
    nav: {
      services: string;
      about: string;
      advantages: string;
      contact: string;
    };
  };
  hero: {
    headline: string;
    subtitle: string;
    getQuote: string;
    contactUs: string;
  };
  services: {
    title: string;
    intro: string;
    items: {
      freightForwarding: {
        title: string;
        description: string;
      };
      containerLogistics: {
        title: string;
        description: string;
      };
      roadTransport: {
        title: string;
        description: string;
      };
      seaTransport: {
        title: string;
        description: string;
      };
      railTransport: {
        title: string;
        description: string;
      };
      airTransport: {
        title: string;
        description: string;
      };
    };
  };
  about: {
    title: string;
    description: string;
  };
  advantages: {
    subtitle: string;
    title: string;
    items: {
      reliability: string;
      transparency: string;
      flexibility: string;
      efficiency: string;
      optimalRoutes: string;
      professionalism: string;
    };
  };
  statistics: {
    yearsExperience: string;
    deliveredCargos: string;
    partnerCompanies: string;
    countriesCovered: string;
  };
  directions: {
    title: string;
    subtitle: string;
    sendRequest: string;
    items: Array<{
      key: string;
      name: string;
      serviceType: string;
      services: string[];
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      surname: string;
      email: string;
      company: string;
      phone: string;
      from: string;
      to: string;
      cargoDescription: string;
      submit: string;
    };
    info: {
      phone: string;
      email: string;
      address: string;
    };
  };
  cargoTypes: {
    title: string;
    subtitle: string;
    items: {
      constructionMaterials: string;
      motorOils: string;
      paper: string;
      agriculturalMachinery: string;
      householdChemicals: string;
      medicines: string;
      industrialTextiles: string;
      foodProducts: string;
      industrialRawMaterials: string;
      dangerousGoods: string;
      veterinaryCargo: string;
      autoParts: string;
    };
  };
  footer: {
    slogan: string;
    copyright: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    locale: 'en',
    header: {
      nav: {
        services: 'Services',
        about: 'About',
        advantages: 'Advantages',
        contact: 'Contact',
      },
    },
    hero: {
      headline: 'Reliable Logistics Solutions for Your Business',
      subtitle: 'International & Local Freight Services',
      getQuote: 'Get a Quote',
      contactUs: 'Contact Us',
    },
    services: {
      title: 'What we offer',
      intro: 'Every day we make maximum efforts to ensure our clients have access to the best service.',
      items: {
        freightForwarding: {
          title: 'Freight forwarding',
          description: 'Our team of professionals strives to ensure safe and efficient transportation of your goods in compliance with all applicable rules and requirements.',
        },
        containerLogistics: {
          title: 'Container logistics',
          description: 'Container shipping is a reliable, efficient, and economically viable way to transport goods over long distances. We organize the delivery of less-than-container-load (LCL) and full-container-load (FCL) shipments.',
        },
        roadTransport: {
          title: 'Road transport',
          description: 'Delivery of goods by road transport offers several advantages for business, including speed, economic benefit, accessibility, and real-time tracking. We offer transportation by less-than-truckload (LTL) and full-truckload (FTL) vehicles.',
        },
        seaTransport: {
          title: 'Sea transport',
          description: 'This is a convenient way to transport goods over long distances. Sea transport is an economically viable, high-capacity, and environmentally friendly method of transportation.',
        },
        railTransport: {
          title: 'Rail transport',
          description: 'Rail shipments can be very effective for business, especially when it comes to transporting large volumes of goods over long distances.',
        },
        airTransport: {
          title: 'Air transport',
          description: 'Delivery of goods by air transport has several advantages for business, including speed, reliability, global reach, safety, and reduced inventory costs.',
        },
      },
    },
    about: {
      title: 'About Us',
      description:
        'With years of experience in the logistics industry, we provide reliable and efficient transportation solutions. Our team is committed to delivering your cargo safely and on time, ensuring the highest standards of service quality.',
    },
    advantages: {
      subtitle: 'ADVANTAGES OF WORK',
      title: 'Cooperation with Uniton Logistics',
      items: {
        reliability: 'Reliability and safety of delivery',
        transparency: 'Transparency of all stages of transportation',
        flexibility: 'Flexibility and individual approach to each client',
        efficiency: 'Efficiency and timely execution of orders',
        optimalRoutes: 'Optimal routes and delivery schemes',
        professionalism: 'Professionalism and experience of our specialists',
      },
    },
    statistics: {
      yearsExperience: 'Years of Experience',
      deliveredCargos: 'Delivered Cargos',
      partnerCompanies: 'Partner Companies',
      countriesCovered: 'Countries Covered',
    },
    directions: {
      title: 'Directions',
      subtitle: 'We provide logistics services to various regions around the world',
      sendRequest: 'Send Request',
      items: [
        {
          key: 'europe',
          name: 'Europe',
          serviceType: 'Import / Export',
          services: [
            'Road transport',
            'Rail transport',
            'Multimodal transport',
          ],
        },
        {
          key: 'china',
          name: 'China',
          serviceType: 'Export',
          services: [
            'Road transport',
            'Rail transport',
            'Multimodal transport',
          ],
        },
        {
          key: 'turkey',
          name: 'Turkey',
          serviceType: 'Import / Export',
          services: [
            'Road transport',
            'Rail transport',
            'Multimodal transport',
          ],
        },
        {
          key: 'kazakhstan',
          name: 'Kazakhstan',
          serviceType: 'Import / Export',
          services: [
            'Road transport',
            'Rail transport',
            'Multimodal transport',
          ],
        },
        {
          key: 'asia',
          name: 'Asia',
          serviceType: 'Import / Export',
          services: [
            'Road transport',
            'Rail transport',
            'Multimodal transport',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact Us and Find Out',
      subtitle: 'How to quickly, safely, and profitably deliver cargo to the desired destination',
      form: {
        name: 'Name',
        surname: 'Surname',
        email: 'Email',
        company: 'Company',
        phone: 'Phone Number',
        from: 'From',
        to: 'To',
        cargoDescription: 'Cargo Description',
        submit: 'Send Request',
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
      },
    },
    cargoTypes: {
      title: 'Types of Cargo',
      subtitle: 'We transport various types of cargo with care and professionalism',
      items: {
        constructionMaterials: 'Construction and finishing materials',
        motorOils: 'Motor oils',
        paper: 'Paper',
        agriculturalMachinery: 'Agricultural machinery',
        householdChemicals: 'Household and industrial chemicals',
        medicines: 'Medicines',
        industrialTextiles: 'Industrial textiles',
        foodProducts: 'Food products',
        industrialRawMaterials: 'Industrial raw materials and equipment',
        dangerousGoods: 'ADR dangerous goods',
        veterinaryCargo: 'Veterinary and phytosanitary cargo',
        autoParts: 'Auto parts',
      },
    },
    footer: {
      slogan: 'Your trusted partner in logistics',
      copyright: 'Uniton Logistics. All rights reserved.',
    },
  },
  ru: {
    locale: 'ru',
    header: {
      nav: {
        services: 'Услуги',
        about: 'О нас',
        advantages: 'Преимущества',
        contact: 'Контакты',
      },
    },
    hero: {
      headline: 'Надежные логистические решения для вашего бизнеса',
      subtitle: 'Международные и местные грузоперевозки',
      getQuote: 'Получить расчет',
      contactUs: 'Связаться с нами',
    },
    services: {
      title: 'Что мы предлагаем',
      intro: 'Каждый день мы прилагаем максимум усилий, чтобы нашим клиентам был доступен лучший сервис.',
      items: {
        freightForwarding: {
          title: 'Экспедирование грузов',
          description: 'Наша команда профессионалов стремится обеспечить безопасную и эффективную транспортировку ваших товаров с соблюдением всех применимых правил и требований.',
        },
        containerLogistics: {
          title: 'Контейнерная логистика',
          description: 'Контейнерные перевозки - это надежный, эффективный и экономически выгодный способ транспортировки товаров на дальние расстояния. Мы организуем доставку консолидированных грузов (LCL) и транспортировку полных контейнеров (FCL).',
        },
        roadTransport: {
          title: 'Автомобильные перевозки',
          description: 'Доставка грузов автомобильным транспортом предоставляет несколько преимуществ для бизнеса, включая скорость, экономическую выгоду, доступность и возможность отслеживания в режиме реального времени. Мы предлагаем транспортировку консолидированными машинами (LTL) и полными грузовиками (FTL).',
        },
        seaTransport: {
          title: 'Морские перевозки',
          description: 'Это удобный способ транспортировки грузов на большие расстояния. Морские перевозки являются экономически выгодным, вместительным и экологически чистым способом транспортировки.',
        },
        railTransport: {
          title: 'Железнодорожные перевозки',
          description: 'Отправки по железной дороге могут быть очень эффективны для бизнеса, особенно когда речь идет о транспортировке больших объемов грузов на дальние расстояния.',
        },
        airTransport: {
          title: 'Авиационные перевозки',
          description: 'Доставка грузов авиатранспортом имеет несколько преимуществ для бизнеса, включая скорость, надежность, глобальный охват, безопасность и снижение затрат на инвентаризацию.',
        },
      },
    },
    about: {
      title: 'О нас',
      description:
        'Имея многолетний опыт в логистической отрасли, мы предоставляем надежные и эффективные решения для транспортировки. Наша команда стремится доставить ваш груз безопасно и вовремя, обеспечивая высочайшие стандарты качества обслуживания.',
    },
    advantages: {
      subtitle: 'ПРЕИМУЩЕСТВА РАБОТЫ',
      title: 'Сотрудничество с Uniton Logistics',
      items: {
        reliability: 'Надежность и безопасность доставки',
        transparency: 'Прозрачность всех этапов транспортировки',
        flexibility: 'Гибкость и индивидуальный подход к каждому клиенту',
        efficiency: 'Оперативность и своевременность выполнения заказов',
        optimalRoutes: 'Оптимальные маршруты и схемы доставки',
        professionalism: 'Профессионализм и опыт наших специалистов',
      },
    },
    statistics: {
      yearsExperience: 'Лет опыта',
      deliveredCargos: 'Доставленных грузов',
      partnerCompanies: 'Компаний-партнеров',
      countriesCovered: 'Стран покрытия',
    },
    directions: {
      title: 'Направления',
      subtitle: 'Мы предоставляем логистические услуги в различные регионы по всему миру',
      sendRequest: 'Отправить запрос',
      items: [
        {
          key: 'europe',
          name: 'Европа',
          serviceType: 'Импорт / Экспорт',
          services: [
            'Авто перевозки',
            'Ж/д перевозки',
            'Мультимодальные перевозки',
          ],
        },
        {
          key: 'china',
          name: 'Китай',
          serviceType: 'Экспорт',
          services: [
            'Авто перевозки',
            'Ж/д перевозки',
            'Мультимодальные перевозки',
          ],
        },
        {
          key: 'turkey',
          name: 'Турция',
          serviceType: 'Импорт / Экспорт',
          services: [
            'Авто перевозки',
            'Ж/д перевозки',
            'Мультимодальные перевозки',
          ],
        },
        {
          key: 'kazakhstan',
          name: 'Казахстан',
          serviceType: 'Импорт / Экспорт',
          services: [
            'Авто перевозки',
            'Ж/д перевозки',
            'Мультимодальные перевозки',
          ],
        },
        {
          key: 'asia',
          name: 'Азия',
          serviceType: 'Импорт / Экспорт',
          services: [
            'Авто перевозки',
            'Ж/д перевозки',
            'Мультимодальные перевозки',
          ],
        },
      ],
    },
    contact: {
      title: 'СВЯЖИТЕСЬ С НАМИ И УЗНАЙТЕ',
      subtitle: 'Как быстро, безопасно и выгодно доставить груз в нужный пункт назначения',
      form: {
        name: 'Имя',
        surname: 'Фамилия',
        email: 'Электронная почта',
        company: 'Компания',
        phone: 'Номер телефона',
        from: 'От',
        to: 'К',
        cargoDescription: 'Описание груза',
        submit: 'Отправить заявку',
      },
      info: {
        phone: 'Телефон',
        email: 'Email',
        address: 'Адрес',
      },
    },
    cargoTypes: {
      title: 'Виды грузов',
      subtitle: 'Мы перевозим различные виды грузов с заботой и профессионализмом',
      items: {
        constructionMaterials: 'Строительные и отделочные материалы',
        motorOils: 'Моторные масла',
        paper: 'Бумага',
        agriculturalMachinery: 'Сельскохозяйственная техника',
        householdChemicals: 'Бытовая и промышленная химия',
        medicines: 'Медикаменты',
        industrialTextiles: 'Промышленный текстиль',
        foodProducts: 'Продукты питания',
        industrialRawMaterials: 'Производственное сырье и оборудование',
        dangerousGoods: 'Опасные грузы ADR',
        veterinaryCargo: 'Ветеринарные и фитогрузы',
        autoParts: 'Автозапчасти',
      },
    },
    footer: {
      slogan: 'Ваш надежный партнер в логистике',
      copyright: 'Uniton Logistics. Все права защищены.',
    },
  },
};

