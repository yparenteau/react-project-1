import * as classNames from 'classnames';
import * as React from 'react';

const DEFAULT_TITLE = 'Refresh';
const buttonStyles = require('../../assets/sass/button.scss');
const refreshStyles = require('./button-refresh.scss');

export const ButtonRefresh: React.StatelessComponent<React.HTMLProps<HTMLButtonElement>> = props => (
  <button
    {...props}
    className={classNames(buttonStyles.default, refreshStyles.button)}
    title={props.title || DEFAULT_TITLE}>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
      <path fill="#D0D3D6" fill-rule="evenodd" d="M10.056 1.584A5.977 5.977 0 0 0 6 0C2.692 0 0 2.692 0 6s2.692 6 6 6c1.651 0 3.15-.67 4.235-1.754L9.048 9.058A4.304 4.304 0 0 1 6 10.32 4.325 4.325 0 0 1 1.68 6 4.325 4.325 0 0 1 6 1.68c1.1 0 2.104.414 2.868 1.092L7.44 4.2h4.08V.12l-1.464 1.464z"/>
    </svg>
  </button>
);
