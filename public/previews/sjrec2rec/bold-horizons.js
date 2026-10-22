/* Fixed navigation enhancement, isolated to Bold Horizons. */
(() => {
  const header = document.querySelector('.masthead');
  const hero = document.querySelector('.horizon-hero');
  const strip = document.querySelector('.review-strip');
  const nav = document.querySelector('#navigation');
  if (!header || !hero) return;
  const root = document.documentElement;
  let frame;
  const update = () => {
    frame = null;
    const top = Math.max(0, strip?.getBoundingClientRect().bottom || 0);
    root.style.setProperty('--header-top', `${top}px`);
    // Expanding the mobile menu must not resize the hero or alter anchor offsets.
    if (!nav?.classList.contains('open')) root.style.setProperty('--header-height', `${header.offsetHeight}px`);
    header.classList.toggle('is-scrolled', hero.getBoundingClientRect().bottom <= top + header.offsetHeight);
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  addEventListener('scroll', schedule, {passive:true});
  addEventListener('resize', schedule);
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(header);
  document.addEventListener('focusin', event => {
    if (header.contains(event.target) || event.target.closest('dialog,.skip')) return;
    const rect = event.target.getBoundingClientRect();
    const bottom = header.getBoundingClientRect().bottom;
    if (rect.top < bottom + 16 && rect.bottom > 0) scrollBy({top:rect.top - bottom - 24,behavior:'instant'});
  });
  update();
})();
