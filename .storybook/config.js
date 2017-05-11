import * as React from 'react';
import backgrounds from "react-storybook-addon-backgrounds";
import { configure, addDecorator } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import {setAddon} from "@kadira/storybook/dist/client/index";

import '../src/assets/fonts/akkurat/akkurat.scss';
import '../src/assets/fonts/akkurat-bold/akkurat-bold.scss';
import '../src/assets/sass/global.scss';
const a = require('../src/assets/sass/variables.scss');

addDecorator(story => (
  <div style={{padding: 15}}>{story()}</div>
));

addDecorator(backgrounds([
  { name: 'gray lighter', value: '#fff' },
  { name: 'gray-light', value: '#d0d3d6' },
  { name: 'gray', value: '#2b3036', default: true },
  { name: 'gray-dark', value: '#262b2f' },
  { name: 'gray-darker', value: '#16181b' },
  { name: 'primary', value: '#f4bd0c' },
  { name: 'brand', value: '#83744c' },
  ])
);

setAddon(infoAddon);

const required = require.context('../stories', true, /stories\.tsx$/);

function loadStories() {
  required.keys().forEach(required)
}

configure(loadStories, module);
