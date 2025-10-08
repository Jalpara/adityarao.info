const NAV_LINKS = [
  { id: 'home', label: 'Home', href: 'index.html' },
  { id: 'about', label: 'About', href: 'about.html' },
  { id: 'blog', label: 'Blog', href: 'blog.html' },
  { id: 'creations', label: 'Creations', href: 'creations.html' },
  { id: 'contact', label: 'Contact', href: 'contact.html' }
];

const MORE_LINKS = [
  { id: 'needs-wants', label: 'Needs & Wants', href: 'needs-wants.html' },
  { id: 'now-someday', label: 'Now & Someday', href: 'now-someday.html' }
];

const CTA_LINK = { label: 'Say hi', href: 'contact.html#book' };

function renderHeader(currentPage) {
  const mount = document.querySelector('[data-component="site-header"]');
  if (!mount) return;

  mount.id = 'site-header';
  mount.className = 'sticky top-0 z-20 border-b border-stroke/70 bg-white/80 backdrop-blur';

  const navLinkClass = 'transition-colors text-subink hover:text-ink';

  const renderNavItem = (item) => {
    if (item.id === currentPage) {
      return `<span class="text-subink" aria-current="page">${item.label}</span>`;
    }
    return `<a href="${item.href}" class="${navLinkClass}">${item.label}</a>`;
  };

  const moreActive = MORE_LINKS.some((item) => item.id === currentPage);
  const moreMenu = `
    <div class="relative" data-nav-more>
      <button type="button" class="${navLinkClass} inline-flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
        <span${moreActive ? ' class="text-subink" aria-current="page"' : ''}>More</span>
        <svg class="h-2.5 w-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      <div class="absolute right-0 mt-2 hidden w-44 divide-y divide-stroke overflow-hidden rounded-lg border border-stroke bg-white text-sm shadow-card" data-nav-menu role="menu">
        <ul class="py-2 text-ink">
          ${MORE_LINKS.map((item) => {
            if (item.id === currentPage) {
              return `<li><span class="block bg-subtle px-4 py-2 text-subink">${item.label}</span></li>`;
            }
            return `<li><a href="${item.href}" class="block px-4 py-2 transition-colors hover:bg-subtle">${item.label}</a></li>`;
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

  mount.innerHTML = `
    <nav class="mx-auto max-w-5xl px-5">
      <div class="flex h-14 items-center gap-4 text-sm">
        <a href="index.html" class="font-display text-lg tracking-tight text-ink">Aditya Rao</a>
        <div class="ml-auto flex items-center gap-5">
          ${navItemsHtml}
          <a href="${CTA_LINK.href}" class="rounded-full bg-blue-600 px-3 py-1 text-white">${CTA_LINK.label}</a>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  const mounts = document.querySelectorAll('[data-component="site-footer"]');
  mounts.forEach((footer) => {
    footer.className = 'border-t border-stroke/70 py-8 text-xs text-subink';
    const wrapper = document.createElement('div');
    wrapper.className = 'mx-auto flex max-w-5xl items-center justify-between px-5';

    const placement = footer.dataset.footerDatePlacement || 'right';
    const note = footer.dataset.footerNote || 'Made lightly.';
    const showDate = footer.dataset.footerHideDate !== 'true';

    if (placement === 'inline' && showDate) {
      const span = document.createElement('span');
      span.innerHTML = `${note} <span data-today id="today"></span>`;
      wrapper.appendChild(span);
    } else {
      const leftSpan = document.createElement('span');
      leftSpan.textContent = note;
      wrapper.appendChild(leftSpan);
      if (showDate) {
        const rightSpan = document.createElement('span');
        rightSpan.id = 'today';
        rightSpan.setAttribute('data-today', '');
        wrapper.appendChild(rightSpan);
      }
    }

    footer.innerHTML = '';
    footer.appendChild(wrapper);
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
    el.style.transitionDelay = `${Math.min(index * 40, 240)}ms`;
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
  renderHeader(page || '');
  renderFooter();
  setupNavMenu();
  initReveal();
  initHeaderScroll();
  updateClock();
  initClipboard();
  initWeatherSetter();
})();
