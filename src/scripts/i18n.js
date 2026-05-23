// i18n Translation System for Diamo Website
const translations = {
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.how': 'How It Works',
    'nav.team': 'Team',
    'nav.cta': 'Get Early Access',

    // Hero
    'hero.badge': '',
    'hero.title': 'A New Era of<br/>Women\'s Health',
    'hero.description': 'Personalized, cycle synced fitness powered by science. Diamo adapts your workouts to your body\'s unique rhythm. Because your body deserves better than one size fits all.',
    'hero.cta.waitlist': 'Join the Waitlist',
    'hero.cta.features': 'Explore Features',
    'hero.stat1.value': '4',
    'hero.stat1.label': 'Training Categories',
    'hero.stat2.value': '100%',
    'hero.stat2.label': 'Cycle Synced',
    'hero.stat3.value': '∞',
    'hero.stat3.label': 'Community Power',

    // Problem
    'problem.label': 'The Problem',
    'problem.title': 'Your body isn\'t<br/>one size fits all.',
    'problem.subtitle': 'The fitness market is fragmented: passive trackers that collect data without action, expensive hardware solutions, and generic workout apps that ignore your hormonal cycle.',
    'problem.detail': 'Diamo is the <strong>first software only solution</strong> that connects daily biometric data with a hormonal performance system and a local community. No expensive wearables required.',
    'problem.without': 'Without Diamo',
    'problem.with': 'With Diamo',
    'problem.old1': 'Generic workout plans',
    'problem.old2': 'Ignoring your cycle',
    'problem.old3': 'Training alone at home',
    'problem.old4': 'Expensive hardware required',
    'problem.old5': 'Data without action',
    'problem.new1': 'Cycle synced training',
    'problem.new2': 'Adapts to your energy',
    'problem.new3': 'Connected community',
    'problem.new4': 'Software only, no hardware',
    'problem.new5': 'Actionable daily insights',

    // Features
    'features.label': 'Features',
    'features.title': 'Tailored to<br/>your body.',
    'features.subtitle': 'Diamo combines cycle science, adaptive training, and real community into one beautifully designed experience.',
    'features.f1.title': 'Personalized Workouts',
    'features.f1.desc': 'AI powered training plans that adapt daily based on your cycle phase, energy level, stress, and sleep quality.',
    'features.f1.t1': 'Strength',
    'features.f1.t2': 'Endurance',
    'features.f1.t3': 'Mobility',
    'features.f1.t4': 'Recovery',
    'features.f2.title': 'Cycle Synced Calendar',
    'features.f2.desc': 'Understand your current cycle phase and its impact on energy, mood, and performance. Includes a daily adapted workout plan.',
    'features.f2.t1': 'Phase Tracking',
    'features.f2.t2': 'Energy Insights',
    'features.f2.t3': 'Daily Plan',
    'features.f2.t4': 'Wearable Sync',
    'features.f3.title': 'Community & Events',
    'features.f3.desc': 'Connect with local run clubs, studios, and like-minded women. Personalized sport events based on your location and cycle.',
    'features.f3.t1': 'Local Events',
    'features.f3.t2': 'Run Clubs',
    'features.f3.t3': 'Stories',
    'features.f3.t4': 'Challenges',
    'features.f4.title': 'Smart Tracking',
    'features.f4.desc': 'Seamless integration with Apple Health and wearables. Track steps, movement, and energy. The app works fully without hardware too.',
    'features.f4.t1': 'Apple Health',
    'features.f4.t2': 'Garmin',
    'features.f4.t3': 'Whoop',
    'features.f4.t4': 'Manual Input',

    // Screenshots
    'screenshots.label': 'The App',
    'screenshots.title': 'Designed to feel<br/>like second nature.',
    'screenshots.subtitle': 'A clean, intuitive interface that puts your wellbeing first. Every screen crafted with intention.',
    'screenshots.home': 'Home',
    'screenshots.home.desc': 'Your daily dashboard with workouts, cycle rhythm, and motivational quotes',
    'screenshots.insights': 'Insights',
    'screenshots.insights.desc': 'Daily health insights, cycle-based tips, and personalized recommendations',
    'screenshots.calendar': 'Calendar',
    'screenshots.calendar.desc': 'Cycle phase tracking with color coded workout types and daily planning',
    'screenshots.community': 'Community',
    'screenshots.community.desc': 'Find local run clubs, studio events, and connect with friends nearby',
    'screenshots.personal': 'Personal',
    'screenshots.personal.desc': 'Your cycle status, activity level, and personalized plan settings',

    // How It Works
    'hiw.label': 'How It Works',
    'hiw.title': 'Three steps to training<br/>in harmony with your body.',
    'hiw.s1.title': 'Tell us about you',
    'hiw.s1.desc': 'A quick onboarding captures your fitness goals, cycle data, energy patterns, and personal preferences to create your unique persona.',
    'hiw.s2.title': 'Get your daily plan',
    'hiw.s2.desc': 'Every morning, Diamo delivers a personalized workout adapted to your cycle phase, energy level, and how you slept. All powered by real science.',
    'hiw.s3.title': 'Move with your tribe',
    'hiw.s3.desc': 'Join local events, share your journey, and connect with women who train in sync with their bodies. Away from the screen, into real life.',

    // Team
    'team.label': 'The Team',
    'team.title': 'Made by women,<br/>for women.',
    'team.subtitle': 'A team combining management expertise, medical knowledge, and creativity to redefine women\'s health.',
    'team.lara.role': 'Co-Founder',
    'team.lara.focus': 'Creative & Growth',
    'team.lara.bio': 'Focus on women\'s health aligned with marketing & logic: medical depth (aspiring naturopath). Creative direction at the level of global lifestyle brands (experience in the film industry & digital media studies). Management expertise (MBA).',
    'team.lara.t1': 'Creative Direction',
    'team.lara.t2': 'Women\'s Health',
    'team.lara.t3': 'Brand Strategy',
    'team.marie.role': 'Co-Founder',
    'team.marie.focus': 'Strategy & Operations',
    'team.marie.bio': 'Focus on operational excellence and building community structures. Consulting experience at Inverto (BCG Company) and investment know-how at Coparion. Professional depth as a licensed fitness trainer (B-License).',
    'team.marie.t1': 'Strategy',
    'team.marie.t2': 'Operations',
    'team.marie.t3': 'Fitness',
    'team.hiring.title': 'We\'re looking for visionaries',
    'team.role1.title': 'Technical Co-Founder',
    'team.role1.desc': 'Build the core community logic and a stable, scalable app architecture. Focus on user interaction and technical scalability.',
    'team.role1.cta': 'Apply',
    'team.role2.title': 'Co-Founder: Influencerin',
    'team.role2.desc': 'Build an authentic community through social media recommendations. Trust over advertising.',
    'team.role2.cta': 'Apply',

    // Beta Signup
    'beta.label': 'Beta Program',
    'beta.title': 'Shape the future of<br/>women\'s fitness.',
    'beta.description': 'We\'re inviting a small group of women to test Diamo before launch. Get early access, share your feedback, and help us build something that truly fits your body and your life.',
    'beta.feat1': 'Free access during beta',
    'beta.feat2': 'Direct input on features',
    'beta.feat3': 'Founding member perks at launch',
    'beta.cta': 'Join the Beta',
    'beta.note': 'Limited spots · No commitment · Cancel anytime',

    // Footer
    'footer.tagline': 'A New Era of<br/>Women\'s Health',
    'footer.product': 'Product',
    'footer.product.features': 'Features',
    'footer.product.how': 'How It Works',
    'footer.product.app': 'The App',
    'footer.company': 'Company',
    'footer.company.team': 'Team',
    'footer.company.careers': 'Careers',
    'footer.company.press': 'Press',
    'footer.contact': 'Get in Touch',
    'footer.legal': '© 2026 Diamo. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.imprint': 'Imprint',

    // Waitlist Modal
    'modal.label': 'Early Access',
    'modal.title': 'Be among the first.',
    'modal.description': 'Join our exclusive waitlist and get early access to Diamo before the official launch. We\'ll notify you when it\'s your turn.',
    'modal.placeholder': 'Your email address',
    'modal.submit': 'Join Waitlist',
    'modal.privacy': 'No spam, ever. We respect your privacy.',
    'modal.success.title': 'You\'re on the list!',
    'modal.success.desc': 'We\'ll reach out when Diamo is ready for you.',

    // Beta Tester Modal
    'beta-modal.label': 'Beta Tester Program',
    'beta-modal.title': 'Test Diamo before everyone else.',
    'beta-modal.description': 'We\'re looking for a small group of women to test Diamo starting July 2026. As a beta tester, you\'ll get free access, shape the product with your feedback, and earn founding member perks at launch.',
    'beta-modal.name-placeholder': 'Your name',
    'beta-modal.email-placeholder': 'Your email address',
    'beta-modal.motivation-placeholder': 'Why do you want to test Diamo? (optional)',
    'beta-modal.submit': 'Apply as Beta Tester',
    'beta-modal.privacy': 'Limited spots · Starting July 2026',
    'beta-modal.success.title': 'Application received!',
    'beta-modal.success.desc': 'We\'ll review your application and get back to you soon.',

    // Apply Modal
    'apply-modal.label': 'Join the Team',
    'apply-modal.title': 'Build something meaningful.',
    'apply-modal.description': 'Tell us about yourself and why you\'d be a great fit for Diamo. We\'re looking for passionate people who want to reshape women\'s health.',
    'apply-modal.name-placeholder': 'Your name',
    'apply-modal.email-placeholder': 'Your email address',
    'apply-modal.message-placeholder': 'Tell us about you and your motivation',
    'apply-modal.submit': 'Send Application',
    'apply-modal.privacy': 'We\'ll get back to you within a few days.',
    'apply-modal.success.title': 'Application sent!',
    'apply-modal.success.desc': 'We\'ll review it and reach out to you soon.',
  },

  de: {
    // Navbar
    'nav.features': 'Features',
    'nav.how': 'So funktioniert\'s',
    'nav.team': 'Team',
    'nav.cta': 'Frühzugang sichern',

    // Hero
    'hero.badge': '',
    'hero.title': 'Eine neue Ära der<br/>Frauengesundheit',
    'hero.description': 'Personalisiertes, zyklusbasiertes Training, unterstützt durch Wissenschaft. Diamo passt deine Workouts an den einzigartigen Rhythmus deines Körpers an. Weil dein Körper mehr verdient als Einheitsgrößen.',
    'hero.cta.waitlist': 'Auf die Warteliste',
    'hero.cta.features': 'Features entdecken',
    'hero.stat1.value': '4',
    'hero.stat1.label': 'Trainingsmodule',
    'hero.stat2.value': '100%',
    'hero.stat2.label': 'Zyklusbasiert',
    'hero.stat3.value': '∞',
    'hero.stat3.label': 'Community Power',

    // Problem
    'problem.label': 'Das Problem',
    'problem.title': 'Dein Körper ist keine<br/>Einheitsgröße.',
    'problem.subtitle': 'Der Fitnessmarkt ist fragmentiert: passive Tracker, die Daten ohne Aktion sammeln, teure Hardware-Lösungen und generische Workout-Apps, die deinen Hormonzyklus ignorieren.',
    'problem.detail': 'Diamo ist die <strong>erste reine Software-Lösung</strong>, die tägliche biometrische Daten mit einem hormonellen Leistungssystem und einer lokalen Community verbindet. Keine teuren Wearables nötig.',
    'problem.without': 'Ohne Diamo',
    'problem.with': 'Mit Diamo',
    'problem.old1': 'Generische Trainingspläne',
    'problem.old2': 'Zyklus wird ignoriert',
    'problem.old3': 'Alleine zuhause trainieren',
    'problem.old4': 'Teure Hardware nötig',
    'problem.old5': 'Daten ohne Aktion',
    'problem.new1': 'Zyklusbasiertes Training',
    'problem.new2': 'Passt sich deiner Energie an',
    'problem.new3': 'Vernetzte Community',
    'problem.new4': 'Nur Software, keine Hardware',
    'problem.new5': 'Umsetzbare tägliche Einblicke',

    // Features
    'features.label': 'Features',
    'features.title': 'Zugeschnitten auf<br/>deinen Körper.',
    'features.subtitle': 'Diamo verbindet Zykluswissenschaft, adaptives Training und echte Community zu einem durchdacht gestalteten Erlebnis.',
    'features.f1.title': 'Personalisierte Workouts',
    'features.f1.desc': 'KI-gestützte Trainingspläne, die sich täglich an deine Zyklusphase, dein Energielevel, Stress und deine Schlafqualität anpassen.',
    'features.f1.t1': 'Kraft',
    'features.f1.t2': 'Ausdauer',
    'features.f1.t3': 'Mobilität',
    'features.f1.t4': 'Regeneration',
    'features.f2.title': 'Zyklusbasierter Kalender',
    'features.f2.desc': 'Verstehe deine aktuelle Zyklusphase und ihren Einfluss auf Energie, Stimmung und Leistung. Inklusive täglichem Trainingsplan.',
    'features.f2.t1': 'Phasen-Tracking',
    'features.f2.t2': 'Energie-Einblicke',
    'features.f2.t3': 'Tagesplan',
    'features.f2.t4': 'Wearable-Sync',
    'features.f3.title': 'Community & Events',
    'features.f3.desc': 'Verbinde dich mit lokalen Laufgruppen, Studios und gleichgesinnten Frauen. Personalisierte Sportevents basierend auf Standort und Zyklus.',
    'features.f3.t1': 'Lokale Events',
    'features.f3.t2': 'Laufgruppen',
    'features.f3.t3': 'Stories',
    'features.f3.t4': 'Challenges',
    'features.f4.title': 'Smartes Tracking',
    'features.f4.desc': 'Nahtlose Integration mit Apple Health und Wearables. Tracke Schritte, Bewegung und Energie. Die App funktioniert auch komplett ohne Hardware.',
    'features.f4.t1': 'Apple Health',
    'features.f4.t2': 'Garmin',
    'features.f4.t3': 'Whoop',
    'features.f4.t4': 'Manuelle Eingabe',

    // Screenshots
    'screenshots.label': 'Die App',
    'screenshots.title': 'Designt, um sich<br/>natürlich anzufühlen.',
    'screenshots.subtitle': 'Ein klares, intuitives Interface, das dein Wohlbefinden in den Vordergrund stellt. Jeder Screen mit Intention gestaltet.',
    'screenshots.home': 'Home',
    'screenshots.home.desc': 'Dein tägliches Dashboard mit Workouts, Zyklusrhythmus und Motivationssprüchen',
    'screenshots.insights': 'Einblicke',
    'screenshots.insights.desc': 'Tägliche Gesundheits-Einblicke, zyklusbasierte Tipps und personalisierte Empfehlungen',
    'screenshots.calendar': 'Kalender',
    'screenshots.calendar.desc': 'Zyklusphase-Tracking mit farbcodierten Trainingstypen und Tagesplanung',
    'screenshots.community': 'Community',
    'screenshots.community.desc': 'Finde lokale Laufgruppen, Studio-Events und vernetze dich mit Freundinnen',
    'screenshots.personal': 'Persönlich',
    'screenshots.personal.desc': 'Dein Zyklusstatus, Aktivitätslevel und personalisierte Plan-Einstellungen',

    // How It Works
    'hiw.label': 'So funktioniert\'s',
    'hiw.title': 'Drei Schritte zum Training<br/>im Einklang mit deinem Körper.',
    'hiw.s1.title': 'Erzähl uns von dir',
    'hiw.s1.desc': 'Ein kurzes Onboarding erfasst deine Fitnessziele, Zyklusdaten, Energiemuster und persönliche Vorlieben, um dein einzigartiges Profil zu erstellen.',
    'hiw.s2.title': 'Dein täglicher Plan',
    'hiw.s2.desc': 'Jeden Morgen liefert Diamo ein personalisiertes Workout, angepasst an deine Zyklusphase, dein Energielevel und wie du geschlafen hast. Alles wissenschaftlich fundiert.',
    'hiw.s3.title': 'Bewege dich mit deinem Tribe',
    'hiw.s3.desc': 'Nimm an lokalen Events teil, teile deine Reise und vernetze dich mit Frauen, die im Einklang mit ihrem Körper trainieren. Weg vom Bildschirm, rein ins echte Leben.',

    // Team
    'team.label': 'Das Team',
    'team.title': 'Von Frauen<br/>für Frauen.',
    'team.subtitle': 'Ein Team, das Management-Expertise, medizinisches Wissen und Kreativität vereint, um Frauengesundheit neu zu definieren.',
    'team.lara.role': 'Co-Founderin',
    'team.lara.focus': 'Creative & Growth',
    'team.lara.bio': 'Fokus auf Frauengesundheit in Einklang mit Marketing & Logiken: Medizinische Tiefe (angehende Heilpraktikerin). Kreativ-Direktion: Markenführung auf dem Niveau globaler Lifestyle-Brands (Erfahrung in der Filmbranche & Digital Media Studium). Management-Expertise (BWL Master).',
    'team.lara.t1': 'Kreativ-Direktion',
    'team.lara.t2': 'Frauengesundheit',
    'team.lara.t3': 'Markenstrategie',
    'team.marie.role': 'Co-Founderin',
    'team.marie.focus': 'Strategy & Operations',
    'team.marie.bio': 'Fokus auf operative Exzellenz und den Aufbau der Community Strukturen. Beratungserfahrung bei Inverto (BCG Company) sowie Investment Know-how bei Coparion. Fachliche Tiefe als lizenzierte Fitness Trainerin mit B-Lizenz.',
    'team.marie.t1': 'Strategie',
    'team.marie.t2': 'Operations',
    'team.marie.t3': 'Fitness',
    'team.hiring.title': 'Wir suchen Visionärinnen',
    'team.role1.title': 'Technical Co-Founder',
    'team.role1.desc': 'Aufbau der Community-Logik und einer stabilen, skalierbaren App-Architektur. Fokus auf Nutzer-Interaktion und technische Skalierbarkeit.',
    'team.role1.cta': 'Bewerben',
    'team.role2.title': 'Co-Founderin: Influencerin',
    'team.role2.desc': 'Aufbau einer authentischen Community durch Social-Media-Empfehlungen. Vertrauen statt Werbung.',
    'team.role2.cta': 'Bewerben',

    // Beta Signup
    'beta.label': 'Beta-Programm',
    'beta.title': 'Gestalte die Zukunft von<br/>Frauen-Fitness mit.',
    'beta.description': 'Wir laden eine kleine Gruppe von Frauen ein, Diamo vor dem Launch zu testen. Erhalte frühzeitigen Zugang, teile dein Feedback und hilf uns, etwas zu entwickeln, das wirklich zu deinem Körper und deinem Leben passt.',
    'beta.feat1': 'Kostenloser Zugang während der Beta',
    'beta.feat2': 'Direkter Einfluss auf Features',
    'beta.feat3': 'Founding-Member-Vorteile zum Launch',
    'beta.cta': 'Beta beitreten',
    'beta.note': 'Begrenzte Plätze · Keine Verpflichtung · Jederzeit kündbar',

    // Footer
    'footer.tagline': 'Eine neue Ära der<br/>Frauengesundheit',
    'footer.product': 'Produkt',
    'footer.product.features': 'Features',
    'footer.product.how': 'So funktioniert\'s',
    'footer.product.app': 'Die App',
    'footer.company': 'Unternehmen',
    'footer.company.team': 'Team',
    'footer.company.careers': 'Karriere',
    'footer.company.press': 'Presse',
    'footer.contact': 'Kontakt',
    'footer.legal': '© 2026 Diamo. Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.imprint': 'Impressum',

    // Waitlist Modal
    'modal.label': 'Frühzugang',
    'modal.title': 'Sei unter den Ersten.',
    'modal.description': 'Trag dich auf unsere exklusive Warteliste ein und erhalte frühzeitigen Zugang zu Diamo vor dem offiziellen Launch. Wir benachrichtigen dich, wenn es soweit ist.',
    'modal.placeholder': 'Deine E-Mail-Adresse',
    'modal.submit': 'Eintragen',
    'modal.privacy': 'Kein Spam, versprochen. Wir respektieren deine Privatsphäre.',
    'modal.success.title': 'Du bist auf der Liste!',
    'modal.success.desc': 'Wir melden uns, wenn Diamo für dich bereit ist.',

    // Beta Tester Modal
    'beta-modal.label': 'Beta-Tester-Programm',
    'beta-modal.title': 'Teste Diamo vor allen anderen.',
    'beta-modal.description': 'Wir suchen eine kleine Gruppe von Frauen, die Diamo ab Juli 2026 testen. Als Beta-Testerin erhältst du kostenlosen Zugang, gestaltest das Produkt mit deinem Feedback und sicherst dir Founding-Member-Vorteile zum Launch.',
    'beta-modal.name-placeholder': 'Dein Name',
    'beta-modal.email-placeholder': 'Deine E-Mail-Adresse',
    'beta-modal.motivation-placeholder': 'Warum möchtest du Diamo testen? (optional)',
    'beta-modal.submit': 'Als Beta-Testerin bewerben',
    'beta-modal.privacy': 'Begrenzte Plätze · Start Juli 2026',
    'beta-modal.success.title': 'Bewerbung erhalten!',
    'beta-modal.success.desc': 'Wir prüfen deine Bewerbung und melden uns bald.',

    // Apply Modal
    'apply-modal.label': 'Werde Teil des Teams',
    'apply-modal.title': 'Bau etwas Bedeutsames.',
    'apply-modal.description': 'Erzähl uns von dir und warum du gut zu Diamo passen würdest. Wir suchen leidenschaftliche Menschen, die Frauengesundheit neu gestalten wollen.',
    'apply-modal.name-placeholder': 'Dein Name',
    'apply-modal.email-placeholder': 'Deine E-Mail-Adresse',
    'apply-modal.message-placeholder': 'Erzähl uns von dir und deiner Motivation',
    'apply-modal.submit': 'Bewerbung senden',
    'apply-modal.privacy': 'Wir melden uns innerhalb weniger Tage.',
    'apply-modal.success.title': 'Bewerbung gesendet!',
    'apply-modal.success.desc': 'Wir prüfen sie und melden uns bald bei dir.',
  }
};

function setLanguage(lang) {
  if (!translations[lang]) return;

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value) {
      el.innerHTML = value;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = translations[lang][key];
    if (value) {
      el.setAttribute('placeholder', value);
    }
  });

  // Update the language toggle button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Persist
  localStorage.setItem('diamo-lang', lang);
}

function initLanguage() {
  // Check localStorage first
  const saved = localStorage.getItem('diamo-lang');
  if (saved && translations[saved]) {
    setLanguage(saved);
    return;
  }

  // Auto-detect browser language
  const browserLang = navigator.language?.slice(0, 2);
  if (browserLang === 'de') {
    setLanguage('de');
  }
  // Default is English (already rendered in HTML)
}

// Make globally accessible
window.setLanguage = setLanguage;
window.initLanguage = initLanguage;
