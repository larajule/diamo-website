// i18n Translation System for Diamo Website
const translations = {
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.how': 'How It Works',
    'nav.team': 'Team',
    'nav.about': 'About Us',
    'nav.cta': 'Get Early Access',

    // Hero
    'hero.badge': '',
    'hero.title': 'A new era of women\'s health',
    'hero.description': 'Personalized, cycle-synced fitness powered by science. Diamo adapts your workouts to your body\'s unique rhythm and connects you to a real, local community',
    'hero.cta.waitlist': 'Join the Waitlist',
    'hero.cta.features': 'Explore Features',
    'hero.stat1.value': '4',
    'hero.stat1.label': 'Training Categories',
    'hero.stat2.value': '100%',
    'hero.stat2.label': 'Cycle Synced',
    'hero.stat3.value': '∞',
    'hero.stat3.label': 'Community Power',
    'hero.geo': 'Diamo is a cycle-based fitness app for women that dynamically adapts training plans and recovery to the hormonal phases of the female cycle.',

    // Problem
    'problem.label': 'The Difference',
    'problem.title': 'Your cycle is your superpower',
    'problem.subtitle': 'Your body follows a unique rhythm. Diamo listens to your cycle, energy, and daily life to create workouts that move with you.',
    'problem.detail': 'Diamo is the <strong>first software only solution</strong> that connects daily biometric data with a hormonal performance system and a local community.',
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
    'features.title': 'Your data, finally put to work',
    'features.subtitle': 'Millions track with Apple Watch, Oura, or Garmin but nobody uses the data. Diamo reads your health data through the lens of your cycle phase and turns it into real, actionable workouts. No wearable? No problem, it works without one too.',

    // Community
    'community.label': 'Community',
    'community.title': 'Find your tribe instead of digital isolation',
    'community.description': 'Don\'t train alone in front of a screen. We use digital data to curate real, physical encounters in local tribes directly in your city.',
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
    'features.lifestyle.caption': 'Recovery is part of the plan',

    // Screenshots
    'screenshots.label': 'The App',
    'screenshots.title': 'Designed to feel<br/>like second nature',
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
    'hiw.title': 'Three steps to training<br/>in harmony with your body',
    'hiw.s1.title': 'Tell us about you',
    'hiw.s1.desc': 'A quick onboarding captures your fitness goals, cycle data, energy patterns, and personal preferences to create your unique persona.',
    'hiw.s2.title': 'Get your daily plan',
    'hiw.s2.desc': 'Every morning, Diamo delivers a personalized workout adapted to your cycle phase, energy level, and how you slept. All powered by real science.',
    'hiw.s3.title': 'Move with your tribe',
    'hiw.s3.desc': 'Join local events, share your journey, and connect with women who train in sync with their bodies. Away from the screen, into real life.',

    // Team
    'team.label': 'The Team',
    'team.title': 'Made by women,<br/>for women',
    'team.subtitle': 'A team combining management expertise, medical knowledge, and creativity to redefine women\'s health.',
    'team.lara.role': 'Founder',
    'team.lara.focus': 'Creative & Growth',
    'team.lara.bio': 'Focus on women\'s health aligned with marketing & logic: Medical depth (aspiring naturopath). Creative direction at the level of global lifestyle brands (experience in the film industry & digital media studies). Management expertise (MBA).',
    'team.lara.t1': 'Creative Direction',
    'team.lara.t2': 'Women\'s Health',
    'team.lara.t3': 'Brand Strategy',
    'team.hiring.title': 'We\'re looking for visionaries',
    'team.role1.title': 'Technical Co-Founder',
    'team.role1.desc': 'Build the core app architecture and cycle-algorithm backend. Experience with Flutter, Firebase, and API design required. Passion for health-tech is a must.',
    'team.role1.cta': 'Apply',
    'team.role2.title': 'Co-Founder: Influencer',
    'team.role2.desc': 'Fitness content creator with an established audience who wants to co-build a brand. You create workout videos, inspire women, and bring a real community with you.',
    'team.role2.cta': 'Apply',

    // Beta Signup
    'beta.label': 'Beta Program',
    'beta.title': 'Help us revolutionize fitness for women',
    'beta.description': 'We\'re inviting a small group of women to test Diamo before launch. Get early access, share your feedback, and help us build something that truly fits your body and your life.',
    'beta.feat1': 'Free access during beta',
    'beta.feat2': 'Direct input on features',
    'beta.feat3': 'Founding member perks at launch',
    'beta.cta': 'Get Early Access',
    'beta.note': 'Limited spots · No commitment · Cancel anytime',

    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.q0': 'What is Diamo?',
    'faq.a0': 'Diamo is a fitness app that automatically adapts your training to your menstrual cycle. It analyzes your cycle phase and creates a personalized daily workout plan – supported by data from your smartwatch. Additionally, Diamo connects you with local fitness communities (Tribes) in your city.',
    'faq.q1': 'What is cycle-based training?',
    'faq.a1': 'Cycle-based training means adapting your workouts to the four phases of your menstrual cycle. During the follicular phase and around ovulation, you\'re more capable – ideal for intense training. During the luteal phase and menstruation, you benefit from moderate sessions and recovery. Learn more in our detailed guide.',
    'faq.q2': 'Do I need a fitness tracker or smartwatch?',
    'faq.a2': 'No! Diamo works completely without a wearable. However, if you have an Apple Watch, Oura Ring, or Garmin device, Diamo can use your health data (HRV, sleep, resting heart rate) to adapt your training even more precisely to your body.',
    'faq.q3': 'Is Diamo free?',
    'faq.a3': 'Yes, during the beta phase Diamo is completely free. As an early access user, you get full access to all features at no cost. After the official launch, there will be a freemium model – founding members receive special benefits.',
    'faq.q4': 'When will the app be available?',
    'faq.a4': 'The beta version launches in summer 2026 for a small group of testers. Join the waitlist to be the first to know and secure your spot.',
    'faq.q5': 'Which devices will Diamo be available on?',
    'faq.a5': 'Diamo will be available for iOS and Android at launch. The app supports integration with Apple Watch, Oura Ring, and Garmin devices – more wearables will follow after launch.',
    'faq.guide-link': '→ Read the full guide: Cycle-Based Training',

    // Footer
    'footer.tagline': 'A New Era of<br/>Women\'s Health',
    'footer.product': 'Product',
    'footer.product.features': 'Features',
    'footer.product.how': 'How It Works',
    'footer.product.app': 'The App',
    'footer.product.blog': 'Blog',
    'footer.blog': 'Blog',
    'footer.blog.article1': 'Fitness Apps vs. Cycle',
    'footer.blog.article2': 'Wearables & Cycle',
    'footer.company': 'Company',
    'footer.company.team': 'Team',
    'footer.company.careers': 'Careers',
    'footer.company.about': 'About Us',
    'footer.company.press': 'Press',
    'footer.contact': 'Get in Touch',
    'footer.legal': '© 2026 Diamo. All rights reserved.',
    'footer.disclaimer': 'Diamo is not a medical product or service and does not provide medical advice, diagnosis, or treatment. The app is a lifestyle and fitness tool. Always consult a qualified healthcare professional before starting any fitness program, especially during pregnancy or with pre-existing conditions. Use of the app is at your own risk. Diamo assumes no liability for health-related outcomes.',
    'footer.geo': 'Diamo is a cycle-based fitness app for women that dynamically adapts training plans and recovery to the hormonal phases of the female cycle.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.imprint': 'Imprint',
    'page.title': 'Diamo | Cycle-Synced Workouts & Fitness Community',

    // About Page
    'about.title': 'Your cycle is your superpower.',
    'about.title.italic': 'We\'re here to unlock it.',
    'about.story.title': 'Why Diamo exists',
    'about.story.p1': 'For too long, fitness has ignored the most fundamental part of female biology: The cycle. Training plans expected the same performance on day 5 and day 25. They made women feel like failures when their bodies simply needed something different.',
    'about.story.p2': 'But the science is clear: Every woman moves through four distinct cycle phases, each shaping her energy, strength, and recovery in unique ways. This isn\'t a limitation \u2014 it\'s an advantage, if you know how to use it.',
    'about.story.p3': 'That\'s why Diamo was built. The app that finally trains with your cycle, not against it.',
    'about.vision.title': 'Training that speaks your cycle\'s language',
    'about.vision.p1': 'During your follicular phase, your body is ready to push limits. During your luteal phase, it needs a different kind of strength. Diamo knows the difference and adapts your training accordingly.',
    'about.vision.p2': 'We connect the data from your Apple Watch, Oura Ring, or Garmin with real-time cycle awareness to create a plan that fits exactly where you are today. Not a generic plan. Your plan.',
    'about.vision.p3': 'And because we believe the best workouts happen together, Diamo connects you with women near you who are in a similar cycle phase. Local run clubs, shared energy, real connections. <strong>Offline first</strong>.',
    'about.values.title': 'What we believe',
    'about.values.intro': 'Diamo is built on a simple conviction: Women deserve fitness tools that truly understand their bodies. These are the principles that guide everything we create.',
    'about.value1.title': 'Science-backed',
    'about.value1.desc': 'Every recommendation is rooted in real cycle science and sports physiology \u2014 not trends, not guesswork.',
    'about.value2.title': 'Community first',
    'about.value2.desc': 'The best workouts happen together. Diamo connects you with local women in similar cycle phases for real, offline training.',
    'about.value3.title': 'Built for women',
    'about.value3.desc': 'Not an afterthought. Not a pink version of a men\'s app. Diamo is designed from scratch around the female body and experience.',
    'about.cta.title': 'Sound like something you want to be part of?',
    'about.cta.text': 'We\'re just getting started and that\'s what makes it special. Be there from the beginning.',
    'about.cta.btn': 'Join the Waitlist',

    // Waitlist Modal
    'modal.label': 'Early Access',
    'modal.title': 'Be among the first',
    'modal.description': 'Join our exclusive waitlist and get early access to Diamo before the official launch. We\'ll notify you when it\'s your turn.',
    'modal.placeholder': 'Your email address',
    'modal.submit': 'Join Waitlist',
    'modal.privacy': 'No spam, ever. We respect your privacy.',
    'modal.success.title': 'Confirmed.',
    'modal.success.desc': 'Check your inbox for a confirmation email.',

    // Beta Tester Modal
    'beta-modal.label': 'Beta Tester Program',
    'beta-modal.title': 'Test Diamo before everyone else',
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
    'apply-modal.title': 'Build something meaningful',
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
    'nav.about': 'Über uns',
    'nav.cta': 'Frühzugang sichern',

    // Hero
    'hero.badge': '',
    'hero.title': 'Eine neue Ära der Frauengesundheit',
    'hero.description': 'Personalisiertes, zyklusbasiertes Training, unterstützt durch Wissenschaft. Diamo passt deine Workouts an den einzigartigen Rhythmus deines Körpers an und verbindet dich mit einer echten, lokalen Community',
    'hero.cta.waitlist': 'Auf die Warteliste',
    'hero.cta.features': 'Features entdecken',
    'hero.stat1.value': '4',
    'hero.stat1.label': 'Trainingsmodule',
    'hero.stat2.value': '100%',
    'hero.stat2.label': 'Zyklusbasiert',
    'hero.stat3.value': '∞',
    'hero.stat3.label': 'Community Power',
    'hero.geo': 'Diamo ist eine zyklusbasierte Fitness-App f\u00fcr Frauen, die Trainingspl\u00e4ne und Regeneration dynamisch an die hormonellen Phasen des weiblichen Zyklus anpasst.',

    // Problem
    'problem.label': 'Der Unterschied',
    'problem.title': 'Dein Zyklus ist deine Superkraft',
    'problem.subtitle': 'Dein Körper folgt einem einzigartigen Rhythmus. Diamo hört auf deinen Zyklus, deine Energie und deinen Alltag, um Workouts zu erstellen, die sich mit dir bewegen.',
    'problem.detail': 'Diamo ist die <strong>erste reine Software-Lösung</strong>, die tägliche biometrische Daten mit einem hormonellen Leistungssystem und einer lokalen Community verbindet.',
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
    'features.title': 'Deine Daten, endlich sinnvoll genutzt',
    'features.subtitle': 'Millionen tracken mit Apple Watch, Oura oder Garmin, aber niemand nutzt die Daten. Diamo liest deine Gesundheitsdaten im Kontext deiner Zyklusphase und verwandelt sie in echte, umsetzbare Workouts. Kein Wearable? Kein Problem, es funktioniert auch ohne.',

    // Community
    'community.label': 'Die Community',
    'community.title': 'Finde deinen Tribe statt digitaler Isolation',
    'community.description': 'Trainiere nicht mehr allein vor dem Screen. Wir nutzen digitale Daten, um echte, physische Begegnungen in lokalen Tribes direkt in deiner Stadt zu kuratieren.',
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
    'features.lifestyle.caption': 'Regeneration ist Teil des Plans',

    // Screenshots
    'screenshots.label': 'Die App',
    'screenshots.title': 'Designt, um sich<br/>natürlich anzufühlen',
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
    'hiw.title': 'Drei Schritte zum Training<br/>im Einklang mit deinem Körper',
    'hiw.s1.title': 'Erzähl uns von dir',
    'hiw.s1.desc': 'Ein kurzes Onboarding erfasst deine Fitnessziele, Zyklusdaten, Energiemuster und persönliche Vorlieben, um dein einzigartiges Profil zu erstellen.',
    'hiw.s2.title': 'Dein täglicher Plan',
    'hiw.s2.desc': 'Jeden Morgen liefert Diamo ein personalisiertes Workout, angepasst an deine Zyklusphase, dein Energielevel und wie du geschlafen hast. Alles wissenschaftlich fundiert.',
    'hiw.s3.title': 'Bewege dich mit deinem Tribe',
    'hiw.s3.desc': 'Nimm an lokalen Events teil, teile deine Reise und vernetze dich mit Frauen, die im Einklang mit ihrem Körper trainieren. Weg vom Bildschirm, rein ins echte Leben.',

    // Team
    'team.label': 'Das Team',
    'team.title': 'Von Frauen<br/>für Frauen',
    'team.subtitle': 'Ein Team, das Management-Expertise, medizinisches Wissen und Kreativität vereint, um Frauengesundheit neu zu definieren.',
    'team.lara.role': 'Gründerin',
    'team.lara.focus': 'Creative & Growth',
    'team.lara.bio': 'Fokus auf Frauengesundheit in Einklang mit Marketing & Logiken: Medizinische Tiefe (angehende Heilpraktikerin). Kreativ-Direktion: Markenführung auf dem Niveau globaler Lifestyle-Brands (Erfahrung in der Filmbranche & Digital Media Studium). Management-Expertise (BWL Master).',
    'team.lara.t1': 'Kreativ-Direktion',
    'team.lara.t2': 'Frauengesundheit',
    'team.lara.t3': 'Markenstrategie',
    'team.hiring.title': 'Wir suchen Visionärinnen',
    'team.role1.title': 'Technical Co-Founder',
    'team.role1.desc': 'Aufbau der App-Architektur und des Zyklus-Algorithmus-Backends. Erfahrung mit Flutter, Firebase und API-Design erforderlich. Leidenschaft f\u00fcr Health-Tech ist ein Muss.',
    'team.role1.cta': 'Bewerben',
    'team.role2.title': 'Co-Founderin: Influencerin',
    'team.role2.desc': 'Fitness-Content-Creatorin mit bestehender Community, die eine Marke mitaufbauen m\u00f6chte. Du erstellst Workout-Videos, inspirierst Frauen und bringst eine echte Community mit.',
    'team.role2.cta': 'Bewerben',

    // Beta Signup
    'beta.label': 'Beta-Programm',
    'beta.title': 'Hilf uns, Fitness f\u00fcr Frauen zu revolutionieren',
    'beta.description': 'Wir laden eine kleine Gruppe von Frauen ein, Diamo vor dem Launch zu testen. Erhalte frühzeitigen Zugang, teile dein Feedback und hilf uns, etwas zu entwickeln, das wirklich zu deinem Körper und deinem Leben passt.',
    'beta.feat1': 'Kostenloser Zugang während der Beta',
    'beta.feat2': 'Direkter Einfluss auf Features',
    'beta.feat3': 'Founding-Member-Vorteile zum Launch',
    'beta.cta': 'Fr\u00fchzugang sichern',
    'beta.note': 'Begrenzte Pl\u00e4tze · Keine Verpflichtung · Jederzeit k\u00fcndbar',

    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'H\u00e4ufig gestellte Fragen',
    'faq.q0': 'Was ist Diamo?',
    'faq.a0': 'Diamo ist eine Fitness-App, die dein Training automatisch an deinen Menstruationszyklus anpasst. Sie analysiert deine Zyklusphase und erstellt dir t\u00e4glich einen personalisierten Trainingsplan \u2013 unterst\u00fctzt durch Daten deiner Smartwatch. Zus\u00e4tzlich verbindet dich Diamo mit lokalen Fitness-Communities (Tribes) in deiner Stadt.',
    'faq.q1': 'Was ist zyklusbasiertes Training?',
    'faq.a1': 'Zyklusbasiertes Training bedeutet, deine Workouts an die vier Phasen deines Menstruationszyklus anzupassen. In der Follikelphase und rund um den Eisprung bist du leistungsf\u00e4higer \u2013 ideal f\u00fcr intensives Training. In der Lutealphase und w\u00e4hrend der Menstruation profitierst du von moderateren Einheiten und Regeneration. Mehr dazu erf\u00e4hrst du in unserem ausf\u00fchrlichen Guide.',
    'faq.q2': 'Brauche ich einen Fitness-Tracker oder eine Smartwatch?',
    'faq.a2': 'Nein! Diamo funktioniert auch komplett ohne Wearable. Wenn du allerdings eine Apple Watch, einen Oura Ring oder ein Garmin-Ger\u00e4t hast, kann Diamo deine Gesundheitsdaten (HRV, Schlaf, Ruhepuls) nutzen, um dein Training noch pr\u00e4ziser an deinen K\u00f6rper anzupassen.',
    'faq.q3': 'Ist Diamo kostenlos?',
    'faq.a3': 'Ja, w\u00e4hrend der Beta-Phase ist Diamo komplett kostenlos. Als Early-Access-Nutzerin bekommst du vollen Zugang zu allen Features ohne Kosten. Nach dem offiziellen Launch wird es ein Freemium-Modell geben \u2013 Founding Members erhalten besondere Vorteile.',
    'faq.q4': 'Wann ist die App verf\u00fcgbar?',
    'faq.a4': 'Die Beta-Version startet im Sommer 2026 f\u00fcr eine kleine Gruppe von Testerinnen. Trag dich in die Warteliste ein, um als Erste informiert zu werden und dir deinen Platz zu sichern.',
    'faq.q5': 'F\u00fcr welche Ger\u00e4te wird Diamo verf\u00fcgbar sein?',
    'faq.a5': 'Diamo wird zum Start f\u00fcr iOS und Android verf\u00fcgbar sein. Die App unterst\u00fctzt die Integration mit Apple Watch, Oura Ring und Garmin-Ger\u00e4ten \u2013 weitere Wearables folgen nach dem Launch.',
    'faq.guide-link': '\u2192 Zum ausf\u00fchrlichen Guide: Zyklusbasiertes Training',

    // Footer
    'footer.tagline': 'Eine neue Ära der<br/>Frauengesundheit',
    'footer.product': 'Produkt',
    'footer.product.features': 'Features',
    'footer.product.how': 'So funktioniert\'s',
    'footer.product.app': 'Die App',
    'footer.product.blog': 'Blog',
    'footer.blog': 'Blog',
    'footer.blog.article1': 'Fitness-Apps vs. Zyklus',
    'footer.blog.article2': 'Wearables & Zyklus',
    'footer.company': 'Unternehmen',
    'footer.company.team': 'Team',
    'footer.company.careers': 'Karriere',
    'footer.company.about': '\u00dcber uns',
    'footer.company.press': 'Presse',
    'footer.contact': 'Kontakt',
    'footer.legal': '© 2026 Diamo. Alle Rechte vorbehalten.',
    'footer.disclaimer': 'Diamo ist kein Medizinprodukt und kein medizinischer Dienst. Die App bietet keine medizinische Beratung, Diagnose oder Behandlung. Konsultiere immer eine qualifizierte medizinische Fachkraft, bevor du ein Fitnessprogramm beginnst, insbesondere bei Schwangerschaft oder bestehenden Erkrankungen. Die Nutzung erfolgt auf eigenes Risiko. Diamo \u00fcbernimmt keine Haftung f\u00fcr gesundheitliche Auswirkungen.',
    'footer.geo': 'Diamo ist eine zyklusbasierte Fitness-App f\u00fcr Frauen, die Trainingspl\u00e4ne und Regeneration dynamisch an die hormonellen Phasen des weiblichen Zyklus anpasst.',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.imprint': 'Impressum',
    'page.title': 'Diamo | Zyklus-synchrone Workouts & Fitness Community',

    // About Page
    'about.title': 'Dein Zyklus ist deine Superkraft.',
    'about.title.italic': 'Wir helfen dir, sie zu nutzen.',
    'about.story.title': 'Warum es Diamo gibt',
    'about.story.p1': 'Viel zu lange hat Fitness den grundlegendsten Teil der weiblichen Biologie ignoriert: Den Zyklus. Trainingspl\u00e4ne haben an Tag 5 und Tag 25 die gleiche Leistung erwartet. Sie haben Frauen das Gef\u00fchl gegeben zu versagen, wenn ihr K\u00f6rper einfach etwas anderes brauchte.',
    'about.story.p2': 'Aber die Wissenschaft ist eindeutig: Jede Frau durchl\u00e4uft vier verschiedene Zyklusphasen, die ihre Energie, Kraft und Erholung auf einzigartige Weise beeinflussen. Das ist keine Einschr\u00e4nkung \u2014 es ist ein Vorteil, wenn man ihn zu nutzen wei\u00df.',
    'about.story.p3': 'Deshalb wurde Diamo gebaut. Die App, die endlich mit deinem Zyklus trainiert, nicht gegen ihn.',
    'about.vision.title': 'Training, das die Sprache deines Zyklus spricht',
    'about.vision.p1': 'In der Follikelphase ist dein K\u00f6rper bereit, Grenzen zu verschieben. In der Lutealphase braucht er eine andere Art von St\u00e4rke. Diamo kennt den Unterschied und passt dein Training entsprechend an.',
    'about.vision.p2': 'Wir verbinden die Daten deiner Apple Watch, deines Oura Rings oder Garmin mit Echtzeit-Zyklusbewusstsein, um einen Plan zu erstellen, der genau zu dir passt. Heute. Kein generischer Plan. Dein Plan.',
    'about.vision.p3': 'Und weil wir glauben, dass die besten Workouts gemeinsam passieren, verbindet Diamo dich mit Frauen in deiner N\u00e4he, die in einer \u00e4hnlichen Zyklusphase sind. Lokale Run Clubs, geteilte Energie, echte Connections. <strong>Offline first</strong>.',
    'about.values.title': 'Woran wir glauben',
    'about.values.intro': 'Diamo basiert auf einer einfachen \u00dcberzeugung: Frauen verdienen Fitness-Tools, die ihren K\u00f6rper wirklich verstehen. Das sind die Prinzipien, die alles leiten, was wir schaffen.',
    'about.value1.title': 'Wissenschaftlich fundiert',
    'about.value1.desc': 'Jede Empfehlung basiert auf echter Zykluswissenschaft und Sportphysiologie \u2014 keine Trends, kein Raten.',
    'about.value2.title': 'Community first',
    'about.value2.desc': 'Die besten Workouts passieren gemeinsam. Diamo verbindet dich mit lokalen Frauen in \u00e4hnlichen Zyklusphasen f\u00fcr echtes, offline Training.',
    'about.value3.title': 'F\u00fcr Frauen gebaut',
    'about.value3.desc': 'Kein Nachgedanke. Keine rosa Version einer M\u00e4nner-App. Diamo ist von Grund auf um den weiblichen K\u00f6rper und die weibliche Erfahrung herum designed.',
    'about.cta.title': 'Klingt nach etwas, das du erleben willst?',
    'about.cta.text': 'Wir sind noch ganz am Anfang und genau das macht es besonders. Sei von Anfang an dabei.',
    'about.cta.btn': 'Zur Warteliste',

    // Waitlist Modal
    'modal.label': 'Frühzugang',
    'modal.title': 'Sei unter den Ersten.',
    'modal.description': 'Trag dich auf unsere exklusive Warteliste ein und erhalte frühzeitigen Zugang zu Diamo vor dem offiziellen Launch. Wir benachrichtigen dich, wenn es soweit ist.',
    'modal.placeholder': 'Deine E-Mail-Adresse',
    'modal.submit': 'Eintragen',
    'modal.privacy': 'Kein Spam, versprochen. Wir respektieren deine Privatsphäre.',
    'modal.success.title': 'Bestätigt.',
    'modal.success.desc': 'Schau in dein Postfach für eine Bestätigungsmail.',

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

  // Update hrefs for language-specific links (e.g. blog posts)
  document.querySelectorAll('[data-i18n-href-en]').forEach(el => {
    const enHref = el.getAttribute('data-i18n-href-en');
    const deHref = el.getAttribute('data-i18n-href-de') || el.getAttribute('data-original-href') || el.getAttribute('href');
    // Store original DE href on first run
    if (!el.getAttribute('data-original-href')) {
      el.setAttribute('data-original-href', el.getAttribute('href'));
    }
    el.setAttribute('href', lang === 'en' ? enHref : el.getAttribute('data-original-href'));
  });

  // Update the language toggle button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update page title
  const pageTitle = translations[lang]['page.title'];
  if (pageTitle) {
    document.title = pageTitle;
  }

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
  if (browserLang === 'en') {
    setLanguage('en');
  }
  // Default is German (already rendered in HTML)
}

// Make globally accessible
window.setLanguage = setLanguage;
window.initLanguage = initLanguage;
