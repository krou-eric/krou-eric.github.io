document.addEventListener("DOMContentLoaded", () => {

  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      });
    });
  }

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  window.addEventListener("scroll", () => {
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        const current = document.querySelector(`header nav a[href*="${id}"]`);
        if (current) current.classList.add('active');
      }
    });

    const header = document.querySelector('header');
    if (header) header.classList.toggle('sticky', window.scrollY > 100);

    if (menuIcon) menuIcon.classList.remove('bx-x');
    if (navbar) navbar.classList.remove('active');
  });

  if (window.ScrollReveal) {
    ScrollReveal({ distance: '80px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .skills-grid, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
  }

  const translations = {
    fr: {
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_skills: "Compétences",
      nav_projects: "Projets",
      nav_veille: "Veille",
      nav_contact: "Contact",
      home_intro: "Bonjour, moi c'est",
      home_role_prefix: "Étudiant",
      home_desc: "Technicien informatique, passionné par le développement web et la cybersécurité. Curieux et motivé, je développe mes compétences via des projets concrets et une veille régulière.",
      home_cv: "Télécharger mon CV",
      about_title: "À propos",
      about_subtitle: "Étudiant en BTS SIO option SLAM",
      about_desc: "Je suis étudiant en BTS SIO option SLAM, passionné par le développement informatique. Durant ma formation et mes stages, j'ai travaillé sur des projets concrets (web + backend). J'ai notamment développé une application de gestion de tickets en React/NestJS connectée à MySQL.",
      about_cursus_btn: "Voir mon cursus",
      cursus_1_title: "Lycée Carcouet — BTS (2ème année)",
      cursus_1_desc: "Services Informatiques Aux Organisations.",
      cursus_2_title: "Lycée Carcouet — BTS (1ère année)",
      cursus_2_desc: "Services Informatiques Aux Organisations.",
      cursus_3_title: "Institut Universitaire d'Abidjan — LICENCE 2",
      cursus_3_desc: "Génie Informatique.",
      cursus_4_title: "Institut Universitaire d'Abidjan — LICENCE 1",
      cursus_4_desc: "Génie Informatique.",
      cursus_5_title: "Baccalauréat",
      cursus_5_desc: "",
      skills_title: "Mes Compétences",
      skills_backend: "Backend & API",
      skills_data: "Données & Outils",
      skills_validation: "Validation",
      skills_tests: "Tests",
      skills_debug: "Debug",
      level_advanced: "Avancé",
      level_intermediate: "Intermédiaire",
      projects_title: "Mes Projets",
      filter_all: "Tous",
      project1_title: "Gestion de Tickets",
      project1_short: "Stage ALEOS – React / NestJS / MySQL",
      project2_title: "Équipes Sportives",
      project2_short: "Projet BTS – PHP POO / MySQL",
      project3_title: "Prototype App",
      project3_short: "Projet – React / NestJS",
      btn_view: "Voir",
      btn_demo: "Démo",
      contact_title: "Contact Moi",
      contact_name: "Nom complet",
      contact_email: "Adresse email",
      contact_subject: "Objet",
      contact_phone: "Téléphone (optionnel)",
      contact_message: "Votre message",
      contact_send: "Envoyer",
      // ── VEILLE ──
      veille_title: "Veille",
      veille_title2: "Technologique",
      veille_intro: "Comment l'intelligence artificielle transforme-t-elle le travail des développeurs et leurs méthodes de développement ?",
      veille_problematique: "L'IA ne remplace pas les développeurs — elle automatise les tâches répétitives et leur permet de se concentrer sur la conception et l'architecture.",
      veille_cat1: "Outils IA pour les développeurs",
      veille_cat2: "Avantages & Limites",
      veille_cat3: "Impact sur le développement mobile",
      veille_tag_assistant: "Assistant IA",
      veille_tag_new: "Nouveau 2024",
      veille_tag_source: "Source",
      veille_tag_trend: "Tendance",
      veille_copilot_desc: "Intégré directement dans VS Code, il propose de la complétion de code, génère des fonctions entières et aide au débogage. Selon le COO de GitHub, il rend les développeurs 55% plus productifs.",
      veille_chatgpt_desc: "Utilisés pour expliquer du code, proposer des architectures ou débloquer rapidement un problème. Une étude McKinsey montre que l'IA réduit le temps de développement des tâches complexes de 12%.",
      veille_cursor_desc: "Environnement de développement entièrement pensé autour de l'IA, apparu en 2024. Il permet de modifier du code en langage naturel directement dans l'éditeur.",
      veille_avantages_title: "Avantages",
      veille_limites_title: "Limites & Risques",
      veille_pro1: "Gain de productivité : +55% selon GitHub (source : Le Monde Informatique, 2024)",
      veille_pro2: "60 à 71% des développeurs apprennent plus vite un nouveau langage grâce à l'IA",
      veille_pro3: "Automatisation des tâches répétitives (CRUD, tests unitaires, documentation)",
      veille_pro4: "92% des développeurs utilisent déjà des outils IA pour coder (GitHub, 2024)",
      veille_con1: "Code parfois incorrect ou contenant des failles de sécurité (ex : injection SQL)",
      veille_con2: "Dépendance : un développeur qui ne comprend pas le code généré est bloqué à la première erreur",
      veille_con3: "Confidentialité : partager du code propriétaire avec une IA externe peut poser des problèmes légaux",
      veille_con4: "GitHub a dû créer Copilot Autofix en 2024 pour corriger les vulnérabilités générées automatiquement",
      veille_rn_desc: "Les assistants IA génèrent facilement des composants TypeScript, des écrans de connexion, de la navigation ou des appels API REST — directement dans mon stack habituel.",
      veille_octo_desc: "Le rapport GitHub 2024 enregistre une augmentation de 98% des projets d'IA générative sur la plateforme. Python a dépassé JavaScript en popularité, porté par les projets IA.",
      veille_metier_desc: "Le développeur devient davantage un superviseur et un architecte : il formule les besoins, vérifie le code produit par l'IA, et prend les décisions d'architecture. La compréhension reste indispensable.",
      veille_apport_title: "Mon apport personnel",
      veille_apport_desc: "J'utilise ChatGPT et GitHub Copilot dans mes projets React et NestJS — pour déboguer des erreurs d'API, comprendre de nouveaux patterns ou générer des composants. Cette veille m'a appris qu'il faut toujours relire le code proposé : sur un projet, Copilot avait suggéré une requête qui aurait pu exposer des données. Maîtriser les fondamentaux reste essentiel — l'IA est un outil, pas un substitut à la compréhension.",
      veille_freq_daily: "Quotidien",
      veille_freq_weekly: "Hebdo"
    },
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_veille: "Tech Watch",
      nav_contact: "Contact",
      home_intro: "Hello, my name is",
      home_role_prefix: "Student",
      home_desc: "IT technician, passionate about web development and cybersecurity. Curious and motivated, I develop my skills through concrete projects and continuous learning.",
      home_cv: "Download my CV",
      about_title: "About",
      about_subtitle: "BTS SIO student – SLAM option",
      about_desc: "I am a BTS SIO student in the SLAM option, passionate about software development. During my studies and internships, I worked on concrete web and backend projects. I notably developed a ticket management application using React/NestJS connected to MySQL.",
      about_cursus_btn: "View my academic path",
      cursus_1_title: "Lycée Carcouet — BTS (2nd year)",
      cursus_1_desc: "IT Services for Organizations.",
      cursus_2_title: "Lycée Carcouet — BTS (1st year)",
      cursus_2_desc: "IT Services for Organizations.",
      cursus_3_title: "Institut Universitaire d'Abidjan — Bachelor Year 2",
      cursus_3_desc: "Computer Engineering.",
      cursus_4_title: "Institut Universitaire d'Abidjan — Bachelor Year 1",
      cursus_4_desc: "Computer Engineering.",
      cursus_5_title: "Baccalaureate",
      cursus_5_desc: "",
      skills_title: "My Skills",
      skills_backend: "Backend & API",
      skills_data: "Data & Tools",
      skills_validation: "Validation",
      skills_tests: "Testing",
      skills_debug: "Debugging",
      level_advanced: "Advanced",
      level_intermediate: "Intermediate",
      projects_title: "My Projects",
      filter_all: "All",
      project1_title: "Ticket Management",
      project1_short: "ALEOS internship – React / NestJS / MySQL",
      project2_title: "Sports Teams",
      project2_short: "BTS project – OOP PHP / MySQL",
      project3_title: "Prototype App",
      project3_short: "Project – React / NestJS",
      btn_view: "View",
      btn_demo: "Demo",
      contact_title: "Contact Me",
      contact_name: "Full name",
      contact_email: "Email address",
      contact_subject: "Subject",
      contact_phone: "Phone (optional)",
      contact_message: "Your message",
      contact_send: "Send",
      // ── VEILLE ──
      veille_title: "Tech",
      veille_title2: "Watch",
      veille_intro: "How is artificial intelligence transforming the work of developers and their development methods?",
      veille_problematique: "AI does not replace developers — it automates repetitive tasks and allows them to focus on design and architecture.",
      veille_cat1: "AI tools for developers",
      veille_cat2: "Advantages & Limits",
      veille_cat3: "Impact on mobile development",
      veille_tag_assistant: "AI Assistant",
      veille_tag_new: "New 2024",
      veille_tag_source: "Source",
      veille_tag_trend: "Trend",
      veille_copilot_desc: "Integrated directly into VS Code, it offers code completion, generates entire functions and helps with debugging. According to GitHub's COO, it makes developers 55% more productive.",
      veille_chatgpt_desc: "Used to explain code, suggest architectures or quickly unblock a problem. A McKinsey study shows that AI reduces development time for complex tasks by 12%.",
      veille_cursor_desc: "A development environment entirely built around AI, launched in 2024. It allows code to be modified in natural language directly in the editor.",
      veille_avantages_title: "Advantages",
      veille_limites_title: "Limits & Risks",
      veille_pro1: "Productivity gain: +55% according to GitHub (source: Le Monde Informatique, 2024)",
      veille_pro2: "60 to 71% of developers learn a new language faster thanks to AI",
      veille_pro3: "Automation of repetitive tasks (CRUD, unit tests, documentation)",
      veille_pro4: "92% of developers already use AI tools to code (GitHub, 2024)",
      veille_con1: "Code sometimes incorrect or containing security vulnerabilities (e.g. SQL injection)",
      veille_con2: "Dependency: a developer who does not understand the generated code is stuck at the first error",
      veille_con3: "Confidentiality: sharing proprietary code with an external AI tool can raise legal issues",
      veille_con4: "GitHub had to create Copilot Autofix in 2024 to fix automatically generated vulnerabilities",
      veille_rn_desc: "AI assistants easily generate TypeScript components, login screens, navigation or REST API calls — directly in my usual stack.",
      veille_octo_desc: "The GitHub 2024 report records a 98% increase in generative AI projects on the platform. Python overtook JavaScript in popularity, driven by AI projects.",
      veille_metier_desc: "The developer increasingly becomes a supervisor and architect: they formulate needs, review AI-generated code, and make architecture decisions. Understanding remains essential.",
      veille_apport_title: "My personal contribution",
      veille_apport_desc: "I use ChatGPT and GitHub Copilot in my React and NestJS projects — to debug API errors, understand new patterns or generate components. This research taught me to always review suggested code: on one project, Copilot suggested a query that could have exposed data. Mastering the fundamentals remains essential — AI is a tool, not a substitute for understanding.",
      veille_freq_daily: "Daily",
      veille_freq_weekly: "Weekly"
    }
  };

  let typedInstance = null;

  function initTyped(lang) {
    const el = document.querySelector('.multiple-text');
    if (!el || !window.Typed) return;

    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }

    const strings = lang === "en"
      ? ['BTS SIO SLAM Student', 'Web Developer', 'Junior Full Stack Developer']
      : ['BTS SIO SLAM', 'Développeur Web', 'Full Stack Junior'];

    typedInstance = new Typed('.multiple-text', {
      strings,
      typeSpeed: 90,
      backSpeed: 70,
      backDelay: 900,
      loop: true
    });
  }

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem("portfolio-language", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang][key] !== undefined) {
        el.setAttribute("placeholder", translations[lang][key]);
      }
    });

    document.querySelectorAll("[data-i18n-value]").forEach(el => {
      const key = el.getAttribute("data-i18n-value");
      if (translations[lang][key] !== undefined) {
        el.setAttribute("value", translations[lang][key]);
      }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    initTyped(lang);
  }

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Toujours démarrer en FR — ignore toute valeur en cache
  setLanguage("fr");

  const techIconMap = {
    react: { icon: 'bxl-react', label: 'React' },
    nestjs: { icon: 'bx-bot', label: 'NestJS' },
    mysql: { icon: 'bx-data', label: 'MySQL' },
    php: { icon: 'bxl-php', label: 'PHP' },
    github: { icon: 'bxl-github', label: 'GitHub' }
  };

  const projectData = {
    project1: {
      title: "Gestion de Tickets",
      tech: "React • NestJS • MySQL",
      tags: ['react', 'nestjs', 'mysql', 'github'],
      desc: "Stage ALEOS – POC d'application de gestion de tickets : création, recherche, affichage, API REST, persistance MySQL.",
      github: "https://github.com/krou-eric/gestion-tickets",
      demo: "",
      cahier: "cv/cahier-charges-tickets.pdf",
      images: ["images/portfolio1-2.jpg", "images/portfolio1-3.jpg", "images/portfolio1-4.jpg"]
    },
    project2: {
      title: "Google Analytics",
      tech: "JavaScript • HTML • CSS • Chart.js",
      tags: ['github'],
      desc: "Stage ALEOS – Dashboard d'analytics avec visualisations Chart.js.",
      github: "https://github.com/krou-eric/google-analytics-dashboard",
      demo: "",
      images: ["images/portfolio2.jpg", "images/portfolio2-2.jpg", "images/portfolio2-3.jpg"]
    },
    project3: {
      title: "CRM",
      tech: "PHP • MySQL • MVC",
      tags: ['php', 'mysql', 'github'],
      desc: "Application CRM développée en PHP avec une architecture MVC. Permet la gestion des contacts, entreprises et utilisateurs avec un système de rôles (Admin / Standard). Fonctionnalités : authentification, recherche et filtres, CRUD complet, modélisation MCD.",
      github: "https://github.com/krou-eric/crm-php-mvc",
      demo: "",
      cahier: "cv/cahier-charges-crm.pdf",
      images: [
        "images/crm-dashboard.png",
        "images/crm-usecase.png",
        "images/crm-mcd.png",
        "images/crm-kanban.png",
        "images/crm-github.png"
      ]
    }
  };

  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalTech = document.getElementById('modalTech');
  const modalDesc = document.getElementById('modalDesc');
  const modalGithub = document.getElementById('modalGithub');
  const modalDemo = document.getElementById('modalDemo');
  const techIcons = document.getElementById('techIcons');
  const modalMainImage = document.getElementById('modalMainImage');
  const thumbs = document.getElementById('thumbs');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slider = document.getElementById('slider');

  let currentImages = [];
  let currentIndex = 0;

  function renderTechIcons(tags) {
    if (!techIcons) return;
    techIcons.innerHTML = "";
    (tags || []).forEach(t => {
      const meta = techIconMap[t];
      if (!meta) return;
      const el = document.createElement('div');
      el.className = 'tech-pill';
      el.innerHTML = `<i class="bx ${meta.icon}"></i><span>${meta.label}</span>`;
      techIcons.appendChild(el);
    });
  }

  function renderSlide() {
    if (!modalMainImage || !thumbs) return;
    if (!currentImages.length) {
      modalMainImage.removeAttribute("src");
      thumbs.innerHTML = "";
      return;
    }

    modalMainImage.src = currentImages[currentIndex];

    const allThumbs = thumbs.querySelectorAll('.thumb');
    allThumbs.forEach((btn, idx) => btn.classList.toggle('active', idx === currentIndex));
  }

  function nextSlide() {
    if (!currentImages.length) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    renderSlide();
  }

  function prevSlide() {
    if (!currentImages.length) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    renderSlide();
  }

  function openModal(projectKey) {
    const data = projectData[projectKey];
    if (!data || !modal) return;

    modalTitle.textContent = data.title || "Projet";
    modalTech.textContent = data.tech || "";
    modalDesc.textContent = data.desc || "";
    modalGithub.href = data.github || "#";

    if (data.demo && data.demo.startsWith('http')) {
      modalDemo.href = data.demo;
      modalDemo.style.display = "inline-block";
    } else {
      modalDemo.style.display = "none";
    }

    // Bouton cahier des charges
    let cahierBtn = document.getElementById('modalCahier');
    if (!cahierBtn) {
      cahierBtn = document.createElement('a');
      cahierBtn.id = 'modalCahier';
      cahierBtn.className = 'btn btn-outline';
      cahierBtn.target = '_blank';
      cahierBtn.rel = 'noreferrer';
      cahierBtn.innerHTML = '<i class="bx bx-file"></i> Cahier des charges';
      document.querySelector('.modal-actions').appendChild(cahierBtn);
    }
    if (data.cahier) {
      cahierBtn.href = data.cahier;
      cahierBtn.style.display = "inline-block";
    } else {
      cahierBtn.style.display = "none";
    }

    renderTechIcons(data.tags);

    currentImages = Array.isArray(data.images) ? data.images : [];
    currentIndex = 0;

    thumbs.innerHTML = "";
    currentImages.forEach((src, idx) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'thumb';
      b.style.backgroundImage = `url("${src}")`;
      b.setAttribute('aria-label', `Image ${idx + 1}`);
      b.addEventListener('click', () => {
        currentIndex = idx;
        renderSlide();
      });
      thumbs.appendChild(b);
    });

    renderSlide();

    modal.style.display = "flex";
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = "hidden";
    modal.scrollTop = 0;
  }

  function closeModal() {
    if (!modal) return;
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = "";
  }

  document.querySelectorAll('.open-project').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.project));
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  if (slider) {
    let startX = 0;
    let endX = 0;

    slider.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchmove', (e) => { endX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', () => {
      const delta = startX - endX;
      if (Math.abs(delta) > 50) delta > 0 ? nextSlide() : prevSlide();
      startX = 0;
      endX = 0;
    });
  }

  const toggleCursusBtn = document.getElementById('toggleCursusBtn');
  const cursusPanel = document.getElementById('cursusPanel');

  if (toggleCursusBtn && cursusPanel) {
    toggleCursusBtn.addEventListener('click', () => {
      const isOpen = toggleCursusBtn.getAttribute('aria-expanded') === 'true';
      toggleCursusBtn.setAttribute('aria-expanded', String(!isOpen));

      if (isOpen) {
        cursusPanel.classList.remove('open');
        setTimeout(() => (cursusPanel.hidden = true), 220);
      } else {
        cursusPanel.hidden = false;
        setTimeout(() => cursusPanel.classList.add('open'), 10);
      }

      toggleCursusBtn.classList.toggle('is-open', !isOpen);
    });
  }

});