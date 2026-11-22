import React from 'react';
import EventSystem from '../../components/event-system/event-system.component';
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
    <div className='about-system'><EventSystem /></div>
    <div className='about-contact'>
      <p className='interest'>Have an interesting engineering challenge, or want to compare notes? <a href='mailto:brimac1634@gmail.com'>Let’s talk.</a></p>
      <div className='contact-row'><span>Email</span><a href='mailto:brimac1634@gmail.com'>Brimac1634@gmail.com</a></div>
      <div className='contact-row'><span>Phone</span><a href='tel:+852-6708-1340'>+852-6708-1340</a></div>
    </div>
  </main>
);

export default About;
