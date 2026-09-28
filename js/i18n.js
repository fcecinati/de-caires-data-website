/* De Caires Data: i18next setup and translations.
   All translations are embedded here so the site works on any static host.
   Default language is picked from the domain (decairesdata.it -> Italian,
   everything else, including decairesdata.com, defaults to English); a manual
   EN | IT toggle in the nav overrides that and is remembered via
   localStorage for later visits.
   NOTE: the Italian strings are drafts for Francesca to review. */

(function () {
  'use strict';

  var resources = {
    en: {
      translation: {
        common: {
          comingSoon: 'Coming soon'
        },
        nav: {
          home: 'Home',
          consulting: 'Consulting',
          water: 'Water',
          digital: 'Digital',
          about: 'About',
          contact: 'Contact'
        },
        footer: {
          text: 'Data science and AI services: consulting, water sector analytics, and AI-enabled digital presence.',
          explore: 'Explore',
          contact: 'Contact',
          legal: '© 2026 De Caires Data. All rights reserved.'
        },
        home: {
          heroTitle: 'Data science and AI, applied where it matters',
          heroCtaPrimary: 'Get in touch',
          heroCtaSecondary: 'Explore services',
          servicesKicker: 'What we do',
          servicesTitle: 'Some ways we can help',
          card1Title: 'Data science and AI consulting',
          card1Text: 'Practical help with data strategy, machine learning and AI adoption: from a first scoping conversation to models running in production.',
          card2Title: 'Data science for the water industry',
          card2Text: 'Specialist analytics for the water sector, grounded in research and industry experience: forecasting, uncertainty, asset and network data.',
          card3Title: 'AI-enabled marketing and websites',
          card3Text: 'Websites and marketing built with AI efficiency and human judgement, for small businesses that want to look their best online.',
          cardLink: 'Learn more →',
          stat1: 'years in data science',
          stat2: 'peer-reviewed publications',
          stat3: 'countries, one studio: UK and Italy',
          aboutKicker: 'Behind De Caires Data',
          aboutTitle: 'A company with a face',
          aboutText: 'De Caires Data is led by Francesca Cecinati, a data scientist with a research background in the water sector and years of experience turning complex data into practical answers. Every project gets her direct attention, supported by modern AI tools.',
          aboutCta: 'Meet Francesca',
          ctaTitle: 'Have a project in mind?',
          ctaText: 'Tell us where data could work harder for you, and we will suggest a way forward. No jargon, no obligation.',
          ctaButton: 'Start the conversation'
        },
        consulting: {
          kicker: 'Consulting',
          title: 'Data science and AI consulting',
          intro: 'For organisations that suspect their data could do more. We help you decide what is worth building, then build it properly: honest advice, sound methods, and models that survive contact with the real world.',
          offeringsTitle: 'What we help with',
          off1Title: 'Data and AI strategy',
          off1Text: 'An honest assessment of where data science and AI can genuinely help your organisation, and where they cannot. Roadmaps you can act on, not slideware.',
          off2Title: 'Machine learning and modelling',
          off2Text: 'Predictive models, forecasting and statistical analysis built with scientific rigour: validated properly, documented clearly, and explained in plain language.',
          off3Title: 'Data pipelines and automation',
          off3Text: 'Reliable pipelines that clean, join and prepare your data automatically, so analysis stops being a manual chore and starts being repeatable.',
          off4Title: 'AI adoption and training',
          off4Text: "Help introducing AI tools into your team's daily work safely and productively, including hands-on training tailored to your context.",
          processTitle: 'How an engagement works',
          step1Title: 'Scoping conversation',
          step1Text: 'A free call to understand your problem, your data and what success would look like.',
          step2Title: 'Proposal',
          step2Text: 'A short written proposal with a clear scope, timeline and price. No surprises later.',
          step3Title: 'Delivery',
          step3Text: 'Regular check-ins as the work progresses, with results shared early and often.',
          step4Title: 'Handover and support',
          step4Text: 'Documentation, training and a handover your team can actually use, with support available afterwards.',
          casesTitle: 'Selected work',
          case1Tag: 'Case study',
          case1Title: 'A case study is on its way',
          case1Text: 'We are preparing write-ups of recent consulting work. In the meantime, ask us directly about relevant experience for your sector.',
          case2Tag: 'Case study',
          case2Title: 'Your project could be here',
          case2Text: 'If you have a data problem that feels too specific to be solvable, that is usually where we do our best work.',
          ctaTitle: 'Not sure where to start?',
          ctaText: 'The scoping conversation is free and useful in itself. Worst case, you leave with a clearer view of your own data.',
          ctaButton: 'Book a conversation'
        },
        water: {
          kicker: 'Water',
          title: 'Data science for the water industry',
          intro: 'Water data is unforgiving: noisy sensors, sparse records, real consequences. De Caires Data brings a research-grade approach shaped by years of academic and industry work in the water sector.',
          offeringsTitle: 'What we offer',
          off1Title: 'Hydrological and environmental analysis',
          off1Text: 'Rainfall, flow and quality data analysed with methods that respect their physical meaning, not just their statistics.',
          off2Title: 'Forecasting and uncertainty',
          off2Text: 'Demand, rainfall and flow forecasting with honest uncertainty estimates, so decisions are made knowing how much to trust the numbers.',
          off3Title: 'Asset and network analytics',
          off3Text: 'Making sense of asset registers, telemetry and network data: condition, performance, leakage and investment insight.',
          off4Title: 'Research and innovation support',
          off4Text: 'Support for R&D projects, bids and publications, bridging the gap between academic methods and operational reality.',
          credKicker: 'Why De Caires Data',
          credTitle: 'Grounded in research, tested in industry',
          credText: 'De Caires Data is led by Francesca Cecinati, whose peer-reviewed research on rainfall data and uncertainty in the water sector has been published in international journals, and who has spent years applying those methods inside the industry itself.',
          cred1: 'Over 30 peer-reviewed publications in international water and environmental journals',
          cred2: '8 years of applied experience with water utilities and sector consultancies',
          cred3: 'Specialist expertise in rainfall data, uncertainty and hydrological modelling',
          credLink: 'See the research on ResearchGate →',
          ctaTitle: 'Working on a water data problem?',
          ctaText: 'From a single awkward dataset to a full research programme, we are happy to talk it through.',
          ctaButton: 'Get in touch'
        },
        digital: {
          kicker: 'Digital',
          title: 'AI-enabled marketing and websites',
          intro: 'A polished online presence used to take agencies and big budgets. With AI doing the heavy lifting and an experienced eye directing it, small businesses can now afford websites and marketing that punch well above their weight.',
          offeringsTitle: "What's included",
          off1Title: 'Websites that just work',
          off1Text: 'Fast, elegant sites with no monthly platform fees: your own domain, free hosting, and nothing to maintain unless you want changes.',
          off2Title: 'Copy and content',
          off2Text: 'Words that sound like your business at its best, written with AI assistance and refined by a human who asks the right questions.',
          off3Title: 'Multilingual by design',
          off3Text: 'Serving customers in more than one language? Sites can ship in English and Italian (or more), with the right language shown automatically.',
          off4Title: 'Ongoing care',
          off4Text: 'Updates, new photos, seasonal offers: small changes handled quickly, without agency retainers.',
          portfolioTitle: 'Recent work',
          portVisit: 'Visit the site →',
          port1Tag: 'Website · EN + IT',
          port1Text: 'A bilingual website for a classic car restoration studio: refined design, WhatsApp-first contact, and hosting that costs nothing to run.',
          port2Tag: 'Website · EN',
          port2Text: 'A calm, elegant site for a Bristol home-cleaning and organising studio: clear services, a warm welcome, and a look that feels as cared-for as the homes it serves.',
          port3Tag: 'Your business',
          port3Title: 'The next site could be yours',
          port3Text: 'If your current website embarrasses you slightly, or you do not have one at all, that is exactly the starting point we like.',
          processTitle: 'How it works',
          step1Title: 'A conversation about your business',
          step1Text: 'What you do, who your customers are, and what you want the site to achieve.',
          step2Title: 'A first version, fast',
          step2Text: 'You see a real working draft of your site early, not mock-ups, and we shape it together.',
          step3Title: 'Launch on your own domain',
          step3Text: 'Domain, hosting and email links all set up and explained, with no ongoing platform costs.',
          ctaTitle: 'Ready to look your best online?',
          ctaText: 'Tell us about your business and we will show you what is possible, usually within days rather than months.',
          ctaButton: 'Tell us about your business'
        },
        about: {
          kicker: 'About',
          title: 'The person behind De Caires Data',
          intro: 'De Caires Data is a data science and AI studio with one guiding idea: advanced methods are only useful when someone takes the time to apply them properly to your specific problem.',
          bioTitle: 'Francesca Cecinati',
          bio1: 'Francesca is a data scientist whose career spans academic research and industry practice. Her peer-reviewed work on data and uncertainty in the water sector has been published in international journals, and she has spent years turning research-grade methods into answers organisations can act on.',
          bio2: 'De Caires Data brings that same rigour to a wider range of problems: AI strategy and machine learning for organisations of any sector, specialist analytics for water, and AI-enabled websites and marketing for small businesses. Different audiences, one standard of care.',
          bio3: 'Francesca works in English and Italian, and every De Caires Data project, whatever its size, gets her direct attention.',
          credTitle: 'Credentials at a glance',
          cred1: 'PhD-level research background in water sector data science',
          cred2: 'Peer-reviewed publications in international journals',
          cred3: 'Years of applied experience across research and industry',
          cred4: 'Bilingual: English and Italian',
          ctaTitle: 'Curious whether we can help?',
          ctaText: 'The quickest way to find out is to ask. We reply personally, and honestly.',
          ctaButton: 'Get in touch'
        },
        contact: {
          kicker: 'Contact',
          title: "Let's talk",
          intro: 'Whether it is a data problem, a research question or a website that needs to exist, the first conversation is free and without obligation.',
          channelsTitle: 'Reach us directly',
          noteTitle: 'When you write',
          noteIntro: 'A few details help us reply usefully on the first exchange:',
          note1: 'what your business or organisation does',
          note2: 'the problem or idea, in your own words',
          note3: 'any timeline or budget constraints you already know about',
          formTitle: 'Or use this form',
          formName: 'Your name',
          formNamePh: 'Jane Smith',
          formTopic: 'What is it about?',
          formTopicConsulting: 'Data science and AI consulting',
          formTopicWater: 'Data science for the water industry',
          formTopicDigital: 'A website or marketing project',
          formTopicOther: 'Something else',
          formMessage: 'Your message',
          formMessagePh: 'Tell us about your business and what you have in mind...',
          formSendEmail: 'Send by email',
          formSendWhatsApp: 'Send on WhatsApp',
          formHint: 'The buttons open your own email app or WhatsApp with the message ready to send. Nothing is stored on this site.'
        }
      }
    },
    it: {
      translation: {
        common: {
          comingSoon: 'In arrivo'
        },
        nav: {
          home: 'Home',
          consulting: 'Consulenza',
          water: 'Acqua',
          digital: 'Digitale',
          about: 'Chi siamo',
          contact: 'Contatti'
        },
        footer: {
          text: "Servizi di data science e AI: consulenza, analisi per il settore idrico e presenza digitale potenziata dall'AI.",
          explore: 'Esplora',
          contact: 'Contatti',
          legal: '© 2026 De Caires Data. Tutti i diritti riservati.'
        },
        home: {
          heroTitle: 'Data science e AI, applicate dove contano',
          heroCtaPrimary: 'Contattaci',
          heroCtaSecondary: 'Scopri i servizi',
          servicesKicker: 'Cosa facciamo',
          servicesTitle: 'Alcuni modi in cui possiamo aiutarti',
          card1Title: 'Consulenza in data science e AI',
          card1Text: "Un aiuto concreto su strategia dei dati, machine learning e adozione dell'AI: dalla prima conversazione esplorativa ai modelli in produzione.",
          card2Title: 'Data science per il settore idrico',
          card2Text: 'Analisi specialistiche per il settore idrico, fondate su ricerca ed esperienza sul campo: previsioni, incertezza, dati di reti e asset.',
          card3Title: "Marketing e siti web potenziati dall'AI",
          card3Text: "Siti web e marketing costruiti con l'efficienza dell'AI e il giudizio umano, per piccole imprese che vogliono presentarsi al meglio online.",
          cardLink: 'Scopri di più →',
          stat1: 'anni di data science',
          stat2: 'pubblicazioni scientifiche',
          stat3: 'paesi, uno studio: Regno Unito e Italia',
          aboutKicker: 'Dietro De Caires Data',
          aboutTitle: "Un'azienda con un volto",
          aboutText: "De Caires Data è guidata da Francesca Cecinati, data scientist con un background di ricerca nel settore idrico e anni di esperienza nel trasformare dati complessi in risposte concrete. Ogni progetto riceve la sua attenzione diretta, con il supporto dei moderni strumenti di AI.",
          aboutCta: 'Conosci Francesca',
          ctaTitle: 'Hai un progetto in mente?',
          ctaText: 'Raccontaci dove i tuoi dati potrebbero lavorare di più per te e ti proporremo un percorso. Senza tecnicismi e senza impegno.',
          ctaButton: 'Inizia la conversazione'
        },
        consulting: {
          kicker: 'Consulenza',
          title: 'Consulenza in data science e AI',
          intro: 'Per le organizzazioni che sospettano che i propri dati possano dare di più. Ti aiutiamo a decidere cosa vale la pena costruire, e poi lo costruiamo come si deve: consigli onesti, metodi solidi e modelli che reggono alla prova del mondo reale.',
          offeringsTitle: 'In cosa possiamo aiutarti',
          off1Title: 'Strategia dati e AI',
          off1Text: "Una valutazione onesta di dove data science e AI possono davvero aiutare la tua organizzazione, e dove no. Piani d'azione concreti, non solo slide.",
          off2Title: 'Machine learning e modellazione',
          off2Text: 'Modelli predittivi, previsioni e analisi statistiche costruiti con rigore scientifico: validati correttamente, documentati con chiarezza e spiegati in linguaggio semplice.',
          off3Title: 'Pipeline di dati e automazione',
          off3Text: "Pipeline affidabili che puliscono, uniscono e preparano i tuoi dati automaticamente, così l'analisi smette di essere un lavoro manuale e diventa ripetibile.",
          off4Title: "Adozione dell'AI e formazione",
          off4Text: 'Un aiuto per introdurre gli strumenti di AI nel lavoro quotidiano del tuo team in modo sicuro e produttivo, con formazione pratica su misura.',
          processTitle: 'Come funziona un incarico',
          step1Title: 'Conversazione esplorativa',
          step1Text: 'Una chiamata gratuita per capire il problema, i dati e cosa significherebbe riuscire.',
          step2Title: 'Proposta',
          step2Text: 'Una breve proposta scritta con ambito, tempi e prezzo chiari. Nessuna sorpresa dopo.',
          step3Title: 'Realizzazione',
          step3Text: 'Aggiornamenti regolari durante il lavoro, con risultati condivisi presto e spesso.',
          step4Title: 'Consegna e supporto',
          step4Text: 'Documentazione, formazione e una consegna che il tuo team può davvero usare, con supporto anche in seguito.',
          casesTitle: 'Lavori selezionati',
          case1Tag: 'Caso studio',
          case1Title: 'Un caso studio è in arrivo',
          case1Text: 'Stiamo preparando le descrizioni di lavori di consulenza recenti. Nel frattempo, chiedici direttamente delle esperienze rilevanti per il tuo settore.',
          case2Tag: 'Caso studio',
          case2Title: 'Qui potrebbe esserci il tuo progetto',
          case2Text: 'Se hai un problema di dati che sembra troppo specifico per essere risolvibile, di solito è lì che diamo il meglio.',
          ctaTitle: 'Non sai da dove iniziare?',
          ctaText: 'La conversazione esplorativa è gratuita e utile di per sé. Nel peggiore dei casi, esci con una visione più chiara dei tuoi dati.',
          ctaButton: 'Prenota una conversazione'
        },
        water: {
          kicker: 'Acqua',
          title: 'Data science per il settore idrico',
          intro: 'I dati del settore idrico non perdonano: sensori rumorosi, serie incomplete, conseguenze reali. De Caires Data porta un approccio di livello scientifico, maturato in anni di lavoro accademico e industriale nel settore.',
          offeringsTitle: 'Cosa offriamo',
          off1Title: 'Analisi idrologiche e ambientali',
          off1Text: 'Dati di pioggia, portata e qualità analizzati con metodi che ne rispettano il significato fisico, non solo le statistiche.',
          off2Title: 'Previsioni e incertezza',
          off2Text: "Previsioni di domanda, pioggia e portata con stime oneste dell'incertezza, per decidere sapendo quanto fidarsi dei numeri.",
          off3Title: 'Analisi di asset e reti',
          off3Text: 'Dare senso a registri degli asset, telemetria e dati di rete: condizione, prestazioni, perdite e scelte di investimento.',
          off4Title: 'Supporto a ricerca e innovazione',
          off4Text: 'Supporto a progetti di R&S, bandi e pubblicazioni, facendo da ponte tra metodi accademici e realtà operativa.',
          credKicker: 'Perché De Caires Data',
          credTitle: "Radicata nella ricerca, testata nell'industria",
          credText: "De Caires Data è guidata da Francesca Cecinati, la cui ricerca peer-reviewed su dati pluviometrici e incertezza nel settore idrico è stata pubblicata su riviste internazionali, e che ha passato anni ad applicare quei metodi all'interno dell'industria stessa.",
          cred1: 'Oltre 30 pubblicazioni peer-reviewed su riviste internazionali del settore idrico e ambientale',
          cred2: '8 anni di esperienza applicata con utility idriche e società di consulenza del settore',
          cred3: 'Competenza specialistica su dati pluviometrici, incertezza e modellazione idrologica',
          credLink: 'Vedi le pubblicazioni su ResearchGate →',
          ctaTitle: 'Stai lavorando su un problema di dati idrici?',
          ctaText: 'Da un singolo dataset ostico a un intero programma di ricerca, siamo felici di parlarne.',
          ctaButton: 'Contattaci'
        },
        digital: {
          kicker: 'Digitale',
          title: "Marketing e siti web potenziati dall'AI",
          intro: "Una presenza online curata richiedeva agenzie e grandi budget. Con l'AI a fare il lavoro pesante e un occhio esperto a dirigerla, oggi le piccole imprese possono permettersi siti e marketing di livello superiore.",
          offeringsTitle: 'Cosa è incluso',
          off1Title: 'Siti web che funzionano e basta',
          off1Text: 'Siti veloci ed eleganti senza canoni mensili di piattaforma: il tuo dominio, hosting gratuito e nulla da mantenere, a meno che tu non voglia cambiamenti.',
          off2Title: 'Testi e contenuti',
          off2Text: "Parole che suonano come la tua attività nel suo momento migliore, scritte con l'aiuto dell'AI e rifinite da una persona che fa le domande giuste.",
          off3Title: 'Multilingue fin dal progetto',
          off3Text: 'Servi clienti in più di una lingua? I siti possono uscire in inglese e italiano (o più lingue), con la lingua giusta mostrata automaticamente.',
          off4Title: 'Cura continua',
          off4Text: 'Aggiornamenti, nuove foto, offerte stagionali: piccole modifiche gestite in fretta, senza contratti di agenzia.',
          portfolioTitle: 'Lavori recenti',
          portVisit: 'Visita il sito →',
          port1Tag: 'Sito web · EN + IT',
          port1Text: "Un sito bilingue per uno studio di restauro di auto d'epoca: design raffinato, contatto via WhatsApp e un hosting che non costa nulla.",
          port2Tag: 'Sito web · EN',
          port2Text: "Un sito sobrio ed elegante per uno studio di pulizie e riordino di Bristol: servizi chiari, un'accoglienza calorosa e un aspetto curato quanto le case di cui si prende cura.",
          port3Tag: 'La tua attività',
          port3Title: 'Il prossimo sito potrebbe essere il tuo',
          port3Text: "Se il tuo sito attuale ti imbarazza un po', o non ne hai affatto uno, è esattamente il punto di partenza che preferiamo.",
          processTitle: 'Come funziona',
          step1Title: 'Una conversazione sulla tua attività',
          step1Text: 'Cosa fai, chi sono i tuoi clienti e cosa vuoi che il sito ottenga.',
          step2Title: 'Una prima versione, subito',
          step2Text: 'Vedi presto una bozza reale e funzionante del tuo sito, non dei mockup, e le diamo forma insieme.',
          step3Title: 'Online sul tuo dominio',
          step3Text: 'Dominio, hosting e collegamenti email configurati e spiegati, senza costi ricorrenti di piattaforma.',
          ctaTitle: 'Pronto a presentarti al meglio online?',
          ctaText: 'Raccontaci della tua attività e ti mostreremo cosa è possibile, di solito in giorni anziché mesi.',
          ctaButton: 'Raccontaci della tua attività'
        },
        about: {
          kicker: 'Chi siamo',
          title: 'La persona dietro De Caires Data',
          intro: "De Caires Data è uno studio di data science e AI con un'idea guida: i metodi avanzati sono utili solo quando qualcuno si prende il tempo di applicarli correttamente al tuo problema specifico.",
          bioTitle: 'Francesca Cecinati',
          bio1: 'Francesca è una data scientist con una carriera tra ricerca accademica e pratica industriale. Il suo lavoro peer-reviewed su dati e incertezza nel settore idrico è stato pubblicato su riviste internazionali, e da anni trasforma metodi di livello scientifico in risposte su cui le organizzazioni possono agire.',
          bio2: "De Caires Data porta lo stesso rigore a una gamma più ampia di problemi: strategia AI e machine learning per organizzazioni di ogni settore, analisi specialistiche per l'acqua, e siti web e marketing potenziati dall'AI per le piccole imprese. Pubblici diversi, un unico standard di cura.",
          bio3: 'Francesca lavora in inglese e italiano, e ogni progetto De Caires Data, di qualunque dimensione, riceve la sua attenzione diretta.',
          credTitle: 'Credenziali in sintesi',
          cred1: 'Background di ricerca a livello di dottorato in data science per il settore idrico',
          cred2: 'Pubblicazioni peer-reviewed su riviste internazionali',
          cred3: 'Anni di esperienza applicata tra ricerca e industria',
          cred4: 'Bilingue: inglese e italiano',
          ctaTitle: 'Vuoi sapere se possiamo aiutarti?',
          ctaText: 'Il modo più rapido per scoprirlo è chiedere. Rispondiamo personalmente, e con onestà.',
          ctaButton: 'Contattaci'
        },
        contact: {
          kicker: 'Contatti',
          title: 'Parliamone',
          intro: 'Che si tratti di un problema di dati, una domanda di ricerca o un sito web che deve nascere, la prima conversazione è gratuita e senza impegno.',
          channelsTitle: 'Contattaci direttamente',
          noteTitle: 'Quando ci scrivi',
          noteIntro: 'Qualche dettaglio ci aiuta a risponderti in modo utile già al primo scambio:',
          note1: 'di cosa si occupa la tua attività o organizzazione',
          note2: "il problema o l'idea, con parole tue",
          note3: 'eventuali vincoli di tempi o budget già noti',
          formTitle: 'Oppure usa questo modulo',
          formName: 'Il tuo nome',
          formNamePh: 'Maria Rossi',
          formTopic: 'Di cosa si tratta?',
          formTopicConsulting: 'Consulenza in data science e AI',
          formTopicWater: 'Data science per il settore idrico',
          formTopicDigital: 'Un sito web o un progetto di marketing',
          formTopicOther: 'Altro',
          formMessage: 'Il tuo messaggio',
          formMessagePh: 'Raccontaci della tua attività e di cosa hai in mente...',
          formSendEmail: 'Invia via email',
          formSendWhatsApp: 'Invia su WhatsApp',
          formHint: 'I pulsanti aprono la tua app di posta o WhatsApp con il messaggio già pronto. Nulla viene salvato su questo sito.'
        }
      }
    }
  };

  var STORAGE_KEY = 'decairesdata-lang';

  function savedLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* private browsing: the choice simply will not persist */
    }
  }

  function domainDefaultLanguage() {
    var host = window.location.hostname || '';
    return /\.it$/i.test(host) ? 'it' : 'en';
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = i18next.t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = i18next.t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', i18next.t(el.getAttribute('data-i18n-placeholder')));
    });
    document.documentElement.setAttribute('lang', i18next.language);
    updateLangButtons();
  }

  function updateLangButtons() {
    document.querySelectorAll('.nav__lang-btn').forEach(function (btn) {
      btn.classList.toggle(
        'nav__lang-btn--active',
        btn.getAttribute('data-lang') === i18next.language
      );
    });
  }

  i18next.init(
    {
      lng: savedLanguage() || domainDefaultLanguage(),
      fallbackLng: 'en',
      resources: resources
    },
    function () {
      applyTranslations();
    }
  );

  document.querySelectorAll('.nav__lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      saveLanguage(lang);
      i18next.changeLanguage(lang, applyTranslations);
    });
  });
})();
