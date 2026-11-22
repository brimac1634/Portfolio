import React from 'react';
import './event-system.styles.scss';

const routes = [
  'M132 265 L205 223 L265 258',
  'M305 235 L350 209 L350 142',
  'M315 258 L424 195',
  'M300 280 L365 318 L435 278',
];

const Block = ({ x, y, children, className = '' }) => (
  <g className={`event-block ${className}`} transform={`translate(${x} ${y})`}>
    <path className='event-shadow' d='M-49 8 L0 -20 L49 8 L0 36 Z' />
    <path className='event-left' d='M-40 -35 L0 -12 V24 L-40 1 Z' />
    <path className='event-right' d='M0 -12 L40 -35 V1 L0 24 Z' />
    <path className='event-top' d='M-40 -35 L0 -58 L40 -35 L0 -12 Z' />
    {children}
  </g>
);

const EventSystem = () => (
  <div className='event-system' aria-hidden='true'>
    <svg viewBox='0 0 580 400' focusable='false'>
      <path className='event-ground' d='M25 264 L300 105 L555 252 L280 411 Z' />
      <g className='event-wires'>{routes.map(path => <path key={path} d={path} />)}</g>
      <Block x={350} y={120} className='event-consumer'>
        <path className='event-icon' d='M-22 -36 L0 -49 L22 -36 L0 -23 Z M-22 -36 L0 -34 L22 -36' />
        <text x='0' y='49'>Notifications</text>
      </Block>
      <g className='event-consumer event-store'>
        <ellipse className='event-shadow' cx='464' cy='199' rx='43' ry='19' />
        <path className='event-left' d='M427 127 V185 C427 209 501 209 501 185 V127 Z' />
        <path className='event-right' d='M464 143 V203 C486 203 501 195 501 185 V127 Z' />
        <path className='event-icon' d='M427 147 C427 171 501 171 501 147 M427 168 C427 192 501 192 501 168' />
        <ellipse className='event-top' cx='464' cy='127' rx='37' ry='17' />
        <text x='515' y='216'>Storage</text>
      </g>
      <Block x={475} y={277} className='event-consumer event-analytics'>
        <path className='event-icon' d='M-22 -35 L0 -22 L24 -36 M-13 -30 V-41 M-2 -24 V-43 M10 -29 V-49' />
        <text x='0' y='49'>Analytics</text>
      </Block>
      <g className='event-hub'>
        <path className='event-shadow' d='M215 266 L280 228 L345 266 L280 304 Z' />
        <path className='event-left' d='M225 204 L280 236 V284 L225 252 Z' />
        <path className='event-right' d='M280 236 L335 204 V252 L280 284 Z' />
        <path className='event-top' d='M225 204 L280 172 L335 204 L280 236 Z' />
        <path className='event-bus-core' d='M246 204 L280 184 L314 204 L280 224 Z' />
        <path className='event-icon' d='M239 232 L265 247 M239 241 L265 256 M293 247 L321 231 M293 256 L321 240' />
        <text x='280' y='324'>Event bus</text>
      </g>
      <Block x={92} y={263}>
        <path className='event-icon' d='M-22 -36 L0 -49 L22 -36 L0 -23 Z M-10 -36 L0 -30 L11 -36' />
        <text x='0' y='49'>Producer</text>
      </Block>
      {routes.map((path, index) => <circle key={path} r='3' className={`event-pulse ${index === 0 ? 'event-inbound' : 'event-outbound'}`} style={{ offsetPath: `path('${path}')` }} />)}
    </svg>
  </div>
);

export default EventSystem;
