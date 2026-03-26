/* ═══════════════════════════════════════════════
   ABDERRAHMEN BEN OMRANE — Portfolio JS
═══════════════════════════════════════════════ */

/* ── i18n ── */
const LANG = {
  en: {
    nav_about:"About", nav_skills:"Skills", nav_exp:"Experience", nav_edu:"Education",
    nav_projects:"Projects", nav_certs:"Certs", nav_roadmap:"Roadmap",
    nav_blog:"Blog", nav_contact:"Contact",

    hero_badge:"Cybersecurity & Embedded Systems Engineer",
    hero_name_1:"Abderrahmen", hero_name_2:"Ben Omrane",
    hero_subtitle:"Security Analyst · Red & Blue Team · IoT Security · AI",
    hero_desc:"Bridging the gap between embedded systems and cybersecurity. Specialized in threat detection, incident response, penetration testing, IoT security hardening, and AI-driven security solutions.",
    welcome:"Welcome to my website", welcome_paragraph:"By scrolling down, you will get to know me better and discover more about my professional experience, educational background, associative involvement, as well as my interests and projects.",
    hero_card_role:"Technical Consultant @ Naxxum Africa",
    hero_btn_contact:"Get in touch →", hero_btn_cv:"Download CV ↓", hero_btn_projects:"View Projects",
    hero_stat_exp:"Years XP", hero_stat_certs:"Certs", hero_stat_proj:"Projects", hero_stat_lang:"Languages",

    domain_cyber:"Cybersecurity", domain_embedded:"Embedded Systems", domain_ai:"AI & Machine Learning",
    domain_cyber_desc:"Red Team · Blue Team · Audit · Incident Response · SIEM",
    domain_embedded_desc:"Microcontrollers · IoT · UART · GSM · XBee · Hardware Security",
    domain_ai_desc:"Machine Learning · AI in CyberSec · Anomaly Detection",

    about_eyebrow:"Who I am", about_title:"About <span>Me</span>",
    about_p1:"I'm a 25-year-old cybersecurity specialist with a unique dual background in Electronics & Embedded Systems (BSc) and Information Systems Security (MSc). This rare combination gives me a deep understanding of both hardware and software attack surfaces.",
    about_p2:"My professional journey spans SOC operations, penetration testing, threat intelligence, and IoT security hardening. I've worked across incident response, SIEM management, and enterprise security solution deployment.",
    about_p3:"Beyond pure security, I'm passionate about AI/ML applications in cybersecurity, malware analysis, and the rapidly evolving field of embedded systems security — where hardware meets cyber threats.",
    info_loc:"Location", info_email:"Email", info_avail:"Availability", info_avail_val:"Open to opportunities",
    info_langs:"Languages", stat_exp:"Years XP", stat_certs:"Certifications", stat_proj:"Projects", stat_lang:"Languages",

    skills_eyebrow:"What I work with", skills_title:"Technical <span>Skills</span>",
    tab_all:"All", tab_cyber:"Cybersecurity", tab_embedded:"Embedded", tab_ai:"AI",

    exp_eyebrow:"Career path", exp_title:"Professional <span>Experience</span>",
    exp1_role:"Technical Consultant", exp1_co:"Naxxum Africa", exp1_date:"Nov 2025 – Present",
    exp1_b1:"Integration and deployment of software solutions in international client infrastructures.",
    exp1_b2:"Pre-integration technical, functional, and security guidance for clients.",
    exp1_b3:"Post-deployment support: diagnostics, incident analysis, and resolution.",
    exp1_b4:"Coordination with software vendors on security and vulnerability management.",
    exp2_role:"Cybersecurity Analyst", exp2_co:"Keystone Group", exp2_date:"Feb 2025 – Nov 2025",
    exp2_b1:"Integrated security intelligence into client platforms to enhance detection capabilities.",
    exp2_b2:"Participated in Red Team penetration testing missions to improve SIEM detection rules.",
    exp2_b3:"Deployed and configured enterprise security solutions across client environments.",
    exp2_b4:"Communicated incident status and security recommendations to clients.",
    exp3_role:"SOC Analyst — Level 2", exp3_co:"Keystone Group", exp3_date:"Feb 2024 – Jan 2025",
    exp3_b1:"Managed Level 2/3 security incidents via SIEM: identification, analysis, and remediation.",
    exp3_b2:"Analyzed suspicious files, web content, and emails to detect malicious behavior.",
    exp3_b3:"Categorized cyberattacks and contributed to threat containment including phishing campaigns.",

    edu_eyebrow:"Academic background", edu_title:"<span>Education</span>",
    edu1_deg:"Professional Master's Degree", edu1_field:"Information Systems and Infrastructure Security",
    edu1_school:"Higher Institute of Computer Science of El Manar", edu1_date:"Sep 2023 – Jul 2025 · Ariana, Tunisia",
    edu1_desc:"Advanced studies in cybersecurity, network security, secure architectures, penetration testing, and digital forensics. Final project: Cyber Range Laboratory Creation Module.",
    edu2_deg:"Bachelor's Degree", edu2_field:"Electronics, Electrotechnics & Automation — Embedded Systems",
    edu2_school:"Higher Institute of Computer Science of El Manar", edu2_date:"Sep 2020 – Jun 2023 · Ariana, Tunisia",
    edu2_desc:"Deep focus on embedded systems, microcontrollers, communication protocols (UART, GSM, XBee), IoT development, and real-time systems. Final project: ATmega328P-based IoT irrigation node.",

    proj_eyebrow:"What I've built", proj_title:"<span>Projects</span>",
    proj_tab_all:"All", proj_tab_cyber:"Cybersecurity", proj_tab_embedded:"Embedded", proj_tab_ai:"AI",

    certs_eyebrow:"Credentials", certs_title:"<span>Certifications</span>",
    cert_tab_all:"All", cert_tab_cyber:"Cybersecurity", cert_tab_embedded:"Embedded", cert_tab_ai:"AI",
    cert_open:"Open certificate ↗", cert_progress:"In Progress",

    roadmap_eyebrow:"Where I'm heading", roadmap_title:"Learning <span>Roadmap</span>",
    rm1_phase:"Now", rm1_title:"Active Objectives", rm2_phase:"Q3 2026", rm2_title:"Next Milestones",
    rm3_phase:"2027+", rm3_title:"Long-term Goals",

    assoc_eyebrow:"Community", assoc_title:"Associative <span>Experience</span>",
    assoc_org:"Enactus ISI", assoc_role:"Member · 4 years | VP Finance · 1 year | Brainstorming Lead · 2 years",
    assoc_desc:"Active member of Enactus ISI for 4 years. Serving as Vice President of Finance and Brainstorming Lead allowed me to develop strong leadership, financial planning, and creative problem-solving skills — complementing my technical expertise with a well-rounded professional profile.",

    int_eyebrow:"What drives me", int_title:"<span>Interests</span>",

    blog_eyebrow:"Knowledge sharing", blog_title:"Blog & <span>Articles</span>",
    blog_soon:"Coming soon",

    contact_eyebrow:"Let's connect", contact_title:"Get in <span>Touch</span>",
    contact_desc:"Whether it's a security project, a collaboration opportunity, or just a conversation about cybersecurity and embedded systems — I'm always happy to connect.",
    contact_phone:"Phone", form_name:"Name", form_email:"Email", form_msg:"Message", form_send:"Send Message →",
    copy:"Copy", copied:"Copied!"
  },

  fr: {
    nav_about:"À propos", nav_skills:"Compétences", nav_exp:"Expérience", nav_edu:"Formation",
    nav_projects:"Projets", nav_certs:"Certif.", nav_roadmap:"Roadmap",
    nav_blog:"Blog", nav_contact:"Contact",

    hero_badge:"Ingénieur Cybersécurité & Systèmes Embarqués",
    hero_name_1:"Abderrahmen", hero_name_2:"Ben Omrane",
    hero_subtitle:"Analyste Sécurité · Red & Blue Team · Sécurité IoT · IA",
    hero_desc:"À l'intersection des systèmes embarqués et de la cybersécurité. Spécialisé en détection de menaces, réponse aux incidents, tests d'intrusion, durcissement IoT et solutions de sécurité basées sur l'IA.",
    welcome:"Bienvenue sur mon site", welcome_paragraph:"En faisant défiler vers le bas, vous apprendrez à mieux me connaître et découvrirez mon expérience professionnelle, mon parcours académique, mon engagement associatif ainsi que mes centres d'intérêt et projets.",
    hero_card_role:"Consultant Technique @ Naxxum Africa",
    hero_btn_contact:"Me contacter →", hero_btn_cv:"Télécharger CV ↓", hero_btn_projects:"Voir les projets",
    hero_stat_exp:"Ans d'XP", hero_stat_certs:"Certif.", hero_stat_proj:"Projets", hero_stat_lang:"Langues",

    domain_cyber:"Cybersécurité", domain_embedded:"Systèmes Embarqués", domain_ai:"IA & Machine Learning",
    domain_cyber_desc:"Red Team · Blue Team · Audit · Réponse aux incidents · SIEM",
    domain_embedded_desc:"Microcontrôleurs · IoT · UART · GSM · XBee · Sécurité matérielle",
    domain_ai_desc:"Machine Learning · IA en CyberSec · Détection d'anomalies",

    about_eyebrow:"Qui suis-je", about_title:"À <span>Propos</span>",
    about_p1:"Spécialiste en cybersécurité de 25 ans avec un double profil unique en Électronique & Systèmes Embarqués (Licence) et Sécurité des Systèmes d'Information (Master). Cette combinaison rare me permet de comprendre les surfaces d'attaque matérielles et logicielles.",
    about_p2:"Mon parcours couvre les opérations SOC, les tests d'intrusion, la threat intelligence et le durcissement IoT. J'ai travaillé sur la réponse aux incidents, la gestion SIEM et le déploiement de solutions de sécurité en environnement entreprise.",
    about_p3:"Au-delà de la sécurité pure, je suis passionné par les applications IA/ML en cybersécurité, l'analyse de malwares et la sécurité des systèmes embarqués — là où le matériel rencontre les cybermenaces.",
    info_loc:"Localisation", info_email:"Email", info_avail:"Disponibilité", info_avail_val:"Ouvert aux opportunités",
    info_langs:"Langues", stat_exp:"Ans d'XP", stat_certs:"Certifications", stat_proj:"Projets", stat_lang:"Langues",

    skills_eyebrow:"Avec quoi je travaille", skills_title:"Compétences <span>Techniques</span>",
    tab_all:"Tout", tab_cyber:"Cybersécurité", tab_embedded:"Embarqué", tab_ai:"IA",

    exp_eyebrow:"Parcours professionnel", exp_title:"Expérience <span>Professionnelle</span>",
    exp1_role:"Consultant Technique", exp1_co:"Naxxum Africa", exp1_date:"Nov 2025 – Présent",
    exp1_b1:"Intégration et déploiement de solutions logicielles dans des infrastructures clients internationales.",
    exp1_b2:"Support technique, fonctionnel et sécurité en phase de pré-intégration.",
    exp1_b3:"Support post-déploiement : diagnostics, analyse et résolution d'incidents.",
    exp1_b4:"Coordination avec les éditeurs logiciels sur les sujets sécurité et gestion des vulnérabilités.",
    exp2_role:"Analyste Cybersécurité", exp2_co:"Keystone Group", exp2_date:"Fév 2025 – Nov 2025",
    exp2_b1:"Intégration de renseignements sécurité dans les plateformes clients pour améliorer la détection.",
    exp2_b2:"Participation aux missions de tests d'intrusion Red Team pour améliorer les règles SIEM.",
    exp2_b3:"Déploiement et configuration de solutions de sécurité entreprise.",
    exp2_b4:"Communication du statut des incidents et des recommandations sécurité aux clients.",
    exp3_role:"Analyste SOC — Niveau 2", exp3_co:"Keystone Group", exp3_date:"Fév 2024 – Jan 2025",
    exp3_b1:"Gestion des incidents de sécurité N2/N3 via SIEM : identification, analyse et remédiation.",
    exp3_b2:"Analyse de fichiers suspects, contenus web et emails pour détecter les comportements malveillants.",
    exp3_b3:"Catégorisation des cyberattaques et contribution au confinement des menaces.",

    edu_eyebrow:"Parcours académique", edu_title:"<span>Formation</span>",
    edu1_deg:"Master Professionnel", edu1_field:"Sécurité des Systèmes d'Information et des Infrastructures",
    edu1_school:"Institut Supérieur d'Informatique El Manar", edu1_date:"Sep 2023 – Juil 2025 · Ariana, Tunisie",
    edu1_desc:"Études approfondies en cybersécurité, sécurité réseau, architectures sécurisées, tests d'intrusion et forensique numérique. Projet final : Module de création de laboratoire Cyber Range.",
    edu2_deg:"Licence", edu2_field:"Électronique, Électrotechnique & Automatique — Systèmes Embarqués",
    edu2_school:"Institut Supérieur d'Informatique El Manar", edu2_date:"Sep 2020 – Juin 2023 · Ariana, Tunisie",
    edu2_desc:"Focus sur les systèmes embarqués, microcontrôleurs, protocoles de communication (UART, GSM, XBee), développement IoT et systèmes temps réel. Projet final : nœud IoT d'irrigation basé sur ATmega328P.",

    proj_eyebrow:"Ce que j'ai construit", proj_title:"<span>Projets</span>",
    proj_tab_all:"Tous", proj_tab_cyber:"Cybersécurité", proj_tab_embedded:"Embarqué", proj_tab_ai:"IA",

    certs_eyebrow:"Mes accréditations", certs_title:"<span>Certifications</span>",
    cert_tab_all:"Toutes", cert_tab_cyber:"Cybersécurité", cert_tab_embedded:"Embarqué", cert_tab_ai:"IA",
    cert_open:"Ouvrir le certificat ↗", cert_progress:"En cours",

    roadmap_eyebrow:"Où je vais", roadmap_title:"<span>Roadmap</span> d'apprentissage",
    rm1_phase:"Maintenant", rm1_title:"Objectifs actifs", rm2_phase:"T3 2026", rm2_title:"Prochaines étapes",
    rm3_phase:"2027+", rm3_title:"Objectifs long terme",

    assoc_eyebrow:"Engagement associatif", assoc_title:"Expérience <span>Associative</span>",
    assoc_org:"Enactus ISI", assoc_role:"Membre · 4 ans | VP Finance · 1 an | Responsable Brainstorming · 2 ans",
    assoc_desc:"Membre actif d'Enactus ISI pendant 4 ans. En tant que Vice-Président des Finances et Responsable Brainstorming, j'ai développé des compétences solides en leadership, gestion financière et résolution créative de problèmes — complétant mon profil technique par une vision professionnelle globale.",

    int_eyebrow:"Ce qui m'anime", int_title:"Centres d'<span>Intérêt</span>",

    blog_eyebrow:"Partage de connaissances", blog_title:"Blog & <span>Articles</span>",
    blog_soon:"Bientôt disponible",

    contact_eyebrow:"Connectons-nous", contact_title:"Me <span>Contacter</span>",
    contact_desc:"Que ce soit pour un projet sécurité, une opportunité de collaboration, ou simplement une conversation — je suis toujours disponible.",
    contact_phone:"Téléphone", form_name:"Nom", form_email:"Email", form_msg:"Message", form_send:"Envoyer →",
    copy:"Copier", copied:"Copié !"
  },

  de: {
    nav_about:"Über mich", nav_skills:"Fähigkeiten", nav_exp:"Erfahrung", nav_edu:"Ausbildung",
    nav_projects:"Projekte", nav_certs:"Zertif.", nav_roadmap:"Roadmap",
    nav_blog:"Blog", nav_contact:"Kontakt",

    hero_badge:"Cybersicherheits- & Embedded-Systems-Ingenieur",
    hero_name_1:"Abderrahmen", hero_name_2:"Ben Omrane",
    hero_subtitle:"Sicherheitsanalyst · Red & Blue Team · IoT-Sicherheit · KI",
    hero_desc:"An der Schnittstelle von Embedded Systems und Cybersicherheit. Spezialisiert auf Bedrohungserkennung, Incident Response, Penetrationstests, IoT-Sicherheitshärtung und KI-gestützte Sicherheitslösungen.",
    welcome:"Willkommen auf meiner Website", welcome_paragraph:"Beim Herunterscrollen erfahren Sie mehr über mich und entdecken Details zu meiner beruflichen Erfahrung, meiner Ausbildung, meinem Vereinsengagement sowie meinen Interessen und Projekten.",
    hero_card_role:"Technischer Berater @ Naxxum Africa",
    hero_btn_contact:"Kontakt →", hero_btn_cv:"Lebenslauf ↓", hero_btn_projects:"Projekte",
    hero_stat_exp:"Jahre XP", hero_stat_certs:"Zertif.", hero_stat_proj:"Projekte", hero_stat_lang:"Sprachen",

    domain_cyber:"Cybersicherheit", domain_embedded:"Embedded Systems", domain_ai:"KI & Maschinelles Lernen",
    domain_cyber_desc:"Red Team · Blue Team · Audit · Incident Response · SIEM",
    domain_embedded_desc:"Mikrocontroller · IoT · UART · GSM · XBee · Hardware-Sicherheit",
    domain_ai_desc:"Maschinelles Lernen · KI in CyberSec · Anomalieerkennung",

    about_eyebrow:"Wer ich bin", about_title:"Über <span>Mich</span>",
    about_p1:"25-jähriger Cybersicherheitsspezialist mit einzigartigem dualem Hintergrund in Elektronik & Embedded Systems (BSc) und Informationssystemsicherheit (MSc). Diese seltene Kombination ermöglicht mir ein tiefes Verständnis beider Angriffsflächen.",
    about_p2:"Mein Berufsweg umfasst SOC-Operationen, Penetrationstests, Bedrohungsanalyse und IoT-Sicherheitshärtung. Erfahrung in Incident Response, SIEM-Management und Sicherheitslösungen für Unternehmensumgebungen.",
    about_p3:"Ich bin leidenschaftlich für KI/ML-Anwendungen in der Cybersicherheit, Malware-Analyse und das aufkommende Feld der Embedded-Systems-Sicherheit.",
    info_loc:"Standort", info_email:"E-Mail", info_avail:"Verfügbarkeit", info_avail_val:"Offen für Angebote",
    info_langs:"Sprachen", stat_exp:"Jahre Erfahrung", stat_certs:"Zertifizierungen", stat_proj:"Projekte", stat_lang:"Sprachen",

    skills_eyebrow:"Womit ich arbeite", skills_title:"Technische <span>Fähigkeiten</span>",
    tab_all:"Alle", tab_cyber:"Cybersicherheit", tab_embedded:"Embedded", tab_ai:"KI",

    exp_eyebrow:"Karriereweg", exp_title:"Berufliche <span>Erfahrung</span>",
    exp1_role:"Technischer Berater", exp1_co:"Naxxum Africa", exp1_date:"Nov 2025 – Heute",
    exp1_b1:"Integration und Bereitstellung von Softwarelösungen in internationalen Kundeninfrastrukturen.",
    exp1_b2:"Technische, funktionale und sicherheitsbezogene Beratung in der Vorintegrations-Phase.",
    exp1_b3:"Post-Deployment-Support: Diagnose, Incident-Analyse und Lösung.",
    exp1_b4:"Koordination mit Softwareanbietern in Sicherheitsfragen.",
    exp2_role:"Cybersicherheitsanalyst", exp2_co:"Keystone Group", exp2_date:"Feb 2025 – Nov 2025",
    exp2_b1:"Integration von Sicherheitsintelligenz in Kundenplattformen.",
    exp2_b2:"Teilnahme an Red-Team-Penetrationstests zur Verbesserung der SIEM-Erkennung.",
    exp2_b3:"Bereitstellung und Konfiguration von Unternehmenssicherheitslösungen.",
    exp2_b4:"Kommunikation von Incident-Status und Sicherheitsempfehlungen an Kunden.",
    exp3_role:"SOC-Analyst — Stufe 2", exp3_co:"Keystone Group", exp3_date:"Feb 2024 – Jan 2025",
    exp3_b1:"Bearbeitung von Sicherheitsvorfällen der Stufen 2/3 über SIEM-Plattformen.",
    exp3_b2:"Analyse verdächtiger Dateien, Webinhalte und E-Mails.",
    exp3_b3:"Kategorisierung von Cyberangriffen und Beitrag zur Eindämmung von Bedrohungen.",

    edu_eyebrow:"Akademischer Hintergrund", edu_title:"<span>Ausbildung</span>",
    edu1_deg:"Professioneller Master", edu1_field:"Informationssysteme und Infrastruktursicherheit",
    edu1_school:"Höheres Institut für Informatik El Manar", edu1_date:"Sep 2023 – Jul 2025 · Ariana, Tunesien",
    edu1_desc:"Fortgeschrittenes Studium in Cybersicherheit, Netzwerksicherheit, sicheren Architekturen und digitaler Forensik. Abschlussprojekt: Cyber-Range-Labor-Erstellungsmodul.",
    edu2_deg:"Bachelor", edu2_field:"Elektronik, Elektrotechnik & Automatisierung — Embedded Systems",
    edu2_school:"Höheres Institut für Informatik El Manar", edu2_date:"Sep 2020 – Jun 2023 · Ariana, Tunesien",
    edu2_desc:"Schwerpunkt auf Embedded Systems, Mikrocontroller, Kommunikationsprotokolle, IoT-Entwicklung und Echtzeitsysteme. Abschlussprojekt: ATmega328P-basierter IoT-Bewässerungsknoten.",

    proj_eyebrow:"Was ich gebaut habe", proj_title:"<span>Projekte</span>",
    proj_tab_all:"Alle", proj_tab_cyber:"Cybersicherheit", proj_tab_embedded:"Embedded", proj_tab_ai:"KI",

    certs_eyebrow:"Meine Zertifizierungen", certs_title:"<span>Zertifizierungen</span>",
    cert_tab_all:"Alle", cert_tab_cyber:"Cybersicherheit", cert_tab_embedded:"Embedded", cert_tab_ai:"KI",
    cert_open:"Zertifikat öffnen ↗", cert_progress:"In Bearbeitung",

    roadmap_eyebrow:"Wohin ich gehe", roadmap_title:"Lern-<span>Roadmap</span>",
    rm1_phase:"Jetzt", rm1_title:"Aktive Ziele", rm2_phase:"Q3 2026", rm2_title:"Nächste Meilensteine",
    rm3_phase:"2027+", rm3_title:"Langfristige Ziele",

    assoc_eyebrow:"Gemeinschaftliches Engagement", assoc_title:"Vereins-<span>Erfahrung</span>",
    assoc_org:"Enactus ISI", assoc_role:"Mitglied · 4 Jahre | VP Finanzen · 1 Jahr | Brainstorming-Leiter · 2 Jahre",
    assoc_desc:"Aktives Mitglied von Enactus ISI für 4 Jahre. Als Vizepräsident für Finanzen und Brainstorming-Leiter entwickelte ich starke Führungs-, Finanzplanungs- und kreative Problemlösungsfähigkeiten.",

    int_eyebrow:"Was mich antreibt", int_title:"<span>Interessen</span>",

    blog_eyebrow:"Wissensaustausch", blog_title:"Blog & <span>Artikel</span>",
    blog_soon:"Demnächst verfügbar",

    contact_eyebrow:"Verbinden wir uns", contact_title:"<span>Kontakt</span> aufnehmen",
    contact_desc:"Ob Sicherheitsprojekt, Zusammenarbeit oder einfach ein Gespräch — ich freue mich immer auf Kontakt.",
    contact_phone:"Telefon", form_name:"Name", form_email:"E-Mail", form_msg:"Nachricht", form_send:"Senden →",
    copy:"Kopieren", copied:"Kopiert!"
  }
};

