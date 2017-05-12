import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { boolean, text, withKnobs } from '@kadira/storybook-addon-knobs';

const inputTextStyles = require('../src/assets/sass/input-text.scss');

const stories: any = storiesOf('Form inputs', module);
stories.addDecorator(withKnobs);

stories.add('Text default', () => (
  <div style={{width: 250}}>
    <input
      type="text"
      disabled={boolean('Disabled', false)}
      onKeyDown={action('keydown')}
      onClick={action('click')}
      value={text('Value', 'Input text value')}
      placeholder={text('Placeholder', 'Hint text')}
      className={inputTextStyles.default} />
  </div>
));

stories.add('Text without text', () => (
    <div style={{width: 250}}>
      <input
        type="text"
        disabled={boolean('Disabled', false)}
        onKeyDown={action('keydown')}
        onClick={action('click')}
        value={text('Value', '')}
        placeholder={text('Placeholder', 'Hint text')}
        className={inputTextStyles.default} />
    </div>
 ));

stories.add('Text with error', () => (
    <div style={{width: 250}}>
      <input
        type="text"
        disabled={boolean('Disabled', false)}
        onKeyDown={action('keydown')}
        onClick={action('click')}
        value={text('Value', 'Input text value')}
        placeholder={text('Placeholder', 'Hint text')}
        title={text('Error message', 'There is an error')}
        className={inputTextStyles.error} />
    </div>
  ));
