import * as classNames from 'classnames';
import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { boolean, object, text, withKnobs } from '@kadira/storybook-addon-knobs';
import { ButtonRefresh } from '../src/components/button-refresh/button-refresh.component';
import { ButtonDownload } from '../src/components/button-download/button-download.component';
import { ButtonFilter } from '../src/components/button-filter/button-filter.component';
import { ButtonUpload } from '../src/components/button-upload/button-upload.component';

const buttonStyles = require('../src/assets/sass/button.scss');

const stories: any = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

const styles = {
  width: 150
};

stories.addWithInfo('Default (only button class)',
  'Disabled state is missing in the VD. Making it 50% opacity for now.',
  () => (
    <button
      disabled={boolean('Disabled', false)}
      onClick={action('button-click')}
      style={object('Style', styles)}
      className={buttonStyles.default}
    >{text('Label', 'Button label')}
    </button>
));

stories.addWithInfo('Primary',
  'Hover state is the same as the normal state in the VD.',
  () => (
    <button
      disabled={boolean('Disabled', false)}
      onClick={action('button-click')}
      style={object('Style', styles)}
      className={classNames(buttonStyles.default, buttonStyles.primary)}
    >{text('Label', 'Button label')}
    </button>
  ));

stories.addWithInfo('Icons only',
  'Hover state is the same as the normal state in the VD.',
  () => (
    <div style={{display: 'flex'}}>
      <ButtonRefresh style={{'margin-left': 15}}
                     onClick={action('button-click')}
                     title={text('Label', '')}
                     disabled={boolean('Disabled', false)} />

      <ButtonDownload style={{'margin-left': 15}}
                      onClick={action('button-click')}
                      title={text('Label', '')}
                      disabled={boolean('Disabled', false)} />

      <ButtonFilter style={{'margin-left': 15}}
                    onClick={action('button-click')}
                    title={text('Label', '')}
                    disabled={boolean('Disabled', false)} />

      <ButtonUpload style={{'margin-left': 15}}
                    onClick={action('button-click')}
                    title={text('Label', '')}
                    disabled={boolean('Disabled', false)} />
    </div>
  ));
