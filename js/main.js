/* ============================================================
   SERVELAB — main.js
   Built to Serve. Driven to Impact. Designed to Evolve.
   ============================================================ */

'use strict';

/* ─── TRANSLATIONS ─── */
const translations = {
  en: {
    "nav.services": "Services",
    "nav.about": "About",
    "nav.values": "Values",
    "nav.clients": "Clients",
    "nav.cta": "Get Started",
    "hero.badge": "Digital Solutions · Guinea-Bissau · Africa",
    "hero.h1": "Built to <em>Serve.</em><br>Driven to Impact.",
    "hero.sub": "We build simple, effective, and scalable digital systems that help businesses grow, attract customers, and operate with confidence.",
    "hero.btn1": "Explore Services →",
    "hero.btn2": "Let's Talk",
    "hero.stat1l": "Focus",
    "hero.stat2l": "Approach",
    "hero.stat2v": "Simple<span>.</span>",
    "hero.stat3l": "Goal",
    "hero.stat3v": "Impact<span>.</span>",
    "services.label": "What We Build",
    "services.h2": "Services that move<br>your business forward",
    "services.desc": "Every service is designed to solve a real problem — not just look impressive on paper.",
    "s1.title": "Website Development",
    "s1.desc": "Fast, mobile-first websites that give your business a credible online presence and attract real customers.",
    "s2.title": "Custom Web Applications",
    "s2.desc": "Purpose-built web apps tailored to your workflows — from dashboards to internal management tools.",
    "s3.title": "Booking & Appointment Systems",
    "s3.desc": "Let your customers book online, automatically. Reduce no-shows and free up your time.",
    "s4.title": "Business Management Systems",
    "s4.desc": "Inventory, POS, and operations tools built for how small businesses actually run.",
    "s5.title": "WhatsApp Integration & Automation",
    "s5.desc": "Connect WhatsApp to your business — automate bookings, orders, notifications, and customer replies.",
    "s6.title": "Digital Business Setup",
    "s6.desc": "Everything you need to go digital — from your first website to a complete online presence.",
    "about.tagline": "We build systems that <span>evolve</span> with your business.",
    "about.body": "ServeLab is a digital solutions company rooted in Africa. We understand the market, speak the language, and know that most businesses need practical tools — not overengineered platforms.",
    "about.visionlabel": "Our Vision",
    "about.vision": "To become a leading digital innovation company in Africa, creating systems that transform businesses and communities.",
    "about.missionlabel": "Our Mission",
    "about.mission": "To build simple and effective digital solutions that help businesses grow, solve real problems, and create meaningful impact.",

    "why.label": "Why ServeLab",
    "why.h2": "Your business deserves a partner, not just a vendor.",
    "why1.title": "Business-first approach",
    "why1.desc": "We understand your goals before we write a single line of code.",
    "why2.title": "Simple and effective solutions",
    "why2.desc": "No bloat. No complexity for its own sake. Just tools that work.",
    "why3.title": "Reliable and ongoing support",
    "why3.desc": "We don't disappear after launch. We grow with you.",
    "why4.title": "Future-ready systems",
    "why4.desc": "Built to scale — from your first client to your thousandth.",
    "values.label": "Our Core Values",
    "values.h2": "The principles behind every decision",
    "values.desc": "Six values. One direction — meaningful, honest impact.",
    "v1.name": "Service",    "v1.desc": "Solving real problems for real people — that's why we exist.",
    "v2.name": "Simplicity", "v2.desc": "Practical solutions that anyone can use and understand.",
    "v3.name": "Innovation", "v3.desc": "Continuous improvement — always evolving, never standing still.",
    "v4.name": "Impact",     "v4.desc": "Focusing on results that actually matter to your business.",
    "v5.name": "Integrity",  "v5.desc": "Honest, transparent relationships built on real trust.",
    "v6.name": "Community",  "v6.desc": "Technology should uplift people — we build with our communities in mind.",
    "clients.label": "Who We Serve",
    "clients.h2": "Built for businesses<br>ready to grow digitally",
    "clients.desc": "From your local restaurant to a growing NGO — we help any business go digital.",
    "c1": "Restaurants & Cafés",
    "c2": "Hotels & Guesthouses",
    "c3": "Salons & Beauty Services",
    "c4": "Small & Medium Businesses",
    "c5": "NGOs & Organizations",
    "c6": "Startups & Entrepreneurs",
    "c7": "Local Retailers",
    "c8": "Health & Wellness",
    "contact.label": "Ready to start?",
    "contact.h2": "Let's build something<br>that works for you.",
    "contact.desc": "Tell us what you need. We'll tell you what's possible. No jargon, no pressure — just a real conversation about your business.",
    "contact.wa": "💬 WhatsApp Us",
    "contact.email": "✉️ Send an Email",
    "footer.tagline": "Built to Serve. Driven to Impact. Designed to Evolve.",
    "footer.copy": "© 2026 ServeLab. All rights reserved."
  },
  pt: {
    "nav.services": "Serviços",
    "nav.about": "Sobre",
    "nav.values": "Valores",
    "nav.clients": "Clientes",
    "nav.cta": "Começar Agora",
    "hero.badge": "Soluções Digitais · Guiné-Bissau · África",
    "hero.h1": "Construído para <em>Servir.</em><br>Movido pelo Impacto.",
    "hero.sub": "Criamos sistemas digitais simples, eficazes e escaláveis que ajudam negócios a crescer, atrair clientes e operar com confiança.",
    "hero.btn1": "Ver Serviços →",
    "hero.btn2": "Fale Connosco",
    "hero.stat1l": "Foco",
    "hero.stat2l": "Abordagem",
    "hero.stat2v": "Simples<span>.</span>",
    "hero.stat3l": "Objetivo",
    "hero.stat3v": "Impacto<span>.</span>",
    "services.label": "O Que Construímos",
    "services.h2": "Serviços que fazem<br>o seu negócio avançar",
    "services.desc": "Cada serviço é criado para resolver um problema real — não para impressionar no papel.",
    "s1.title": "Desenvolvimento de Websites",
    "s1.desc": "Websites rápidos e adaptados a telemóvel que dão presença online ao seu negócio e atraem clientes reais.",
    "s2.title": "Aplicações Web Personalizadas",
    "s2.desc": "Apps web feitas à medida dos seus processos — desde dashboards a ferramentas de gestão interna.",
    "s3.title": "Sistemas de Reservas e Agendamentos",
    "s3.desc": "Deixe os seus clientes marcar online, automaticamente. Reduza faltas e liberte o seu tempo.",
    "s4.title": "Sistemas de Gestão Empresarial",
    "s4.desc": "Ferramentas de inventário, POS e operações criadas para como as pequenas empresas realmente funcionam.",
    "s5.title": "Integração e Automação com WhatsApp",
    "s5.desc": "Conecte o WhatsApp ao seu negócio — automatize reservas, encomendas, notificações e respostas a clientes.",
    "s6.title": "Configuração Digital do Negócio",
    "s6.desc": "Tudo o que precisa para digitalizar — do primeiro website a uma presença online completa.",
    "about.tagline": "Construímos sistemas que <span>evoluem</span> com o seu negócio.",
    "about.body": "A ServeLab é uma empresa de soluções digitais com raízes em África. Conhecemos o mercado, falamos a língua e sabemos que a maioria dos negócios precisa de ferramentas práticas — não de plataformas complicadas.",
    "about.visionlabel": "A Nossa Visão",
    "about.vision": "Tornar-nos uma referência em inovação digital em África, criando sistemas que transformam negócios e comunidades.",
    "about.missionlabel": "A Nossa Missão",
    "about.mission": "Construir soluções digitais simples e eficazes que ajudem os negócios a crescer, resolvam problemas reais e criem impacto significativo.",

    "why.label": "Porquê a ServeLab",
    "why.h2": "O seu negócio merece um parceiro, não apenas um fornecedor.",
    "why1.title": "Abordagem centrada no negócio",
    "why1.desc": "Entendemos os seus objetivos antes de escrever uma linha de código.",
    "why2.title": "Soluções simples e eficazes",
    "why2.desc": "Sem excessos. Sem complexidade desnecessária. Apenas ferramentas que funcionam.",
    "why3.title": "Suporte fiável e contínuo",
    "why3.desc": "Não desaparecemos após o lançamento. Crescemos consigo.",
    "why4.title": "Sistemas preparados para o futuro",
    "why4.desc": "Construídos para escalar — do primeiro cliente ao milésimo.",
    "values.label": "Os Nossos Valores",
    "values.h2": "Os princípios por detrás de cada decisão",
    "values.desc": "Seis valores. Uma direção — impacto real e honesto.",
    "v1.name": "Serviço",      "v1.desc": "Resolver problemas reais para pessoas reais — é para isso que existimos.",
    "v2.name": "Simplicidade", "v2.desc": "Soluções práticas que qualquer pessoa pode usar e compreender.",
    "v3.name": "Inovação",     "v3.desc": "Melhoria contínua — sempre a evoluir, nunca parados.",
    "v4.name": "Impacto",      "v4.desc": "Foco nos resultados que realmente importam para o seu negócio.",
    "v5.name": "Integridade",  "v5.desc": "Relações honestas e transparentes baseadas em confiança real.",
    "v6.name": "Comunidade",   "v6.desc": "A tecnologia deve elevar as pessoas — construímos pensando nas nossas comunidades.",
    "clients.label": "A Quem Servimos",
    "clients.h2": "Para negócios prontos<br>a crescer digitalmente",
    "clients.desc": "Do restaurante local a uma ONG em crescimento — ajudamos qualquer negócio a digitalizar-se.",
    "c1": "Restaurantes e Cafés",
    "c2": "Hotéis e Pensões",
    "c3": "Salões e Serviços de Beleza",
    "c4": "Pequenas e Médias Empresas",
    "c5": "ONGs e Organizações",
    "c6": "Startups e Empreendedores",
    "c7": "Comércio Local",
    "c8": "Saúde e Bem-estar",
    "contact.label": "Pronto para começar?",
    "contact.h2": "Vamos construir algo<br>que funcione para si.",
    "contact.desc": "Diga-nos o que precisa. Dizemos-lhe o que é possível. Sem jargão, sem pressão — apenas uma conversa real sobre o seu negócio.",
    "contact.wa": "💬 WhatsApp",
    "contact.email": "✉️ Enviar um Email",
    "footer.tagline": "Construído para Servir. Movido pelo Impacto. Desenhado para Evoluir.",
    "footer.copy": "© 2026 ServeLab. Todos os direitos reservados."
  }
};

