document.documentElement.classList.add('has-js');

const NAV_LINKS = [
  { id: 'home', label: 'Home', href: 'index.html' },
  { id: 'about', label: 'About', href: 'about.html' },
  { id: 'blog', label: 'Blog', href: 'blog.html' },
  { id: 'creations', label: 'Creations', href: 'creations.html' },
  { id: 'contact', label: 'Contact', href: 'contact.html' }
];

const MORE_LINKS = [
  { id: 'brand-assets', label: 'Brand Assets', href: 'brand-assets.html' },
  { id: 'needs-wants', label: 'Needs & Wants', href: 'needs-wants.html' },
  { id: 'now-someday', label: 'Now & Someday', href: 'now-someday.html' }
];

const CTA_LINK = { label: 'Say hi', href: 'contact.html#book' };

const SOCIAL_LINKS = [
  { label: 'Email', href: 'mailto:mail@adityarao.info' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/raoaditya.bsky.social' },
  { label: 'GitHub', href: 'https://github.com/adityarawr' }
];

const FOOTER_TAGS = ['Reading daily', 'Moving often', 'Practicing flute'];

const DAILY_QUOTES = [
  { text: 'Small steps eventually draw the map.', author: 'Aditya Rao' },
  { text: 'Read a page, write a line, notice the shift.', author: 'Unknown' },
  { text: 'Quiet effort compounds louder than declarations.', author: 'Unknown' },
  { text: 'Practice is the signal that tomorrow hears.', author: 'Aditya Rao' },
  { text: 'Be where your feet are and listen with patience.', author: 'Coach Taylor' },
  { text: 'Consistency is what turns a habit into a story.', author: 'James Clear' },
  { text: 'Do the work before the work needs you.', author: 'Unknown' }
];

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);

