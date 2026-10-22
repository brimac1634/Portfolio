/* Local Bold motion enhancement; content is readable without this script. */
(() => {
  const body = document.body;
  const toggle = document.querySelector('.motion-toggle');
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const regions = [...document.querySelectorAll('[data-motion-region]')];
  let paused = false;
  const sync = () => {
    body.classList.toggle('motion-paused', paused || preference.matches);
    if (preference.matches) document.querySelectorAll('.bold-entering').forEach(el => el.classList.remove('bold-entering'));
    toggle.hidden = preference.matches;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Resume motion' : 'Pause motion';
  };
  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  preference.addEventListener('change', sync);
  document.addEventListener('visibilitychange', () => body.classList.toggle('motion-hidden', document.hidden));
  body.classList.toggle('motion-hidden', document.hidden);
  body.classList.add('motion-ready');
  sync();
  if (!('IntersectionObserver' in window)) {
    regions.forEach(region => region.classList.add('motion-visible'));
    return;
  }
  const motion = new IntersectionObserver(entries => entries.forEach(entry => {
    entry.target.classList.toggle('motion-visible', entry.isIntersecting);
  }));
  regions.forEach(region => motion.observe(region));
  const entrances = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('bold-entered');
    if (!preference.matches) {
      const section = entry.target;
      section.classList.add('bold-entering');
      const animations = section.getAnimations({ subtree: true }).filter(animation => animation.animationName === 'bold-enter');
      Promise.allSettled(animations.map(animation => animation.finished)).then(() => section.classList.remove('bold-entering'));
    }
    entrances.unobserve(entry.target);
  }), { threshold: 0, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('main > .new-section').forEach(section => entrances.observe(section));
})();
