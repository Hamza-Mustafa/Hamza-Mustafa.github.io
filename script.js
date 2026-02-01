
    // LOADER
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      setTimeout(() => {
        if (loader) loader.style.display = 'none';
      }, 800);
    });

    // Fade-in scroll animation for cards
    const cards = document.querySelectorAll('.card');
    const cardObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2 });

    cards.forEach(card => cardObserver.observe(card));

    // Image modal
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("imgModalContent");
    const closeBtn = document.querySelector(".img-close");

    document.querySelectorAll(".project img").forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modal.classList.add("show");
        modalImg.src = img.src;
      });
    });

    function closeModal() {
      modal.classList.remove("show");
      setTimeout(() => { modal.style.display = "none"; }, 300);
    }

    if (closeBtn) {
      closeBtn.onclick = closeModal;
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });

    // Theme toggle
    const toggleBtn = document.getElementById("themeToggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const light = document.body.classList.contains("light-mode");
        toggleBtn.textContent = light ? "🌙" : "☀️";
      });
    }

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');
    const mobileOverlay = document.getElementById('mobileOverlay');

    function openMobileMenu() {
      mobileMenu.classList.add('open');
      mobileOverlay.classList.add('show');
    }

    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      mobileOverlay.classList.remove('show');
    }

    if (hamburger) {
      hamburger.addEventListener('click', openMobileMenu);
    }
    if (mobileClose) {
      mobileClose.addEventListener('click', closeMobileMenu);
    }
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', closeMobileMenu);
    }

    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Active navbar highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a[data-link], .mobile-menu a[data-link]');

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            if (link.getAttribute('data-link') === id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(section => sectionObserver.observe(section));

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Hero parallax
    const hero = document.getElementById('hero');
    const heroInner = document.querySelector('.hero-inner');
    if (hero && heroInner) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        heroInner.style.transform = `translate3d(${x * 12}px, ${y * 8}px, 0)`;
      });

      hero.addEventListener('mouseleave', () => {
        heroInner.style.transform = 'translate3d(0,0,0)';
      });
    }

    // Soft floating particles in hero section
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
const particleCount = 45;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.6 + 0.2
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();


const expItems = document.querySelectorAll('.exp-item');
const expObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.3 });
expItems.forEach(item => expObserver.observe(item));

const eduBadges = document.querySelectorAll('.edu-badge');
const eduBadgeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.3 });
eduBadges.forEach(badge => eduBadgeObserver.observe(badge));


// Animate skill cards on scroll
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.3 });

skillCards.forEach(card => skillObserver.observe(card));


const themeCheckbox = document.getElementById("themeToggleCheckbox");
// Function to set initial state based on current page mode
function initThemeToggle() {
  const isDarkMode = !document.body.classList.contains("light-mode");
  themeCheckbox.checked = isDarkMode; // checked = dark mode ON
}

// Toggle theme on change
themeCheckbox.addEventListener("change", () => {
  if (themeCheckbox.checked) {
    // Dark mode ON
    document.body.classList.remove("light-mode");
  } else {
    // Light mode ON
    document.body.classList.add("light-mode");
  }
});

// Initialize on page load
initThemeToggle();

    
