/* Decorative motion only; all content is visible without JavaScript. */
(() => {
  const team = document.querySelector('#team');
  const control = team?.querySelector('.motion-toggle');
  if (!team || !control || !('IntersectionObserver' in window)) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  let inView = false;
  control.hidden = false;
  team.classList.add('motion-enabled');
  const sync = () => {
    team.classList.toggle('motion-running', inView && !paused && !document.hidden && !preference.matches);
    control.disabled = preference.matches;
    control.setAttribute('aria-pressed', String(paused));
    control.textContent = preference.matches ? 'Motion off · Reduced motion preference' : paused ? 'Resume portrait motion' : 'Pause portrait motion';
  };
  control.addEventListener('click', () => { paused = !paused; sync(); });
  preference.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  new IntersectionObserver(entries => { inView = entries[0].isIntersecting; sync(); }, {threshold:0}).observe(team);
  sync();
})();