/* ─── LANGUAGE SWITCHER ─── */
let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Close mobile menu if open
  closeMobileMenu();
}

/* ─── SCROLL REVEAL ─── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (i * 0.07) + 's';
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ─── NAVBAR SCROLL EFFECT ─── */
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ─── MOBILE MENU ─── */
let menuOpen = false;

function toggleMobileMenu() {
  menuOpen = !menuOpen;
  const mobileNav = document.querySelector('.mobile-nav');
  const hamburger = document.querySelector('.hamburger');
  mobileNav.classList.toggle('open', menuOpen);
  hamburger.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  menuOpen = false;
  const mobileNav = document.querySelector('.mobile-nav');
  const hamburger = document.querySelector('.hamburger');
  if (mobileNav) mobileNav.classList.remove('open');
  if (hamburger) hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── SMOOTH SCROLL FOR NAV LINKS ─── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        closeMobileMenu();
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, menuOpen ? 300 : 0);
      }
    });
  });
}

/* ─── CLOSE MENU ON RESIZE ─── */
function initResizeHandler() {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMobileMenu();
  }, { passive: true });
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavScroll();
  initSmoothScroll();
  initResizeHandler();
});

/* ============================================================
   ANIMATIONS — SERVELAB
   ============================================================ */

/* ─── FLOATING PARTICLES ─── */
function initParticles() {
  const hero = document.querySelector('#hero');
  if (!hero) return;

  const container = document.createElement('div');
  container.className = 'particles';
  hero.appendChild(container);

  const count = 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      bottom: -10px;
      --dur: ${Math.random() * 10 + 8}s;
      --delay: ${Math.random() * 10}s;
      opacity: 0;
    `;
    container.appendChild(p);
  }
}

/* ─── TYPED TEXT EFFECT ─── */
function initTypedText() {
  const h1 = document.querySelector('#hero h1');
  if (!h1) return;

  const words = ['Serve.', 'Impact.', 'Evolve.'];
  const em = h1.querySelector('em');
  if (!em) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const cursor = document.createElement('span');
  cursor.className = 'typed-cursor';
  em.after(cursor);

  function type() {
    const current = words[wordIndex];

    if (isDeleting) {
      em.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      em.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  setTimeout(type, 1800);
}

/* ─── STAGGER OBSERVER ─── */
function initStaggerObserver() {
  const staggerTargets = [
    '.services-grid',
    '.values-grid',
    '.clients-grid',
    '.why-list'
  ];

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  staggerTargets.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) staggerObserver.observe(el);
  });
}

/* ─── ANIMATED DIVIDERS ─── */
function initDividers() {
  document.querySelectorAll('.divider-animated').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

/* ─── COUNTER ANIMATION ─── */
function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target, parseInt(e.target.dataset.count));
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
}

/* ─── NAVBAR ACTIVE SECTION HIGHLIGHT ─── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${entry.target.id}`
            ? 'var(--white)'
            : '';
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => obs.observe(s));
}

/* ─── BUTTON MAGNETIC EFFECT ─── */
function initMagneticButtons() {
  document.querySelectorAll('.btn-primary, .btn-whatsapp, .btn-secondary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-2px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ─── HERO PARALLAX ─── */
function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  const heroGrid = document.querySelector('.hero-grid');
  if (!heroBg || !heroGrid) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    heroGrid.style.transform = `translateY(${scrollY * 0.15}px)`;
  }, { passive: true });
}

/* ─── SERVICE CARD TILT ─── */
function initCardTilt() {
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ─── SMOOTH SCROLL PROGRESS BAR ─── */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed; top: 0; left: 0; height: 2px; width: 0%;
    background: linear-gradient(90deg, #2d8a50, #7dda9b);
    z-index: 9999; transition: width 0.1s linear; pointer-events: none;
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrollTop / docHeight) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ─── UPDATE INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavScroll();
  initSmoothScroll();
  initResizeHandler();
  initParticles();
  initTypedText();
  initStaggerObserver();
  initDividers();
  initCounters();
  initActiveNav();
  initMagneticButtons();
  initParallax();
  initCardTilt();
  initScrollProgress();
});
