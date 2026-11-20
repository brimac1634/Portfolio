import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './see-more.styles.scss';

const SeeMore = () => {
  const eye = useRef(null);
  const activate = useRef(() => {});

  useEffect(() => {
    const node = eye.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    let frame;
    let timer;
    let busy = false;
    let current = [0, 0];
    let target = [0, 0];
    const visible = () => {
      const rect = node.getBoundingClientRect();
      return !document.hidden && getComputedStyle(node).visibility !== 'hidden' &&
        rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = null;
    };
    const move = () => {
      if (!visible() || reduced.matches) { stop(); return; }
      current = current.map((value, i) => value + (target[i] - value) * 0.12);
      node.style.setProperty('--gaze-x', `${current[0]}px`);
      node.style.setProperty('--gaze-y', `${current[1]}px`);
      if (current.some((value, i) => Math.abs(target[i] - value) > 0.05)) {
        frame = requestAnimationFrame(move);
      } else { frame = null; }
    };
    const pointer = event => {
      if (!fine.matches || reduced.matches || !visible()) return;
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / (rect.width * 1.5);
      const y = (event.clientY - rect.top - rect.height / 2) / (rect.height * 1.5);
      const length = Math.max(1, Math.hypot(x, y));
      target = [x / length * node.clientWidth * 0.13, y / length * node.clientWidth * 0.13];
      if (!frame) frame = requestAnimationFrame(move);
    };
    const reset = () => {
      stop();
      current = target = [0, 0];
      node.style.setProperty('--gaze-x', '0px');
      node.style.setProperty('--gaze-y', '0px');
      node.classList.remove('blinking', 'shimmer', 'activated');
      clearTimeout(timer);
      busy = false;
    };
    const blink = (clicked = false) => {
      if (busy || !visible() || (reduced.matches && !clicked)) return;
      busy = true;
      node.classList.add(reduced.matches ? 'activated' : 'blinking');
      if (clicked && !reduced.matches) node.classList.add('shimmer');
      timer = setTimeout(() => {
        node.classList.remove('blinking', 'shimmer', 'activated');
        busy = false;
      }, clicked ? 950 : 320);
    };
    activate.current = () => blink(true);
    const interval = setInterval(() => blink(), 7000);
    window.addEventListener('pointermove', pointer, { passive: true });
    window.addEventListener('resize', reset);
    window.addEventListener('scroll', reset, { passive: true });
    document.addEventListener('visibilitychange', reset);
    document.documentElement.addEventListener('pointerleave', reset);
    reduced.addEventListener('change', reset);
    return () => {
      reset();
      clearInterval(interval);
      window.removeEventListener('pointermove', pointer);
      window.removeEventListener('resize', reset);
      window.removeEventListener('scroll', reset);
      document.removeEventListener('visibilitychange', reset);
      document.documentElement.removeEventListener('pointerleave', reset);
      reduced.removeEventListener('change', reset);
    };
  }, []);

  return (
    <div className='see-more'>
      <button className='outer-eye' ref={eye} type='button' aria-label='Blink the eye' onClick={() => activate.current()}>
        <span className='eye-surface' aria-hidden='true'>
          <span className='iris'><span className='pupil' /><span className='iris-sweep' /></span>
          <span className='reflection' />
          <span className='eye-lid' />
        </span>
      </button>
      <h2 className='more-line'>see more</h2>
      <div className='options'>
        <Link to='/projects'>projects</Link>
        <Link to='/about'>about</Link>
      </div>
    </div>
  );
};
export default SeeMore;
