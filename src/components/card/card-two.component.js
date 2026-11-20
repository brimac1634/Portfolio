import React from 'react';

import './card.styles.scss';

const CardTwo = () => (
  <div className='card'>
    <p className='card-label'>Experience</p>
    <div className='text-container'>
      <div className='text'>
        <h2>Engineering in practice</h2>
        <dl>
          <div><dt>Systems &amp; services</dt><dd>APIs, microservices, and real-time communication.</dd></div>
          <div><dt>Cloud &amp; infrastructure</dt><dd>Infrastructure as code, containers, and automated delivery.</dd></div>
          <div><dt>Data &amp; AI</dt><dd>Data pipelines, analytics, semantic search, and AI integrations.</dd></div>
          <div><dt>Production quality</dt><dd>Automated testing, load testing, and maintainable systems.</dd></div>
        </dl>
      </div>
    </div>
  </div>
);

export default CardTwo;
