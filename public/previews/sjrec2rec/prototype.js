/* Local demonstrations only. No fetch, storage, analytics or form endpoints. */
(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  if (menu && nav) {
    menu.hidden = false;
    document.body.classList.add('js');
    const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); }
    });
  }
  // The original Bold reference alone retains illustrative role filters.
  const locationFilter = document.querySelector('#location');
  const seniority = document.querySelector('#seniority');
  if (locationFilter && seniority) {
    const filterRoles = () => {
      let count = 0;
      document.querySelectorAll('.role').forEach(role => {
        const show = (locationFilter.value === 'all' || role.dataset.location === locationFilter.value)
          && (seniority.value === 'all' || role.dataset.seniority === seniority.value);
        role.hidden = !show; if (show) count++;
      });
      document.querySelector('#role-count').textContent = `${count} illustrative role${count === 1 ? '' : 's'}`;
      document.querySelector('#no-results').hidden = count !== 0;
    };
    [locationFilter, seniority].forEach(s => s.addEventListener('change', filterRoles));
    document.querySelector('.reset-filters')?.addEventListener('click', () => {
      locationFilter.value = seniority.value = 'all'; filterRoles();
    });
  }
  const dialog = document.querySelector('#detail-dialog');
  if (dialog) {
    let opener;
    let slot = document.querySelector('#demo-form-slot');
    if (!slot) { slot = document.createElement('div'); slot.id = 'demo-form-slot'; dialog.querySelector('.close-action').before(slot); }
    const showDetail = (title, copy, route) => {
      opener = document.activeElement;
      document.querySelector('#dialog-title').textContent = title;
      document.querySelector('#dialog-copy').textContent = copy;
      slot.replaceChildren();
      if (route) {
        // The form exists only after this handler is installed; method=dialog is a further no-network fallback.
        const form = document.createElement('form');
        form.className = 'demo-form'; form.method = 'dialog'; form.autocomplete = 'off';
        const signup = route === 'signup';
        form.innerHTML = `${signup ? '' : '<label>Your name<input required maxlength="100" autocomplete="off"></label>'}
          <label>Email address<input type="email" required maxlength="200" autocomplete="off"></label>
          ${signup ? '' : `<label>${route === 'client' ? 'Your hiring plans' : route === 'candidate' ? 'What would you like from your next role?' : 'How can we help?'}<textarea required maxlength="2000"></textarea></label>`}
          <label class="demo-consent"><input type="checkbox" required><span>I understand this is a local demonstration. Please use fictional details.</span></label>
          <button type="submit">${signup ? 'Try signup demo' : 'Try enquiry demo'} ↗</button>
          <p class="demo-feedback" role="status" aria-live="polite"></p>`;
        form.addEventListener('submit', e => {
          e.preventDefault();
          form.reset();
          form.querySelector('.demo-feedback').textContent = signup
            ? 'Signup demo complete. You have not been subscribed. Nothing was sent or saved.'
            : 'Enquiry demo complete. No message was sent or saved. This was a local preview only.';
        });
        slot.append(form);
      }
      dialog.showModal();
      dialog.querySelector('.close-dialog').focus();
    };
    const titles = { candidate: 'Your next role', client: 'Your next hire', general: 'Let’s start a conversation', signup: 'Keep in touch with SJ' };
    document.querySelectorAll('[data-contact],[data-route]').forEach(b => b.addEventListener('click', e => {
      e.preventDefault(); const route = b.dataset.contact || b.dataset.route;
      showDetail(titles[route] || titles.general, 'Form demonstration only. Use fictional details. Nothing is transmitted or persisted.', route);
    }));
    document.querySelectorAll('[data-vacancies]').forEach(b => b.addEventListener('click', () => showDetail('External vacancies — preview', 'The live website will link to SJ’s existing external vacancies website. Its URL has not yet been supplied, so this preview stays here. No live roles or applications are available in this demo.')));
    document.querySelectorAll('[data-market]').forEach(b => b.addEventListener('click', () => showDetail(b.dataset.market, 'Offices in Dubai and Hong Kong; wider market coverage includes Singapore and Saudi Arabia. Market information belongs within the core pages. Dedicated market pages are outside the current scope.')));
    document.querySelectorAll('[data-role]').forEach(b => b.addEventListener('click', () => showDetail(b.dataset.role, 'Illustrative role retained as part of the original Bold design reference, not a live vacancy. The agreed website scope links to an external vacancies website; it does not include on-site role pages, filters or applications.')));
    dialog.querySelectorAll('.close-dialog,.close-action').forEach(b => b.addEventListener('click', () => dialog.close()));
    dialog.addEventListener('click', e => {
      const rect = dialog.getBoundingClientRect();
      if (e.target === dialog && (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom)) dialog.close();
    });
    dialog.addEventListener('keydown', e => {
      if (e.key !== 'Tab') return;
      const focusable = [...dialog.querySelectorAll('button,input,textarea,a[href]')].filter(el => !el.disabled && !el.hidden);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    dialog.addEventListener('close', () => { slot.replaceChildren(); opener?.focus(); });
  }
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const selector = document.querySelector('.market-selector');
  if (selector) {
    const slides = [...selector.querySelectorAll('.market-photo')];
    const controls = selector.querySelector('.market-controls');
    selector.classList.add('enhanced'); controls.hidden = false;
    const select = index => {
      slides.forEach((slide, i) => { slide.hidden = i !== index; slide.classList.remove('switched'); });
      if (!reduceMotion.matches) slides[index].classList.add('switched');
      controls.querySelectorAll('button').forEach((b, i) => b.setAttribute('aria-pressed', String(i === index)));
    };
    controls.querySelectorAll('button').forEach((b, i) => b.addEventListener('click', () => select(i)));
    select(0);
  }
  // Content is visible by default. Each entrance plays once, only while in view.
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('arrived'); observer.unobserve(entry.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
})();
