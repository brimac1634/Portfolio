import React from 'react';
import './assembling-system.styles.scss';

const paths = {
  client: 'M112 230 L160 202 L212 232',
  cache: 'M252 198 L252 139 L287 119',
  database: 'M292 232 L400 170',
  queue: 'M272 255 L322 284',
  worker: 'M402 284 L460 251',
};
const signals = [
  ['client', 0.3, false], ['cache', 2, false], ['cache', 3, true],
  ['database', 4, false], ['database', 5, true], ['client', 6, true],
  ['cache', 6, false], ['queue', 6.5, false], ['worker', 8, false],
];

const Block = ({ x, y, label, type, children, active }) => (
  <g transform={`translate(${x} ${y})`} className={`system-node ${type}`} style={{ '--active': `${active}s` }}>
    <path className='object-shadow' d='M-48 10 L0 -18 L48 10 L0 38 Z' />
    <path className='face-left' d='M-40 -34 L0 -11 V24 L-40 1 Z' />
    <path className='face-right' d='M0 -11 L40 -34 V1 L0 24 Z' />
    <path className='face-top' d='M-40 -34 L0 -57 L40 -34 L0 -11 Z' />
    {children}
    <text y='52'>{label}</text>
  </g>
);

const AssemblingSystem = ({ className = '', style }) => (
  <div className={`assembling-system ${className}`} style={style} aria-hidden='true'>
    <svg viewBox='0 0 580 390' focusable='false'>
      <path className='scene-ground' d='M20 238 L290 82 L560 238 L290 394 Z' />
      <g className='scene-connections'>{Object.values(paths).map(path => <path key={path} d={path} />)}</g>
      <Block x={327} y={119} label='Cache' type='cache' active={2.8}>
        <path className='detail' d='M-22 -34 L0 -47 L22 -34 L0 -21 Z M-28 -38 L-35 -42 M-15 -46 L-22 -50 M15 -46 L22 -50 M28 -38 L35 -42' />
      </Block>
      <g className='system-node database' style={{ '--active': '4.8s' }}>
        <ellipse className='object-shadow' cx='440' cy='181' rx='45' ry='19' />
        <path className='face-left' d='M403 106 V167 C403 191 477 191 477 167 V106 Z' />
        <path className='face-right' d='M440 123 V185 C462 185 477 177 477 167 V106 Z' />
        <path className='detail' d='M403 128 C403 152 477 152 477 128 M403 149 C403 173 477 173 477 149' />
        <ellipse className='face-top' cx='440' cy='106' rx='37' ry='17' />
        <text x='440' y='76'>Database</text>
      </g>
      <Block x={500} y={251} label='Worker' type='worker' active={8.8}>
        <path className='detail' d='M-20 -34 L-8 -41 M-20 -34 L-8 -27 M20 -34 L8 -41 M20 -34 L8 -27 M-4 -24 L4 -44' />
      </Block>
      <Block x={362} y={284} label='Job queue' type='queue' active={7.3}>
        <path className='detail' d='M-22 -34 L0 -47 L22 -34 L0 -21 Z M-22 -27 L0 -14 L22 -27 M-22 -20 L0 -7 L22 -20' />
      </Block>
      <Block x={252} y={232} label='API' type='api' active={1.1}>
        <path className='detail' d='M-26 -32 L-8 -22 M-26 -23 L-8 -13 M12 -22 L28 -31 M12 -13 L28 -22' />
        <path className='core' d='M-20 -34 L0 -46 L20 -34 L0 -22 Z' />
      </Block>
      <Block x={72} y={230} label='Client' type='client' active={6.8}>
        <path className='screen' d='M-25 -34 L0 -49 L25 -34 L0 -19 Z' />
        <path className='detail' d='M-12 -34 L1 -42 M-6 -30 L8 -38' />
      </Block>
      {signals.map(([route, delay, reverse], i) => <circle key={i} r='3' className={`moving-signal ${reverse ? 'return-signal' : ''}`} style={{ offsetPath: `path('${paths[route]}')`, animationDelay: `${delay}s`, '--from': reverse ? '100%' : '0%', '--to': reverse ? '0%' : '100%' }} />)}
    </svg>
  </div>
);

export default AssemblingSystem;