/* ── State ── */
let lang = 'en';
let theme = 'dark';

/* ── Apply language ── */
function applyLang(l) {
  lang = l;
  const t = LANG[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
}

/* ── Theme ── */
function applyTheme(t) {
  theme = t;
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('themeIcon').textContent = t === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('abo-theme', t);
}

/* ── Generic tab switcher ── */
function initTabs(tabSelector, panelSelector) {
  const tabs = document.querySelectorAll(tabSelector);
  const panels = document.querySelectorAll(panelSelector);
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.querySelector(panelSelector + '[data-tab="' + tab.dataset.tab + '"]');
      if (target) target.classList.add('active');
    });
  });
}

/* ── Scroll reveal ── */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Active nav on scroll ── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => obs.observe(s));
}

/* ── Back to top ── */
function initBackTop() {
  const btn = document.getElementById('backTop');
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Copy email ── */
function initCopy() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.dataset.copy;
      navigator.clipboard.writeText(text).then(() => {
        const orig = btn.textContent;
        btn.textContent = LANG[lang].copied;
        setTimeout(() => { btn.textContent = orig; }, 2000);
      });
    });
  });
}

/* ── Hamburger ── */
function initMobile() {
  const hb = document.getElementById('hamburger');
  const mm = document.getElementById('mobileMenu');
  hb.addEventListener('click', () => mm.classList.toggle('open'));
  mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')));
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  /* Restore theme */
  const saved = localStorage.getItem('abo-theme') || 'dark';
  applyTheme(saved);

  /* Lang buttons */
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  applyLang('en');

  /* Theme toggle */
  document.getElementById('themeToggle').addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));

  /* Tabs */
  initTabs('.skills-tab', '.skills-panel');
  initTabs('.proj-tab', '.proj-panel');
  initTabs('.cert-tab', '.cert-panel');

  /* Others */
  initReveal();
  initActiveNav();
  initBackTop();
  initCopy();
  initMobile();
});
