import React from 'react';
import './about.styles.scss';

const About = () => (
  <main className='about'>
    <div className='about-story'>
      <p className='about-eyebrow'>Brian MacPherson · Software engineer · Hong Kong</p>
      <h1 className='intro'>I build products and the systems behind them.</h1>
      <p className='details'>
        My work spans product engineering, systems architecture, and cloud infrastructure.
        I enjoy connecting those pieces: understanding the problem, designing the system,
        and taking it through to production.
      </p>
      <p className='details'>
        As co-founder and CTO of <a href='https://noblewills.com' target='_blank' rel='noopener noreferrer'>NobleWills</a>,
        I work across the product and the technology that supports it. That shapes how I
        approach engineering: make things clear for users, keep systems maintainable,
        and choose solutions that fit the problem.
      </p>
    </div>
    <div className='about-system' aria-hidden='true'>
      <svg viewBox='0 0 360 450' focusable='false'>
        <path className='system-connection' d='M180 116 V190 M180 264 V338' />
        <g className='system-layer'>
          <rect x='40' y='30' width='280' height='86' rx='12' />
          <rect x='62' y='53' width='42' height='36' rx='3' />
          <path d='M62 63 H104 M72 73 H94 M72 80 H87' />
          <text x='126' y='80'>Interface</text>
        </g>
        <g className='system-layer'>
          <rect x='40' y='190' width='280' height='74' rx='12' />
          <path d='M73 213 L63 227 L73 241 M93 213 L103 227 L93 241 M86 214 L80 240' />
          <text x='126' y='234'>Services</text>
        </g>
        <g className='system-layer'>
          <rect x='40' y='338' width='280' height='82' rx='12' />
          <ellipse cx='83' cy='366' rx='21' ry='7' />
          <path d='M62 366 V391 C62 400 104 400 104 391 V366 M62 379 C62 388 104 388 104 379' />
          <text x='126' y='387'>Data</text>
        </g>
        <circle className='system-signal' cx='180' cy='116' r='4' />
        <circle className='system-junction' cx='180' cy='153' r='3' />
        <circle className='system-junction' cx='180' cy='301' r='3' />
      </svg>
    </div>
    <div className='about-contact'>
      <p className='interest'>Have an interesting engineering challenge, or want to compare notes? <a href='mailto:brimac1634@gmail.com'>Let’s talk.</a></p>
      <div className='contact-row'><span>Email</span><a href='mailto:brimac1634@gmail.com'>Brimac1634@gmail.com</a></div>
      <div className='contact-row'><span>Phone</span><a href='tel:+852-6708-1340'>+852-6708-1340</a></div>
    </div>
  </main>
);

export default About;
