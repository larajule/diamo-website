// i18n Translation System for diamo Website
const translations = {
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.how': 'How It Works',
    'nav.team': 'Team',
    'nav.about': 'About Us',
    'nav.guide': 'Guide',
    'nav.cta': 'Become a Beta Tester',

    // Cookie Banner
    'cookie.text': 'We use cookies to improve our website and give you the best experience. Help us make diamo even better!',
    'cookie.accept': 'Accept',
    'cookie.decline': 'Decline',

    // Guide Page (Zyklusbasiertes Training)
    'guide.label': 'Fitness Guide',
    'guide.title': 'Cycle-Based Training:',
    'guide.title.accent': 'Your Workout Guide for Every Phase',
    'guide.intro': 'Your body isn\'t a machine that works the same every day. It goes through a fascinating cycle of four phases, each with its own energy, potential, and needs. Understanding this means training smarter and achieving sustainably better results.',
    'guide.why.title': 'Why Cycle-Based Training Makes Sense',
    'guide.why.p1': 'Traditional training plans treat every day the same: same exercises, same intensity, same expectations. But female physiology works differently. During the menstrual cycle, hormones like estrogen and progesterone fluctuate significantly, and with them strength, endurance, recovery ability, and even injury susceptibility.',
    'guide.why.p2': 'Studies in sports medicine show: Women who adapt their training to their cycle report <strong>fewer injuries</strong>, <strong>better recovery</strong>, and <strong>more motivation</strong>. It\'s not about training less, but doing the right thing at the right time.',
    'guide.why.p3': 'The female cycle can be divided into four main phases, each with different hormonal profiles. Each phase offers unique opportunities to optimize training. Below, we show you how to make the most of each phase.',
    'guide.phase1.badge': 'Phase 1 · Day 1–5',
    'guide.phase1.title': 'Menstruation: Focus on Recovery',
    'guide.phase1.p1': 'In the first days of your cycle, estrogen and progesterone are at their lowest levels. Your body directs its energy toward renewing the uterine lining, which you often feel as fatigue, cramps, or a general energy low.',
    'guide.phase1.p2': 'That doesn\'t mean you have to lie on the couch. Quite the opposite: Light, gentle movement can actually relieve symptoms during this phase. The key lies in the <strong>right intensity</strong>.',
    'guide.phase1.do.title': 'Recommended Activities',
    'guide.phase1.do.1': 'Gentle yoga and stretching',
    'guide.phase1.do.2': 'Light walks in nature',
    'guide.phase1.do.3': 'Low-intensity swimming',
    'guide.phase1.do.4': 'Breathing exercises and meditation',
    'guide.phase1.do.5': 'Foam rolling and mobility work',
    'guide.phase1.avoid.title': 'Better to avoid',
    'guide.phase1.avoid.1': 'High-intensity interval training (HIIT)',
    'guide.phase1.avoid.2': 'Heavy strength training with maximum weight',
    'guide.phase1.avoid.3': 'Long, intense cardio sessions',
    'guide.phase1.avoid.4': 'Competitions or performance tests',
    'guide.phase2.badge': 'Phase 2 · Day 6–13',
    'guide.phase2.title': 'Follicular Phase: Building Energy',
    'guide.phase2.p1': 'After menstruation, the body begins to produce more estrogen. This hormone has a remarkable effect: It boosts your performance, promotes muscle building, and improves your mood. Many women feel most energized and motivated during this phase.',
    'guide.phase2.p2': 'Use this phase to <strong>build progression</strong>. Your body is ready for new challenges, whether it\'s a new weight, a new exercise, or a faster pace. The follicular phase is the ideal time to work on strength and endurance.',
    'guide.phase2.do.title': 'Recommended Activities',
    'guide.phase2.do.1': 'Progressive strength training',
    'guide.phase2.do.2': 'HIIT and Tabata workouts',
    'guide.phase2.do.3': 'Learning new exercises and skills',
    'guide.phase2.do.4': 'More intense cardio (running, cycling)',
    'guide.phase2.do.5': 'Group training and competitions',
    'guide.phase2.avoid.title': 'Caution',
    'guide.phase2.avoid.1': 'Despite high energy: never skip warm-up',
    'guide.phase2.avoid.2': 'Avoid overtraining, schedule rest days',
    'guide.phase2.avoid.3': 'Listen to body signals, not just motivation',
    'guide.cta.title': 'Train smarter, not harder',
    'guide.cta.text': 'diamo creates a personalized training plan every day that perfectly matches your current cycle phase.',
    'guide.cta.btn': 'Secure Early Access',
    'guide.phase3.badge': 'Phase 3 · Day 14–16',
    'guide.phase3.title': 'Ovulation: Maximum Performance',
    'guide.phase3.p1': 'Ovulation marks the peak of your estrogen levels. The result: You\'re in top form. Strength, endurance, and coordination are at their maximum. Many elite female athletes strategically use this phase for personal bests.',
    'guide.phase3.p2': 'However, there\'s an important aspect to consider: Around ovulation, <strong>ligament injury susceptibility</strong> also increases, especially the anterior cruciate ligament (ACL). Studies show that elevated estrogen affects ligament elasticity. Careful warm-up and clean technique are particularly important during this phase.',
    'guide.phase3.do.title': 'Recommended Activities',
    'guide.phase3.do.1': 'PR attempts (Personal Records) in strength training',
    'guide.phase3.do.2': 'Sprint intervals and plyometric training',
    'guide.phase3.do.3': 'Intense group workouts',
    'guide.phase3.do.4': 'Competitions and performance tests',
    'guide.phase3.do.5': 'Challenging coordination exercises',
    'guide.phase3.avoid.title': 'Caution',
    'guide.phase3.avoid.1': 'Thorough warm-up is mandatory (ligament stability)',
    'guide.phase3.avoid.2': 'Technique over weight: prioritize clean form',
    'guide.phase3.avoid.3': 'For joint instabilities: reduce jumping exercises',
    'guide.phase4.badge': 'Phase 4 · Day 17–28',
    'guide.phase4.title': 'Luteal Phase: Maintain Strength & Preparation',
    'guide.phase4.p1': 'After ovulation, progesterone takes the lead. This hormone prepares the body for a possible pregnancy, and that has noticeable effects on your training. Body temperature rises slightly, resting heart rate may be elevated, and many women experience PMS symptoms like bloating, mood swings, or increased pain sensitivity.',
    'guide.phase4.p2': 'The goal in this phase is to <strong>maintain what you\'ve achieved</strong> without overloading the body. Moderate intensity is the key. Interestingly, the body uses more fat as an energy source during the luteal phase, an advantage for longer, steady endurance sessions.',
    'guide.phase4.do.title': 'Recommended Activities',
    'guide.phase4.do.1': 'Moderate strength training (70–80% intensity)',
    'guide.phase4.do.2': 'Steady-state cardio (jogging, cycling)',
    'guide.phase4.do.3': 'Pilates and barre workouts',
    'guide.phase4.do.4': 'Yoga flows for flexibility',
    'guide.phase4.do.5': 'Long walks and hiking',
    'guide.phase4.avoid.title': 'Better to avoid',
    'guide.phase4.avoid.1': 'Forcing new personal bests',
    'guide.phase4.avoid.2': 'High-intensity intervals on PMS days',
    'guide.phase4.avoid.3': 'Training when severely exhausted: rest is okay!',
    'guide.final.title': 'Ready to train in harmony with your body?',
    'guide.final.text': 'diamo automatically adapts your training to your current cycle phase. Evidence-based, personally tailored, with a real community.',
    'guide.final.btn': 'Secure Early Access Now',
    'guide.final.note': 'Free · Limited spots · Cancel anytime',

    // Hero
    'hero.micro': 'body intelligence system',
    'hero.title': 'Your body is not the same every day.<br/>Your training shouldn\'t be either.',
    'hero.description': 'diamo understands what your body truly needs today. Hormones, energy, sleep, stress. Every morning a workout that adapts to you. And a community of women who move together.',
    'hero.cta.beta': 'Get early access',
    'hero.discover': 'Discover',

    // Problem
    'problem.label': 'The Difference',
    'problem.title': 'Generic fitness misses<br/>what makes you, you.',
    'problem.s1': 'Your body follows its own rhythm. Your energy, strength and recovery shift every single day. Most apps completely ignore this.',
    'problem.s2': 'diamo reads your cycle data, sleep, stress and activity to build a workout that fits exactly where you are today. Personalized, every single morning.',
    'problem.s3': 'No expensive hardware. No cookie-cutter plans. A system that truly understands how women\'s bodies work.',

    // Features
    'features.label': 'What you get',
    'features.title': 'Four reasons your training<br/>will finally feel right',
    'features.f1.title': 'The right workout. Every single day.',
    'features.f1.desc': 'Your estrogen rises and you have more power for strength and endurance. Progesterone rises and your body craves rest. Training against your cycle risks injury and frustration. diamo adapts so you don\'t have to.',
    'features.f1.t1': 'Strength',
    'features.f1.t2': 'Endurance',
    'features.f1.t3': 'Mobility',
    'features.f1.t4': 'Recovery',
    'features.f1.highlight': 'Strength, endurance, mobility or active recovery. Every morning a plan that matches your energy, cycle phase and sleep quality.',
    'features.f2.title': 'Your phone is enough. Really.',
    'features.f2.highlight': 'Personalized training from day 1. No extra cost, no wearable. Just your phone and your health app.',
    'features.f2.desc': 'Your phone already tracks steps, distance and flights via Apple Health or Google Fit. Completely free. That\'s enough for smart recommendations. Got a smartwatch? We\'ll also use heart rate, HRV, sleep and VO2max. But you can start right away, without spending a cent.',
    'features.f2.t1': 'No wearable needed',
    'features.f2.t2': 'Health Apps',
    'features.f2.t3': 'Start instantly',
    'features.f3.title': 'Move together. Real connections.',
    'features.f3.highlight': 'Find women in your city who actually move. Sport events, groups and sessions together.',
    'features.f3.desc': 'Training alone lasts 3 months. Training together lasts a lifetime. diamo connects you with real women in your city. No feed, no comparison. Just show up, move together and find your people.',
    'features.f3.t1': 'Move together',
    'features.f3.t2': 'Local events',
    'features.f3.t3': 'Real people',
    'features.f4.title': 'No guilt. Never again.',
    'features.f4.highlight': '30-second morning check-in. Your workout adapts to your energy, sleep and stress level.',
    'features.f4.desc': 'Other apps punish rest days with broken streaks. diamo understands: bad sleep, luteal phase and stress mean mobility over HIIT today. Because rest is sometimes the best workout.',
    'features.f4.t1': 'Morning check-in',
    'features.f4.t2': 'Smart rest days',
    'features.f4.t3': 'Your pace',

    // Screenshots
    'screenshots.label': 'The App',
    'screenshots.title': 'Designed to feel<br/>like second nature.',
    'screenshots.subtitle': 'Clean, focused and built around what matters to you.',
    'screenshots.home': 'Today',
    'screenshots.home.desc': 'Your daily workout, readiness score and personalized insights',
    'screenshots.calendar': 'Calendar',
    'screenshots.calendar.desc': 'Cycle phases, training types and your weekly rhythm in one view',
    'screenshots.community': 'Community',
    'screenshots.community.desc': 'Stories, run clubs, local events and real connections',
    'screenshots.personal': 'You',
    'screenshots.personal.desc': 'Your patterns, streaks and personal training profile',

    // Community
    'community.label': 'Community',
    'community.title': 'Training doesn\'t end<br/>on screen.',
    'community.description': 'Train on your own or find your girls. diamo connects you with local groups, studios and real events in your city.',

    // How It Works
    'hiw.label': 'How It Works',
    'hiw.title': 'Three steps.<br/>One system.',
    'hiw.s1.title': 'Tell us about you',
    'hiw.s1.desc': 'Your goals, experience, cycle, preferences and how you feel today. A short check-in is all it takes.',
    'hiw.s2.title': 'Get your plan',
    'hiw.s2.desc': 'diamo creates a personalized workout for today, based on your cycle phase, energy, sleep and recovery.',
    'hiw.s3.title': 'Train and connect',
    'hiw.s3.desc': 'Your body changes, and diamo changes with it. Train solo or connect with women near you for events, challenges and real-life movement.',

    // Team
    'team.label': 'The Founders',
    'team.title': 'Built by women.<br/>For women.',
    'team.subtitle': 'Most fitness apps treat every body the same. Same plan, same expectations, every day. But women\'s bodies are complex, dynamic and powerful. We built diamo to finally reflect that.',
    'team.lara.name': 'Lara',
    'team.tagline': 'by women for women',
    'team.lara.bio': 'Hi, I\'m Lara! As an aspiring naturopath, my greatest passion is making real knowledge about the female body accessible. Before founding diamo, I worked in the film industry, complemented by my Master\'s in Business. For me, health doesn\'t have to be clinical and dry. I want diamo to combine scientific depth with the design and feel of a modern lifestyle brand.',
    'team.marie.name': 'Marie',
    'team.marie.bio': 'I\'m Marie and I take care of strategy and operations at diamo. My professional journey started in management consulting (Inverto/BCG) and venture capital (Coparion), where I learned to think analytically and big. But my true passion has always been in sports. As a licensed fitness trainer, I know exactly what our bodies need. At diamo, I now bring both worlds together: logic and a genuine love for movement.',

    // Beta Signup
    'beta.title': 'Limited spots.<br/>Yours could be one.',
    'beta.description': 'The beta launches soon with a small, exclusive group. You test diamo for free, give feedback and shape the app before anyone else sees it. Founding members get special perks at launch.',
    'beta.cta': 'Reserve your spot',
    'beta.note': 'Limited spots · Free · Founding member perks',

    // Footer
    'footer.tagline': 'Train with your body,<br/>not against it.',
    'footer.product': 'Product',
    'footer.product.features': 'Features',
    'footer.product.how': 'How It Works',
    'footer.product.app': 'The App',
    'footer.product.guide': 'Cycle-Based Training Guide',
    'footer.company': 'Company',
    'footer.company.team': 'Team',
    'footer.company.careers': 'Careers',
    'footer.company.press': 'Press',
    'footer.company.about': 'About Us',
    'footer.contact': 'Get in Touch',
    'footer.legal': '© 2026 diamo. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.imprint': 'Imprint',
    'footer.blog': 'Blog',
    'footer.blog.article1': 'Fitness Apps vs. Cycle',
    'footer.blog.article2': 'Wearables & Cycle',
    'footer.geo': 'diamo is a cycle-based fitness app for women that dynamically adapts training plans and recovery to the hormonal phases of the female cycle.',
    'footer.disclaimer': 'diamo is not a medical device or medical service. The app does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before starting any fitness program, especially during pregnancy or with existing conditions. Use at your own risk. diamo assumes no liability for health effects.',

    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.guide-link': '→ Read the full guide: Cycle-Based Training',
    'faq.q0': 'What is diamo?',
    'faq.a0': 'diamo is a fitness app that automatically adapts your training to your menstrual cycle. It analyzes your cycle phase and creates a personalized daily workout plan using health data from Apple Health or Google Fit. Additionally, diamo connects you with local fitness communities in your city.',
    'faq.q1': 'What is cycle-based training?',
    'faq.a1': 'Cycle-based training means adapting your workouts to the four phases of your menstrual cycle. During the follicular phase and around ovulation, you can train more intensely. During the luteal phase and menstruation, you benefit from moderate sessions and recovery. Learn more in our detailed guide.',
    'faq.q2': 'Do I need special hardware or a smartwatch?',
    'faq.a2': 'No! diamo works completely without any additional hardware. The app reads your health data directly from your phone\'s built-in health app (Apple Health or Google Fit). If you also own a smartwatch or fitness tracker, diamo can use that data too to fine-tune your training even further.',
    'faq.q3': 'Is diamo free?',
    'faq.a3': 'Yes, during the beta phase diamo is completely free. As an early access user, you get full access to all features at no cost. After the official launch, there will be a freemium model. Founding members receive special benefits.',
    'faq.q4': 'When will the app be available?',
    'faq.a4': 'The beta version launches soon for a small group of testers. Join the waitlist to be the first to know and secure your spot.',
    'faq.q5': 'Which devices will diamo be available on?',
    'faq.a5': 'diamo will be available for iOS and Android at launch. The app integrates seamlessly with Apple Health and Google Fit, so your existing health data can be used right away.',

    // About Page
    'about.title': 'Your cycle is your superpower.',
    'about.title.italic': 'We\'re here to unlock it.',
    'about.story.title': 'Why diamo exists',
    'about.story.p1': 'For too long, fitness has ignored the most fundamental part of female biology: The cycle. Training plans expected the same performance on day 5 and day 25. They made women feel like failures when their bodies simply needed something different.',
    'about.story.p2': 'But the science is clear: Every woman moves through four distinct cycle phases, each shaping her energy, strength, and recovery in unique ways. This isn\'t a limitation, it\'s an advantage, if you know how to use it.',
    'about.story.p3': 'That\'s why diamo was built. The app that finally trains with your cycle, not against it.',
    'about.vision.title': 'Training that speaks your cycle\'s language',
    'about.vision.p1': 'During your follicular phase, your body is ready to push limits. During your luteal phase, it needs a different kind of strength. diamo knows the difference and adapts your training accordingly.',
    'about.vision.p2': 'We connect the data from your Apple Watch, Oura Ring, or Garmin with real-time cycle awareness to create a plan that fits exactly where you are today. Not a generic plan. Your plan.',
    'about.vision.p3': 'And because we believe the best workouts happen together, diamo connects you with women near you who are in a similar cycle phase. Local run clubs, shared energy, real connections. <strong>Offline first</strong>.',
    'about.values.title': 'What we believe',
    'about.values.intro': 'diamo is built on a simple conviction: Women deserve fitness tools that truly understand their bodies. These are the principles that guide everything we create.',
    'about.value2.title': 'Community first',
    'about.value2.desc': 'The best workouts happen together. diamo connects you with local women in similar cycle phases for real, offline training.',
    'about.value3.title': 'Built for women',
    'about.value3.desc': 'Not an afterthought. Not a pink version of a men\'s app. diamo is designed from scratch around the female body and experience.',
    'about.cta.title': 'Sound like something you want to be part of?',
    'about.cta.text': 'We\'re just getting started and that\'s what makes it special. Be there from the beginning.',
    'about.cta.btn': 'Become a Beta Tester',

    // Beta Modal
    'modal.label': 'Beta Program',
    'modal.title': 'Become a Beta Tester.',
    'modal.description': 'Secure your exclusive spot and shape diamo from the very start. Your feedback flows directly into development.',
    'modal.placeholder': 'Your email address',
    'modal.submit': 'Secure Beta Access',
    'modal.privacy': 'Limited spots · No spam, ever.',
    'modal.success.title': 'You\'re in!',
    'modal.success.desc': 'We\'ll reach out to you when it\'s time to start.',

    // Beta Tester Modal
    'beta-modal.label': 'Beta Tester Program',
    'beta-modal.title': 'Test diamo before everyone else.',
    'beta-modal.description': 'We\'re looking for a small group of women to test diamo starting July 2026. As a beta tester, you\'ll get free access, shape the product with your feedback, and earn founding member perks at launch.',
    'beta-modal.name-placeholder': 'Your name',
    'beta-modal.email-placeholder': 'Your email address',
    'beta-modal.motivation-placeholder': 'Why do you want to test diamo? (optional)',
    'beta-modal.submit': 'Apply as Beta Tester',
    'beta-modal.privacy': 'Limited spots · Starting July 2026',
    'beta-modal.success.title': 'Application received!',
    'beta-modal.success.desc': 'We\'ll review your application and get back to you soon.',

    // Apply Modal
    'apply-modal.label': 'Join the Team',
    'apply-modal.title': 'Build something meaningful.',
    'apply-modal.description': 'Tell us about yourself and why you\'d be a great fit for diamo. We\'re looking for passionate people who want to reshape women\'s health.',
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
    'nav.guide': 'Guide',
    'nav.cta': 'Beta-Testerin werden',

    // Cookie Banner
    'cookie.text': 'Wir nutzen Cookies, um unsere Website zu verbessern und dir das beste Erlebnis zu bieten. Hilf uns dabei, diamo noch besser zu machen!',
    'cookie.accept': 'Akzeptieren',
    'cookie.decline': 'Ablehnen',

    // Guide Page (Zyklusbasiertes Training)
    'guide.label': 'Fitness-Guide',
    'guide.title': 'Zyklusbasiertes Training:',
    'guide.title.accent': 'Dein Workout-Guide für jede Phase',
    'guide.intro': 'Dein Körper ist keine Maschine, die jeden Tag gleich funktioniert. Er durchläuft einen faszinierenden Zyklus aus vier Phasen, jede mit eigener Energie, eigenem Potenzial und eigenen Bedürfnissen. Wer das versteht, trainiert nicht nur klüger, sondern erzielt nachhaltig bessere Ergebnisse.',
    'guide.why.title': 'Warum Training nach dem Zyklus Sinn macht',
    'guide.why.p1': 'Klassische Trainingspläne behandeln jeden Tag gleich: gleiche Übungen, gleiche Intensität, gleiche Erwartungen. Doch die weibliche Physiologie funktioniert anders. Während des Menstruationszyklus schwanken Hormone wie Östrogen und Progesteron erheblich, und mit ihnen Kraft, Ausdauer, Erholungsfähigkeit und sogar die Verletzungsanfälligkeit.',
    'guide.why.p2': 'Studien aus der Sportmedizin zeigen: Frauen, die ihr Training an ihren Zyklus anpassen, berichten von <strong>weniger Verletzungen</strong>, <strong>besserer Regeneration</strong> und <strong>mehr Motivation</strong>. Es geht nicht darum, weniger zu trainieren, sondern zur richtigen Zeit das Richtige zu tun.',
    'guide.why.p3': 'Der weibliche Zyklus lässt sich in vier Hauptphasen unterteilen, die jeweils unterschiedliche hormonelle Profile aufweisen. Jede Phase bietet einzigartige Chancen, das Training zu optimieren. Im Folgenden zeigen wir dir, wie du jede Phase für dich nutzen kannst.',
    'guide.phase1.badge': 'Phase 1 · Tag 1–5',
    'guide.phase1.title': 'Menstruation: Fokus auf Regeneration',
    'guide.phase1.p1': 'In den ersten Tagen deines Zyklus befinden sich Östrogen und Progesteron auf ihrem niedrigsten Niveau. Dein Körper richtet seine Energie auf die Erneuerung der Gebärmutterschleimhaut, und das spürst du oft in Form von Müdigkeit, Krämpfen oder einem allgemeinen Energietief.',
    'guide.phase1.p2': 'Das bedeutet nicht, dass du dich auf die Couch legen musst. Ganz im Gegenteil: Leichte, sanfte Bewegung kann in dieser Phase sogar Beschwerden lindern. Der Schlüssel liegt in der <strong>richtigen Intensität</strong>.',
    'guide.phase1.do.title': 'Empfohlene Aktivitäten',
    'guide.phase1.do.1': 'Sanftes Yoga und Stretching',
    'guide.phase1.do.2': 'Leichte Spaziergänge in der Natur',
    'guide.phase1.do.3': 'Schwimmen mit niedriger Intensität',
    'guide.phase1.do.4': 'Atemübungen und Meditation',
    'guide.phase1.do.5': 'Foam Rolling und Mobility-Work',
    'guide.phase1.avoid.title': 'Besser vermeiden',
    'guide.phase1.avoid.1': 'Hochintensives Intervalltraining (HIIT)',
    'guide.phase1.avoid.2': 'Schweres Krafttraining mit Maximalgewicht',
    'guide.phase1.avoid.3': 'Lange, intensive Cardio-Einheiten',
    'guide.phase1.avoid.4': 'Wettkämpfe oder Performance-Tests',
    'guide.phase2.badge': 'Phase 2 · Tag 6–13',
    'guide.phase2.title': 'Follikelphase: Energieaufbau',
    'guide.phase2.p1': 'Nach der Menstruation beginnt der Körper, vermehrt Östrogen zu produzieren. Dieses Hormon hat einen bemerkenswerten Effekt: Es steigert deine Leistungsfähigkeit, fördert den Muskelaufbau und verbessert deine Stimmung. Viele Frauen fühlen sich in dieser Phase am energiegeladensten und motiviertesten.',
    'guide.phase2.p2': 'Nutze diese Phase, um <strong>Progression aufzubauen</strong>. Dein Körper ist bereit für neue Herausforderungen, sei es ein neues Gewicht, eine neue Übung oder ein schnelleres Tempo. Die Follikelphase ist der ideale Zeitraum, um an Kraft und Ausdauer zu arbeiten.',
    'guide.phase2.do.title': 'Empfohlene Aktivitäten',
    'guide.phase2.do.1': 'Progressives Krafttraining',
    'guide.phase2.do.2': 'HIIT und Tabata-Workouts',
    'guide.phase2.do.3': 'Neue Übungen und Skills lernen',
    'guide.phase2.do.4': 'Intensiveres Cardio (Laufen, Radfahren)',
    'guide.phase2.do.5': 'Gruppentraining und Wettkämpfe',
    'guide.phase2.avoid.title': 'Achtung',
    'guide.phase2.avoid.1': 'Trotz hoher Energie: Warm-up nie überspringen',
    'guide.phase2.avoid.2': 'Übertraining vermeiden, Ruhetage einplanen',
    'guide.phase2.avoid.3': 'Auf Körpersignale achten, nicht nur auf Motivation',
    'guide.cta.title': 'Trainiere smarter, nicht härter',
    'guide.cta.text': 'diamo erstellt dir jeden Tag einen personalisierten Trainingsplan, der genau zu deiner aktuellen Zyklusphase passt.',
    'guide.cta.btn': 'Frühzugang sichern',
    'guide.phase3.badge': 'Phase 3 · Tag 14–16',
    'guide.phase3.title': 'Eisprung: Maximale Performance',
    'guide.phase3.p1': 'Der Eisprung markiert den Höhepunkt deines Östrogenspiegels. Das Ergebnis: Du bist in Topform. Kraft, Ausdauer und Koordination befinden sich auf ihrem Maximum. Viele Spitzensportlerinnen nutzen diese Phase gezielt für persönliche Bestleistungen.',
    'guide.phase3.p2': 'Allerdings gibt es einen wichtigen Aspekt zu beachten: Rund um den Eisprung steigt auch die <strong>Verletzungsanfälligkeit der Bänder</strong>, insbesondere des vorderen Kreuzbandes (ACL). Studien zeigen, dass das erhöhte Östrogen die Elastizität der Bänder beeinflusst. Ein sorgfältiges Aufwärmen und saubere Technik sind in dieser Phase besonders wichtig.',
    'guide.phase3.do.title': 'Empfohlene Aktivitäten',
    'guide.phase3.do.1': 'PR-Versuche (Personal Records) im Krafttraining',
    'guide.phase3.do.2': 'Sprint-Intervalle und plyometrisches Training',
    'guide.phase3.do.3': 'Intensive Gruppenworkouts',
    'guide.phase3.do.4': 'Wettkämpfe und Leistungstests',
    'guide.phase3.do.5': 'Anspruchsvolle Koordinationsübungen',
    'guide.phase3.avoid.title': 'Achtung',
    'guide.phase3.avoid.1': 'Gründliches Aufwärmen ist Pflicht (Bandstabilität)',
    'guide.phase3.avoid.2': 'Technik vor Gewicht: saubere Ausführung priorisieren',
    'guide.phase3.avoid.3': 'Bei Gelenk-Instabilitäten: Sprungübungen reduzieren',
    'guide.phase4.badge': 'Phase 4 · Tag 17–28',
    'guide.phase4.title': 'Lutealphase: Kraft erhalten & Vorbereitung',
    'guide.phase4.p1': 'Nach dem Eisprung übernimmt Progesteron die Führung. Dieses Hormon bereitet den Körper auf eine mögliche Schwangerschaft vor, und das hat spürbare Auswirkungen auf dein Training. Die Körpertemperatur steigt leicht an, der Ruhepuls kann erhöht sein, und viele Frauen erleben PMS-Symptome wie Blähungen, Stimmungsschwankungen oder erhöhte Schmerzempfindlichkeit.',
    'guide.phase4.p2': 'Das Ziel in dieser Phase ist es, <strong>das Erreichte zu erhalten</strong>, ohne den Körper zu überlasten. Moderate Intensität ist der Schlüssel. Interessanterweise nutzt der Körper in der Lutealphase vermehrt Fett als Energiequelle, ein Vorteil für längere, gleichmäßige Ausdauereinheiten.',
    'guide.phase4.do.title': 'Empfohlene Aktivitäten',
    'guide.phase4.do.1': 'Moderates Krafttraining (70–80% Intensität)',
    'guide.phase4.do.2': 'Steady-State Cardio (Joggen, Radfahren)',
    'guide.phase4.do.3': 'Pilates und Barre-Workouts',
    'guide.phase4.do.4': 'Yoga-Flows für Flexibilität',
    'guide.phase4.do.5': 'Lange Spaziergänge und Wandern',
    'guide.phase4.avoid.title': 'Besser vermeiden',
    'guide.phase4.avoid.1': 'Neue persönliche Bestleistungen erzwingen',
    'guide.phase4.avoid.2': 'Hochintensive Intervalle an PMS-Tagen',
    'guide.phase4.avoid.3': 'Training bei starker Erschöpfung: Ruhe ist ok!',
    'guide.final.title': 'Bereit, im Einklang mit deinem Körper zu trainieren?',
    'guide.final.text': 'diamo passt dein Training automatisch an deine aktuelle Zyklusphase an. Evidenzbasiert, persönlich zugeschnitten, mit einer echten Community.',
    'guide.final.btn': 'Jetzt Frühzugang sichern',
    'guide.final.note': 'Kostenlos · Begrenzte Plätze · Jederzeit kündbar',

    'hero.micro': 'body intelligence system',
    'hero.title': 'Dein Körper ist nicht jeden Tag gleich.<br/>Dein Training ab jetzt auch nicht.',
    'hero.description': 'diamo versteht, was dein Körper heute wirklich braucht. Hormone, Energie, Schlaf, Stress. Jeden Morgen ein Workout, das sich dir anpasst. Und eine Community aus Frauen, die sich gemeinsam bewegen.',
    'hero.cta.beta': 'Early Access sichern',
    'hero.discover': 'Entdecken',

    // Problem
    'problem.label': 'Der Unterschied',
    'problem.title': 'Standard-Fitness übersieht,<br/>was dich ausmacht.',
    'problem.s1': 'Dein Körper folgt seinem eigenen Rhythmus. Energie, Kraft und Regeneration verändern sich jeden einzelnen Tag. Die meisten Apps ignorieren das komplett.',
    'problem.s2': 'diamo liest deine Zyklusdaten, Schlaf, Stress und Aktivität und baut daraus ein Workout, das genau zu dir passt. Personalisiert, jeden einzelnen Morgen.',
    'problem.s3': 'Keine teure Hardware. Keine 08/15-Pläne. Ein System, das wirklich versteht, wie Frauenkörper funktionieren.',

    // Features
    'features.label': 'Was du bekommst',
    'features.title': 'Vier Gründe, warum dein Training<br/>sich endlich richtig anfühlen wird',
    'features.f1.title': 'Jeden Tag das richtige Workout',
    'features.f1.desc': 'Dein Östrogen steigt und du hast mehr Power für Kraft und Ausdauer. Progesteron steigt und dein Körper braucht Ruhe. Gegen deinen Zyklus zu trainieren riskiert Verletzungen und Frust. diamo passt sich an, damit du es nicht musst.',
    'features.f1.t1': 'Kraft',
    'features.f1.t2': 'Ausdauer',
    'features.f1.t3': 'Mobilität',
    'features.f1.t4': 'Erholung',
    'features.f1.highlight': 'Kraft, Ausdauer, Mobilität oder aktive Erholung. Jeden Morgen ein Plan, der zu deinem heutigen Energielevel passt.',
    'features.f2.title': 'Dein Smartphone reicht. Wirklich.',
    'features.f2.highlight': 'Personalisiertes Training ab Tag 1. Ohne Zusatzkosten, ohne Wearable. Nur dein Smartphone und deine Health App.',
    'features.f2.desc': 'Dein Smartphone misst bereits Schritte, Strecke und Treppensteigen. Kostenlos über Apple Health oder Google Fit. Das reicht für smarte Empfehlungen. Hast du eine Smartwatch? Dann nutzen wir zusätzlich Herzfrequenz, HRV, Schlaf und VO2max. Aber starten kannst du sofort, ohne einen Cent extra.',
    'features.f2.t1': 'Kein Wearable nötig',
    'features.f2.t2': 'Health Apps',
    'features.f2.t3': 'Sofort starten',
    'features.f3.title': 'Gemeinsam bewegen. Echte Verbindungen.',
    'features.f3.highlight': 'Finde Frauen in deiner Stadt, die sich wirklich bewegen. Sport-Events, Gruppen und gemeinsame Sessions.',
    'features.f3.desc': 'Alleine trainieren hält 3 Monate. Zusammen trainieren hält ein Leben. diamo verbindet dich mit echten Frauen in deiner Stadt. Kein Feed, kein Vergleich. Einfach ankommen, gemeinsam bewegen und deine Leute finden.',
    'features.f3.t1': 'Gemeinsam bewegen',
    'features.f3.t2': 'Lokale Events',
    'features.f3.t3': 'Echte Menschen',
    'features.f4.title': 'Kein Schuldgefühl. Nie wieder.',
    'features.f4.highlight': '30 Sekunden Check-in am Morgen. Dein Workout passt sich an Energie, Schlaf und Stresslevel an.',
    'features.f4.desc': 'Andere Apps bestrafen Pausen mit gebrochenen Streaks. diamo erkennt: Schlechter Schlaf, Lutealphase und Stress bedeuten heute Mobilität statt HIIT. Weil Pause manchmal das beste Workout ist.',
    'features.f4.t1': 'Morgen Check-in',
    'features.f4.t2': 'Smarte Ruhetage',
    'features.f4.t3': 'Dein Tempo',

    // Screenshots
    'screenshots.label': 'Die App',
    'screenshots.title': 'Designt, damit es sich<br/>natürlich anfühlt.',
    'screenshots.subtitle': 'Klar, fokussiert und gebaut um das, was dir wichtig ist.',
    'screenshots.home': 'Heute',
    'screenshots.home.desc': 'Dein tägliches Workout, Readiness-Score und personalisierte Einblicke',
    'screenshots.calendar': 'Kalender',
    'screenshots.calendar.desc': 'Zyklusphasen, Trainingstypen und dein Wochenrhythmus auf einen Blick',
    'screenshots.community': 'Community',
    'screenshots.community.desc': 'Stories, Laufgruppen, lokale Events und echte Verbindungen',
    'screenshots.personal': 'Du',
    'screenshots.personal.desc': 'Deine Muster, Streaks und dein persönliches Trainingsprofil',

    // Community
    'community.label': 'Community',
    'community.title': 'Training endet nicht<br/>am Screen.',
    'community.description': 'Trainiere alleine oder finde deine Girls. diamo verbindet dich mit lokalen Gruppen, Studios und echten Events in deiner Stadt.',

    // How It Works
    'hiw.label': 'So funktioniert\'s',
    'hiw.title': 'Drei Schritte.<br/>Ein System.',
    'hiw.s1.title': 'Erzähl uns von dir',
    'hiw.s1.desc': 'Deine Ziele, Erfahrung, Zyklus, Vorlieben und wie du dich heute fühlst. Ein kurzer Check-in reicht.',
    'hiw.s2.title': 'Dein Plan steht',
    'hiw.s2.desc': 'diamo erstellt dir ein personalisiertes Workout für heute, basierend auf Zyklusphase, Energie, Schlaf und Regeneration.',
    'hiw.s3.title': 'Trainieren und anpassen',
    'hiw.s3.desc': 'Dein Körper verändert sich, und diamo verändert sich mit. Trainiere solo oder verbinde dich mit Frauen in deiner Nähe für Events, Challenges und echte Bewegung.',

    // Team
    'team.label': 'Das Team',
    'team.title': 'Von Frauen.<br/>Für Frauen.',
    'team.subtitle': 'Die meisten Fitness-Apps behandeln jeden Körper gleich. Gleicher Plan, gleiche Erwartung, jeden Tag. Aber Frauenkörper sind komplex, dynamisch und kraftvoll. Wir haben diamo gebaut, um dem endlich gerecht zu werden.',
    'team.lara.name': 'Lara',
    'team.tagline': 'von Frauen für Frauen',
    'team.lara.bio': 'Hi, ich bin Lara! Als angehende Heilpraktikerin ist es meine größte Leidenschaft, echtes Wissen über den weiblichen Körper zugänglich zu machen. Bevor ich diamo gegründet habe, war ich in der Filmbranche tätig, ergänzt durch meinen BWL-Master. Für mich muss Gesundheit nicht klinisch und trocken sein. Ich möchte, dass diamo wissenschaftlichen Tiefgang mit dem Design und dem Gefühl einer modernen Lifestyle-Brand vereint.',
    'team.marie.name': 'Marie',
    'team.marie.bio': 'Ich bin Marie und kümmere mich bei diamo um die Strategie und die operativen Abläufe. Meine berufliche Reise startete in der Unternehmensberatung (Inverto/BCG) und im Venture Capital (Coparion), wo ich gelernt habe, Dinge analytisch und groß zu denken. Meine wahre Leidenschaft lag aber schon immer im Sport. Als lizenzierte Fitnesstrainerin weiß ich genau, was unser Körper braucht. Bei diamo bringe ich nun beide Welten zusammen: Logik und echte Liebe zur Bewegung.',

    // Beta Signup
    'beta.title': 'Begrenzte Plätze.<br/>Einer könnte deiner sein.',
    'beta.description': 'Die Beta startet bald mit einer kleinen, exklusiven Gruppe. Du testest diamo kostenlos, gibst Feedback und formst die App, bevor sie alle anderen sehen. Founding Members erhalten besondere Vorteile zum Launch.',
    'beta.cta': 'Jetzt Platz sichern',
    'beta.note': 'Begrenzte Plätze · Kostenlos · Founding Member Vorteile',

    // Footer
    'footer.tagline': 'Trainiere mit deinem Körper,<br/>nicht gegen ihn.',
    'footer.product': 'Produkt',
    'footer.product.features': 'Features',
    'footer.product.how': 'So funktioniert\'s',
    'footer.product.app': 'Die App',
    'footer.product.guide': 'Zyklusbasiertes Training',
    'footer.company': 'Unternehmen',
    'footer.company.team': 'Team',
    'footer.company.careers': 'Karriere',
    'footer.company.press': 'Presse',
    'footer.company.about': 'Über uns',
    'footer.contact': 'Kontakt',
    'footer.legal': '© 2026 diamo. Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.imprint': 'Impressum',
    'footer.blog': 'Blog',
    'footer.blog.article1': 'Fitness-Apps vs. Zyklus',
    'footer.blog.article2': 'Wearables & Zyklus',
    'footer.geo': 'diamo ist eine zyklusbasierte Fitness-App für Frauen, die Trainingspläne und Regeneration dynamisch an die hormonellen Phasen des weiblichen Zyklus anpasst.',
    'footer.disclaimer': 'diamo ist kein Medizinprodukt und kein medizinischer Dienst. Die App bietet keine medizinische Beratung, Diagnose oder Behandlung. Konsultiere immer eine qualifizierte medizinische Fachkraft, bevor du ein Fitnessprogramm beginnst, insbesondere bei Schwangerschaft oder bestehenden Erkrankungen. Die Nutzung erfolgt auf eigenes Risiko. diamo übernimmt keine Haftung für gesundheitliche Auswirkungen.',

    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'Häufig gestellte Fragen',
    'faq.guide-link': '→ Zum ausführlichen Guide: Zyklusbasiertes Training',
    'faq.q0': 'Was ist diamo?',
    'faq.a0': 'diamo ist eine Fitness-App, die dein Training automatisch an deinen Menstruationszyklus anpasst. Sie analysiert deine Zyklusphase und erstellt dir täglich einen personalisierten Trainingsplan. Dafür nutzt diamo Gesundheitsdaten aus Apple Health oder Google Fit. Zusätzlich verbindet dich diamo mit lokalen Fitness-Communities in deiner Stadt.',
    'faq.q1': 'Was ist zyklusbasiertes Training?',
    'faq.a1': 'Zyklusbasiertes Training bedeutet, deine Workouts an die vier Phasen deines Menstruationszyklus anzupassen. In der Follikelphase und rund um den Eisprung bist du leistungsfähiger und kannst intensiver trainieren. In der Lutealphase und während der Menstruation profitierst du von moderateren Einheiten und Regeneration. Mehr dazu erfährst du in unserem ausführlichen Guide.',
    'faq.q2': 'Brauche ich spezielle Hardware oder eine Smartwatch?',
    'faq.a2': 'Nein! diamo funktioniert komplett ohne zusätzliche Hardware. Die App liest deine Gesundheitsdaten direkt aus der Health App deines Smartphones (Apple Health oder Google Fit). Wenn du zusätzlich eine Smartwatch oder einen Fitness-Tracker besitzt, kann diamo diese Daten ebenfalls nutzen, um dein Training noch genauer anzupassen.',
    'faq.q3': 'Ist diamo kostenlos?',
    'faq.a3': 'Ja, während der Beta-Phase ist diamo komplett kostenlos. Als Early-Access-Nutzerin bekommst du vollen Zugang zu allen Features ohne Kosten. Nach dem offiziellen Launch wird es ein Freemium-Modell geben. Founding Members erhalten besondere Vorteile.',
    'faq.q4': 'Wann ist die App verfügbar?',
    'faq.a4': 'Die Beta-Version startet bald für eine kleine Gruppe von Testerinnen. Trag dich in die Warteliste ein, um als Erste informiert zu werden und dir deinen Platz zu sichern.',
    'faq.q5': 'Für welche Geräte wird diamo verfügbar sein?',
    'faq.a5': 'diamo wird zum Start für iOS und Android verfügbar sein. Die App integriert sich nahtlos mit Apple Health und Google Fit, sodass deine vorhandenen Gesundheitsdaten direkt genutzt werden können.',

    // Beta Modal
    'modal.label': 'Beta-Programm',
    'modal.title': 'Werde Beta-Testerin.',
    'modal.description': 'Sichere dir deinen exklusiven Platz und gestalte diamo von Anfang an mit. Dein Feedback fließt direkt in die Entwicklung ein.',
    'modal.placeholder': 'Deine E-Mail-Adresse',
    'modal.submit': 'Beta-Zugang sichern',
    'modal.privacy': 'Begrenzte Plätze · Kein Spam, versprochen.',
    'modal.success.title': 'Du bist dabei!',
    'modal.success.desc': 'Wir melden uns bei dir, sobald es losgeht.',

    // Beta Tester Modal
    'beta-modal.label': 'Beta-Tester-Programm',
    'beta-modal.title': 'Teste diamo vor allen anderen.',
    'beta-modal.description': 'Wir suchen eine kleine Gruppe von Frauen, die diamo ab Juli 2026 testen. Als Beta-Testerin erhältst du kostenlosen Zugang, gestaltest das Produkt mit deinem Feedback und sicherst dir Founding-Member-Vorteile zum Launch.',
    'beta-modal.name-placeholder': 'Dein Name',
    'beta-modal.email-placeholder': 'Deine E-Mail-Adresse',
    'beta-modal.motivation-placeholder': 'Warum möchtest du diamo testen? (optional)',
    'beta-modal.submit': 'Als Beta-Testerin bewerben',
    'beta-modal.privacy': 'Begrenzte Plätze · Start Juli 2026',
    'beta-modal.success.title': 'Bewerbung erhalten!',
    'beta-modal.success.desc': 'Wir prüfen deine Bewerbung und melden uns bald.',

    // Apply Modal
    'apply-modal.label': 'Werde Teil des Teams',
    'apply-modal.title': 'Bau etwas Bedeutsames.',
    'apply-modal.description': 'Erzähl uns von dir und warum du gut zu diamo passen würdest. Wir suchen leidenschaftliche Menschen, die Frauengesundheit neu gestalten wollen.',
    'apply-modal.name-placeholder': 'Dein Name',
    'apply-modal.email-placeholder': 'Deine E-Mail-Adresse',
    'apply-modal.message-placeholder': 'Erzähl uns von dir und deiner Motivation',
    'apply-modal.submit': 'Bewerbung senden',
    'apply-modal.privacy': 'Wir melden uns innerhalb weniger Tage.',
    'apply-modal.success.title': 'Bewerbung gesendet!',
    'apply-modal.success.desc': 'Wir prüfen sie und melden uns bald bei dir.',

    // About Page
    'about.title': 'Dein Zyklus ist deine Superkraft.',
    'about.title.italic': 'Wir helfen dir, sie zu nutzen.',
    'about.story.title': 'Warum es diamo gibt',
    'about.story.p1': 'Viel zu lange hat Fitness den grundlegendsten Teil der weiblichen Biologie ignoriert: den Zyklus. Trainingspläne haben an Tag 5 und Tag 25 die gleiche Leistung erwartet. Sie haben Frauen das Gefühl gegeben zu versagen, wenn ihr Körper einfach etwas anderes brauchte.',
    'about.story.p2': 'Aber die Wissenschaft ist eindeutig: Jede Frau durchläuft vier verschiedene Zyklusphasen, die ihre Energie, Kraft und Erholung auf einzigartige Weise beeinflussen. Das ist keine Einschränkung, sondern ein Vorteil, wenn man ihn zu nutzen weiß.',
    'about.story.p3': 'Deshalb wurde diamo gebaut. Die App, die endlich mit deinem Zyklus trainiert, nicht gegen ihn.',
    'about.vision.title': 'Training, das die Sprache deines Zyklus spricht',
    'about.vision.p1': 'In der Follikelphase ist dein Körper bereit, Grenzen zu verschieben. In der Lutealphase braucht er eine andere Art von Stärke. diamo kennt den Unterschied und passt dein Training entsprechend an.',
    'about.vision.p2': 'Wir verbinden die Daten deiner Apple Watch, deines Oura Rings oder Garmin mit Echtzeit Zyklusbewusstsein, um einen Plan zu erstellen, der genau zu dir passt. Heute. Kein generischer Plan. Dein Plan.',
    'about.vision.p3': 'Und weil wir glauben, dass die besten Workouts gemeinsam passieren, verbindet diamo dich mit Frauen in deiner Nähe, die in einer ähnlichen Zyklusphase sind. Lokale Run Clubs, geteilte Energie, echte Connections. <strong>Offline first</strong>.',
    'about.values.title': 'Woran wir glauben',
    'about.values.intro': 'diamo basiert auf einer einfachen Überzeugung: Frauen verdienen Fitness Tools, die ihren Körper wirklich verstehen. Das sind die Prinzipien, die alles leiten, was wir schaffen.',
    'about.value2.title': 'Community first',
    'about.value2.desc': 'Die besten Workouts passieren gemeinsam. diamo verbindet dich mit lokalen Frauen in ähnlichen Zyklusphasen für echtes, offline Training.',
    'about.value3.title': 'Für Frauen gebaut',
    'about.value3.desc': 'Kein Nachgedanke. Keine rosa Version einer Männer App. diamo ist von Grund auf um den weiblichen Körper und die weibliche Erfahrung herum designed.',
    'about.cta.title': 'Klingt nach etwas, das du erleben willst?',
    'about.cta.text': 'Wir sind noch ganz am Anfang und genau das macht es besonders. Sei von Anfang an dabei.',
    'about.cta.btn': 'Beta-Testerin werden',
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

  // Update hrefs for translated links (e.g. blog URLs)
  document.querySelectorAll('[data-i18n-href-en]').forEach(el => {
    if (lang === 'en') {
      el.setAttribute('href', el.getAttribute('data-i18n-href-en'));
    } else {
      const deHref = el.getAttribute('data-i18n-href-de');
      if (deHref) el.setAttribute('href', deHref);
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

  // Auto-detect browser language, default to English
  const browserLang = navigator.language?.slice(0, 2);
  setLanguage(browserLang === 'de' ? 'de' : 'en');
}

// Make globally accessible
window.setLanguage = setLanguage;
window.initLanguage = initLanguage;
