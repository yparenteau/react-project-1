import * as classNames from 'classnames';
import * as React from 'react';

const DEFAULT_TITLE = 'Download';
const buttonStyles = require('../../assets/sass/button.scss');
const downloadStyles = require('./button-download.scss');

export const ButtonDownload: React.StatelessComponent<React.HTMLProps<HTMLButtonElement>> = props => (
  <button
    {...props}
    className={classNames(buttonStyles.default, downloadStyles.button)}
    title={props.title || DEFAULT_TITLE}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17">
      <g fill="#D0D3D6" fill-rule="evenodd">
        <path d="M13.89 10.52v3.928H2.11V10.52H.144v5.89h15.71v-5.89z"/>
        <path d="M6.036 12.484h3.928v-5.89h1.963L8 .701 4.073 6.593h1.963z"/>
      </g>
    </svg>
  </button>
);
