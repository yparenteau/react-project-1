import * as React from 'react';

const DEFAULT_TITLE = 'Upload';
const styles = require('./button-upload.scss');

export const ButtonUpload: React.StatelessComponent<React.HTMLProps<HTMLButtonElement>> = props => (
  <button
    {...props}
    className={styles.default}
    title={props.title || DEFAULT_TITLE}>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="19" viewBox="0 0 18 19">
      <defs>
        <path id="a" d="M10 16h4v-5h2l-4-6-4 6h2z"/>
        <mask id="b" width="10" height="13" x="-1" y="-1">
          <path fill="#fff" d="M7 4h10v13H7z"/>
          <use xlinkHref="#a"/>
        </mask>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="#D0D3D6" d="M6.1.557H0v14h10v-10.5L6.933.557H6.1zm2.903 13.03H1V1.557h5v3.046h3.003v8.984z"/>
        <g transform="matrix(1 0 0 -1 0 21.557)">
          <use fill="#D0D3D6" xlinkHref="#a"/>
          <use stroke="#15181B" stroke-width="2" mask="url(#b)" xlinkHref="#a"/>
        </g>
      </g>
    </svg>
  </button>
);
