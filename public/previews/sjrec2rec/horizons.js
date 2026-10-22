/* Optional motion only: content never depends on enhancement. */
(() => {
  const hero = document.querySelector('.horizon-hero');
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (!hero || !('IntersectionObserver' in window)) return;
  let heroVisible = false;
  const updateHero = () => hero.classList.toggle('hero-running', heroVisible && !document.hidden && !preference.matches);
  const heroObserver = new IntersectionObserver(entries => {
    heroVisible = entries[0].isIntersecting;
    updateHero();
  });
  heroObserver.observe(hero);
  const delayedEntrances = document.body.classList.contains('bold-horizons');
  let entrances;
  const enter = entries => {
    entries.forEach(({target, isIntersecting}) => {
      if (!isIntersecting) return;
      target.dataset.entered = 'true';
      if (!preference.matches) target.classList.add('arriving');
      entrances.unobserve(target);
    });
  };
  const observeEntrances = () => {
    entrances?.disconnect();
    entrances = new IntersectionObserver(enter, delayedEntrances
      ? {threshold:0, rootMargin:`0px 0px -${Math.round(innerHeight * .15)}px 0px`}
      : {threshold:.08});
    document.querySelectorAll('[data-enter]:not([data-entered])').forEach(el => entrances.observe(el));
  };
  observeEntrances();
  if (delayedEntrances) addEventListener('resize', observeEntrances);
  document.addEventListener('visibilitychange', updateHero);
  preference.addEventListener('change', () => {
    if (preference.matches) document.querySelectorAll('.arriving').forEach(el => el.classList.remove('arriving'));
    updateHero();
  });
})();