function renderHeader(currentPage) {
  const mount = document.querySelector('[data-component="site-header"]');
  if (!mount) return;

  mount.id = 'site-header';
  mount.className = 'sticky top-0 z-40 border-b border-transparent bg-white/70 backdrop-blur-xl transition-all duration-500';

  const navLinkClass = 'transition-colors duration-300 text-subink hover:text-ink';

  const renderNavItem = (item) => {
    if (item.id === currentPage) {
      return `<span class="text-ink font-medium" aria-current="page">${item.label}</span>`;
    }
    return `<a href="${item.href}" class="${navLinkClass}">${item.label}</a>`;
  };

  const moreActive = MORE_LINKS.some((item) => item.id === currentPage);
  const moreMenu = `
    <div class="relative" data-nav-more>
      <button type="button" class="${navLinkClass} inline-flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
        <span${moreActive ? ' class="text-ink font-medium" aria-current="page"' : ''}>More</span>
        <svg class="h-2.5 w-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      <div class="absolute right-0 mt-3 hidden w-48 overflow-hidden rounded-2xl border border-stroke/80 bg-white/95 text-sm shadow-card" data-nav-menu role="menu">
        <ul class="py-3 text-ink">
          ${MORE_LINKS.map((item) => {
            if (item.id === currentPage) {
              return `<li><span class="block bg-subtle px-4 py-2 text-subink">${item.label}</span></li>`;
            }
            return `<li><a href="${item.href}" class="block px-4 py-2 transition-colors duration-300 hover:bg-subtle/80">${item.label}</a></li>`;
          }).join('')}
        </ul>
      </div>
    </div>
  `;

  const navItemsHtml = [
    renderNavItem(NAV_LINKS[0]),
    renderNavItem(NAV_LINKS[1]),
    renderNavItem(NAV_LINKS[2]),
    renderNavItem(NAV_LINKS[3]),
    moreMenu,
    renderNavItem(NAV_LINKS[4])
  ].join('');

  const renderMobileNavLink = (item) => {
    if (item.id === currentPage) {
      return `<span aria-current="page">${item.label}</span>`;
    }
    return `<a href="${item.href}">${item.label}</a>`;
  };

  const mobilePrimaryLinks = NAV_LINKS.map((item) => `<li>${renderMobileNavLink(item)}</li>`).join('');
  const mobileMoreLinks = MORE_LINKS.map((item) => `<li>${renderMobileNavLink(item)}</li>`).join('');

  mount.innerHTML = `
    <nav class="mx-auto max-w-5xl px-5">
      <div class="flex h-16 items-center gap-4 text-sm">
        <a href="index.html" class="font-display text-lg tracking-tight text-ink">Aditya Rao</a>
        <button type="button" class="nav-toggle ml-auto md:hidden" data-nav-toggle aria-expanded="false" aria-controls="mobile-nav" aria-label="Toggle navigation">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <div class="ml-auto hidden items-center gap-6 md:flex">
          ${navItemsHtml}
          <a href="${CTA_LINK.href}" class="btn btn--primary text-sm" data-skip-transition>${CTA_LINK.label}</a>
        </div>
      </div>
      <div class="mobile-nav md:hidden" id="mobile-nav" data-mobile-panel hidden>
        <div class="mobile-nav__panel">
          <div class="mobile-nav__section">
            <p class="mobile-nav__heading">Navigate</p>
            <ul class="mobile-nav__list">
              ${mobilePrimaryLinks}
            </ul>
          </div>
          <div class="mobile-nav__section">
            <p class="mobile-nav__heading">More</p>
            <ul class="mobile-nav__list">
              ${mobileMoreLinks}
            </ul>
          </div>
          <a href="${CTA_LINK.href}" class="btn btn--primary mobile-nav__cta" data-mobile-close="true" data-skip-transition>${CTA_LINK.label}</a>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  const mounts = document.querySelectorAll('[data-component="site-footer"]');
  if (!mounts.length) return;

  const footerLinks = [...NAV_LINKS, ...MORE_LINKS];
  const currentYear = new Date().getFullYear();

  const renderSocialLink = (item) => {
    const external = !item.href.startsWith('mailto:');
    const attributes = external ? ' target="_blank" rel="noreferrer noopener"' : '';
    return `<li><a class="footer-link" href="${item.href}"${attributes}>${item.label}</a></li>`;
  };

  mounts.forEach((footer) => {
    const note = escapeHtml(footer.dataset.footerNote || 'Made lightly.');
    const showDate = footer.dataset.footerHideDate !== 'true';

    footer.className = 'mt-16 border-t border-transparent bg-white/70 backdrop-blur-lg text-sm text-subink';
    footer.innerHTML = `
      <div class="mx-auto max-w-5xl px-5 py-12">
        <div class="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p class="text-xl font-display text-ink">Aditya Rao</p>
            <p class="mt-2 max-w-xs leading-6">Observing small wins in reading, movement, and music from Navi Mumbai.</p>
            <div class="mt-4 flex flex-wrap gap-2">
              ${FOOTER_TAGS.map((tag) => `<span class="chip">${tag}</span>`).join('')}
            </div>
          </div>
          <div>
            <p class="footer-heading">Explore</p>
            <ul class="mt-3 space-y-2">
              ${footerLinks.map((item) => `<li><a class="footer-link" href="${item.href}">${item.label}</a></li>`).join('')}
            </ul>
          </div>
          <div>
            <p class="footer-heading">Connect</p>
            <ul class="mt-3 space-y-2">
              ${SOCIAL_LINKS.map((item) => renderSocialLink(item)).join('')}
            </ul>
          </div>
        </div>
        <div class="mt-10 flex flex-col gap-2 border-t border-stroke/70 pt-6 text-xs md:flex-row md:items-center md:justify-between">
          <span>${note}${showDate ? ' <span data-today></span>' : ''}</span>
          <span>© ${currentYear} Aditya Rao. All rights reserved.</span>
        </div>
      </div>
    `;
  });
}

function setupNavMenu() {
  const more = document.querySelector('[data-nav-more]');
  if (!more) return;

  const button = more.querySelector('button');
  const menu = more.querySelector('[data-nav-menu]');
  if (!button || !menu) return;

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden', isOpen);
    button.setAttribute('aria-expanded', String(!isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!more.contains(event.target)) {
      menu.classList.add('hidden');
      button.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupMobileNav() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const toggle = header.querySelector('[data-nav-toggle]');
  const panel = header.querySelector('[data-mobile-panel]');
  if (!toggle || !panel) return;

  let hideTimeout;

  const openPanel = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = undefined;
    }
    panel.hidden = false;
    requestAnimationFrame(() => {
      panel.classList.add('is-open');
      toggle.classList.add('is-active');
      toggle.setAttribute('aria-expanded', 'true');
    });
  };

  const closePanel = () => {
    if (!panel.classList.contains('is-open') && panel.hidden) {
      toggle.setAttribute('aria-expanded', 'false');
      return;
    }
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = undefined;
    }
    panel.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    hideTimeout = window.setTimeout(() => {
      if (!panel.classList.contains('is-open')) {
        panel.hidden = true;
      }
      hideTimeout = undefined;
    }, 260);
  };

  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.contains('is-open');
    if (isOpen) {
      closePanel();
    } else {
      openPanel();
    }
  });

  panel.addEventListener('click', (event) => {
    if (event.target.dataset.mobileClose === 'true') {
      closePanel();
      return;
    }

    const link = event.target.closest('a[href]');
    if (link) {
      closePanel();
    }
  });

  document.addEventListener('click', (event) => {
    if (!panel.classList.contains('is-open')) {
      return;
    }

    const targetInsideHeader = header.contains(event.target);
    if (!targetInsideHeader) {
      closePanel();
      return;
    }

    if (panel.contains(event.target)) {
      return;
    }

    if (toggle.contains(event.target)) {
      return;
    }

    closePanel();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('is-open')) {
      closePanel();
    }
  });

  const mq = window.matchMedia('(min-width: 768px)');
  const handleMqChange = (event) => {
    if (event.matches) {
      closePanel();
    }
  };
  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', handleMqChange);
  } else if (typeof mq.addListener === 'function') {
    mq.addListener(handleMqChange);
  }
}

function initReveal() {
  const toReveal = Array.from(document.querySelectorAll('.reveal'));
  if (!toReveal.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

  toReveal.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    io.observe(el);
  });
}

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 4) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function updateClock() {
  const formatTime = () => {
    try {
      return new Intl.DateTimeFormat('en-IN', { timeStyle: 'short', timeZone: 'Asia/Kolkata' }).format(new Date());
    } catch (error) {
      return '--:--';
    }
  };

  const tick = () => {
    const time = formatTime();
    document.querySelectorAll('[data-ist]').forEach((el) => {
      el.textContent = `🕒 ${time} IST`;
    });
    const today = new Date().toISOString().slice(0, 10);
    document.querySelectorAll('[data-today]').forEach((el) => {
      el.textContent = today;
    });
  };

  tick();
  setInterval(tick, 60000);
}

function initDailyQuote() {
  const container = document.querySelector('[data-quote-of-day]');
  if (!container) return;

  const quoteTextEl = container.querySelector('[data-quote-text]');
  const quoteAuthorEl = container.querySelector('[data-quote-author]');

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const index = Math.abs(Math.floor(today.getTime() / 86400000)) % DAILY_QUOTES.length;
  const { text, author } = DAILY_QUOTES[index];

  const finalText = `“${text}”`;
  if (quoteTextEl) {
    quoteTextEl.textContent = finalText;
  } else {
    container.textContent = finalText;
  }

  if (quoteAuthorEl) {
    quoteAuthorEl.textContent = author ? `— ${author}` : '';
  } else if (author) {
    const authorNode = document.createElement('p');
    authorNode.textContent = `— ${author}`;
    container.appendChild(authorNode);
  }
}

function initPageTransitions() {
  if (!('body' in document)) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.body.classList.add('is-page-ready');
    return;
  }

  const markReady = () => {
    requestAnimationFrame(() => {
      document.body.classList.remove('is-page-exiting');
      document.body.classList.add('is-page-ready');
    });
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    markReady();
  } else {
    document.addEventListener('DOMContentLoaded', markReady, { once: true });
  }

  const isInternal = (link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return false;
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    const url = new URL(href, window.location.href);
    return url.origin === window.location.origin;
  };

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    if (link.dataset.skipTransition === 'true') return;
    if (link.hasAttribute('download')) return;
    if (link.target && link.target !== '_self') return;
    if (!isInternal(link)) return;

    const destination = link.href;
    if (destination === window.location.href) return;

    event.preventDefault();

    document.body.classList.add('is-page-exiting');
    setTimeout(() => {
      window.location.href = destination;
    }, 360);
  });
}

function initClipboard() {
  const button = document.getElementById('copy-email');
  const emailLink = document.getElementById('email-link');
  if (!button || !emailLink) return;

  button.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(emailLink.textContent.trim());
      button.textContent = 'Copied ✓';
      setTimeout(() => { button.textContent = 'Copy'; }, 1500);
    } catch (error) {
      // ignore clipboard errors silently
    }
  });
}

function initWeatherSetter() {
  const button = document.getElementById('set-weather');
  const display = document.getElementById('weather');
  if (!button || !display) return;

  button.addEventListener('click', () => {
    const temp = prompt('Temperature in °C (e.g., 29)');
    const condition = prompt('Condition (e.g., Cloudy, Clear, Rain)');
    if (temp) {
      display.textContent = `${condition ? `${condition} ` : ''}${temp}°C`;
    }
  });
}

(function initSite() {
  const page = document.body ? document.body.dataset.page : '';
  initPageTransitions();
  renderHeader(page || '');
  renderFooter();
  setupMobileNav();
  setupNavMenu();
  initReveal();
  initHeaderScroll();
  updateClock();
  initDailyQuote();
  initClipboard();
  initWeatherSetter();
})();
