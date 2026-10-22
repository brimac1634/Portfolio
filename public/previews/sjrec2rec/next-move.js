/* Decorative motion and local market selection only. No network or storage. */
(() => {
  const buttons = [...document.querySelectorAll('[data-location]')];
  const pins = [...document.querySelectorAll('[data-pin]')];
  let selected = 'dubai';
  const highlight = key => pins.forEach(pin => pin.classList.toggle('active', pin.dataset.pin === key));
  buttons.forEach(button => {
    const key = button.dataset.location;
    button.addEventListener('pointerenter', () => highlight(key));
    button.addEventListener('focus', () => highlight(key));
    button.addEventListener('pointerleave', () => highlight(selected));
    button.addEventListener('blur', () => highlight(selected));
    button.addEventListener('click', () => {
      selected = key;
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      document.querySelector('.selection-note').textContent = `${button.querySelector('span').textContent}: ${document.getElementById(`copy-${key}`).textContent}`;
      highlight(key);
    });
  });
  buttons[0].setAttribute('aria-pressed', 'true');
  highlight(selected);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const coarse = matchMedia('(pointer: coarse)');
  const hero = document.querySelector('.move-hero');
  const layers = [...document.querySelectorAll('[data-depth]')];
  const scrollArt = [...document.querySelectorAll('[data-scroll-art]')];
  const visible = new Set();
  let x = 0, y = 0, targetX = 0, targetY = 0, frame = 0;
  const enabled = () => !reduce.matches && !coarse.matches && !document.hidden;
  const reset = () => {
    cancelAnimationFrame(frame); frame = 0; x = y = targetX = targetY = 0;
    [...layers, ...scrollArt].forEach(el => el.style.removeProperty('transform'));
  };
  const tick = () => {
    frame = 0;
    if (!enabled()) return;
    x += (targetX - x) * .14; y += (targetY - y) * .14;
    if (Math.abs(targetX - x) < .001) x = targetX;
    if (Math.abs(targetY - y) < .001) y = targetY;
    if (visible.has(hero)) layers.forEach(el => { const depth = Number(el.dataset.depth); el.style.transform = `translate3d(${(x * depth).toFixed(2)}px,${(y * depth).toFixed(2)}px,0)`; });
    scrollArt.forEach(el => {
      if (!visible.has(el.parentElement)) return;
      const rect = el.parentElement.getBoundingClientRect();
      const offset = Math.max(-24, Math.min(24, (innerHeight / 2 - rect.top - rect.height / 2) * .05));
      el.style.transform = `translateY(${offset.toFixed(2)}px)`;
    });
    if (visible.has(hero) && (Math.abs(targetX - x) > .001 || Math.abs(targetY - y) > .001)) schedule();
  };
  const schedule = () => { if (enabled() && visible.size && !frame) frame = requestAnimationFrame(tick); };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visible.add(entry.target);
      else { visible.delete(entry.target); if (entry.target === hero) { x = y = targetX = targetY = 0; layers.forEach(el => el.style.removeProperty('transform')); } }
    });
    if (!visible.size) { cancelAnimationFrame(frame); frame = 0; } else schedule();
  });
  [hero, ...scrollArt.map(el => el.parentElement)].forEach(el => observer.observe(el));
  hero.addEventListener('pointermove', event => {
    if (!enabled()) return;
    const rect = hero.getBoundingClientRect();
    targetX = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
    targetY = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
    schedule();
  });
  hero.addEventListener('pointerleave', () => { targetX = targetY = 0; schedule(); });
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  const refresh = () => { reset(); schedule(); };
  reduce.addEventListener('change', refresh);
  coarse.addEventListener('change', refresh);
  document.addEventListener('visibilitychange', refresh);
})();
