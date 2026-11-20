import React from 'react';

import './card.styles.scss';

const CardThree = () => (
  <div className='card'>
    <p className='card-label'>Capabilities</p>
    <div className='text-container'>
      <div className='text'>
        <h2>Toolkit highlights</h2>
        <dl>
          <div><dt>Languages</dt><dd>TypeScript · Python · C# · Rust</dd></div>
          <div><dt>Services</dt><dd>Node.js · NestJS · FastAPI · .NET</dd></div>
          <div><dt>Cloud &amp; infrastructure</dt><dd>AWS · GCP · Terraform · Kubernetes</dd></div>
          <div><dt>Data &amp; messaging</dt><dd>PostgreSQL · MongoDB · Redis · BigQuery · Pub/Sub</dd></div>
          <div><dt>AI &amp; integration</dt><dd>MCP · Semantic search · RAG</dd></div>
          <div><dt>Interfaces</dt><dd>React · Next.js · Flutter</dd></div>
        </dl>
      </div>
    </div>
  </div>
);

export default CardThree;
