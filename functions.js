    /* Typing effect */
    const text = "Tony Programador";
    const typingElement = document.getElementById("typing");
    let index = 0;

    function type() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 120);
      }
    }
    type();

    /* ScrollReveal */
    ScrollReveal({ distance: '50px', duration: 900, easing: 'ease-out' });
    ScrollReveal().reveal('section h2', { origin: 'left' });
    ScrollReveal().reveal('.about p, .skill, .project-card, .contact-links a', { interval: 120, origin: 'bottom' });

    /* Language toggle */
    let isPT = true;

    function toggleLanguage() {
      isPT = !isPT;
      document.querySelector('.lang-toggle').textContent = isPT ? 'EN' : 'PT';

      document.getElementById('hero-text').textContent = isPT
        ? 'Desenvolvedor em início de carreira, curioso por natureza e movido por tecnologia, design e segurança. Sempre aprendendo, sempre evoluindo.'
        : 'Early-career developer, naturally curious and driven by technology, design, and security. Always learning, always evolving.';

      document.getElementById('about-title').textContent = isPT ? 'Sobre mim' : 'About me';
      document.getElementById('about-text').textContent = isPT
        ? 'Sou formado em Análise e Desenvolvimento de Sistemas e atualmente curso um MBA em Cibersegurança e Gestão de Riscos. Ainda no começo da jornada profissional, acredito que consistência, estudo e projetos reais são o caminho para crescer na área.'
        : 'I hold a degree in Systems Analysis and Development and I am currently pursuing an MBA in Cybersecurity and Risk Management. At the beginning of my professional journey, I believe consistency, study, and real projects are the key to growth.';

      document.getElementById('skills-title').textContent = 'Skills';
      document.getElementById('projects-title').textContent = isPT ? 'Projetos' : 'Projects';
      document.getElementById('contact-title').textContent = isPT ? 'Contato' : 'Contact';
      document.getElementById('footer-text').textContent = isPT
        ? '© 2025 — Construído com curiosidade, estudo contínuo e foco no futuro.'
        : '© 2025 — Built with curiosity, continuous learning, and focus on the future.';

      document.querySelectorAll('.project-card h3').forEach((el, i) => {
        const titlesPT = ['Interfaces Modernas', 'Aplicações JavaScript', 'Scripts em Python'];
        const titlesEN = ['Modern Interfaces', 'JavaScript Applications', 'Python Scripts'];
        el.textContent = isPT ? titlesPT[i] : titlesEN[i];
      });

      document.querySelectorAll('.project-extra p').forEach(el => {
        el.textContent = isPT
          ? 'Descrição detalhada do projeto, tecnologias utilizadas, aprendizados principais e desafios resolvidos durante o desenvolvimento.'
          : 'Detailed project description, technologies used, key learnings, and challenges solved during development.';
      });

      document.querySelectorAll('.project-link').forEach(el => {
        el.innerHTML = `<i data-lucide=\"github\"></i> ${isPT ? 'Ver no GitHub' : 'View on GitHub'}`;
      });

      lucide.createIcons();
    }

    /* Project expand */
    function toggleProject(card) {
      card.classList.toggle('expanded');
    }

    /* Initialize icons */
    lucide.createIcons();
