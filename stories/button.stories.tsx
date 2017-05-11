import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { boolean, text, withKnobs } from '@kadira/storybook-addon-knobs';

const styles = require('../src/assets/sass/button.scss');

const stories: any = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.addWithInfo('default',
  'Disabled state is missing in the UX. Making it gray temporary.',
  () => (
    <button
      disabled={boolean('Disabled', false)}
      onClick={action('button-click')}
      className={styles.btn}
    >{text('Label', 'Button label')}
    </button>
));
