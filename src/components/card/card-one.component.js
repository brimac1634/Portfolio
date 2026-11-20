import React from 'react';

import './card.styles.scss';

const CardOne = () => (
  <div className='card'>
    <p className='card-label'>Introduction</p>
    <div className='text-container'>
      <div className='text'>
        <h2>Brian MacPherson</h2>
        <p className='role'>Software Engineer</p>
        <p>Experience across senior software engineering, quantitative engineering, and technical leadership.</p>
        <p>I design software systems, build cloud infrastructure, and take products from concept through production.</p>
        <p className='supporting-line'>Systems Architecture · Infrastructure · Product Engineering</p>
      </div>
    </div>
  </div>
);

export default CardOne;
