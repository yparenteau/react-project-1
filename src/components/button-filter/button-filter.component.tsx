import * as classNames from 'classnames';
import * as React from 'react';

const DEFAULT_TITLE = 'Refresh';
const buttonStyles = require('../../assets/sass/button.scss');
const filterStyles = require('./button-filter.scss');

export const ButtonFilter: React.StatelessComponent<React.HTMLProps<HTMLButtonElement>> = props => (
  <button
    {...props}
    className={classNames(buttonStyles.default, filterStyles.button)}
    title={props.title || DEFAULT_TITLE}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17">
      <path fill="#D0D3D6" fill-rule="evenodd" d="M6.054 16.677a.793.793 0 0 1-.793-.793V6.94L.232 1.911A.793.793 0 0 1 .792.557h14.416a.793.793 0 0 1 .56 1.354l-4.963 4.96v5.053c0 .21-.083.411-.233.56l-3.958 3.96a.791.791 0 0 1-.56.233zM2.707 2.144L6.614 6.05c.149.149.233.351.233.56v7.358l2.372-2.374V6.544c0-.21.084-.412.233-.56l3.841-3.84H2.707z"/>
    </svg>
  </button>
);
