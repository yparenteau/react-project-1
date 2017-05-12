import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import * as Select from 'react-select';

const stories: any = storiesOf('Select', module);
stories.addDecorator(withKnobs);

const options: Select.Option[] = [
  {label: 'Option 1', value: 'value-1'},
  {label: 'Option 2', value: 'value-2'},
  {label: 'Option 3', value: 'value-3'},
  {label: 'Option 4', value: 'value-4'}
];

stories.add('Simple dropdown (not searchable)', () => (
  <div>
    <div style={{width: 250}}>
      <Select
        name="form-field-name"
        value='value-1'
        options={options}
        clearable={false}
        searchable={false}
        onChange={action('onChange')}
      />
    </div>
    <br />
    <div style={{width: 250}}>
      <Select
        name="form-field-name"
        options={options}
        clearable={false}
        searchable={false}
        onChange={action('onChange')}
      />
    </div>
    <br />
    <div style={{width: 250}}>
      <Select
        name="form-field-name"
        options={options}
        clearable={false}
        searchable={false}
        disabled={true}
        onChange={action('onChange')}
      />
    </div>
    <br />
    <div style={{width: 250}}>
      <Select
        ref={forceOpen}
        name="form-field-name"
        options={options}
        clearable={false}
        searchable={false}
        onChange={action('onChange')}
      />
    </div>
  </div>

));

function forceOpen(ref: any) {
  if (ref) {
    ref.setState({isOpen: true});
  };
}
