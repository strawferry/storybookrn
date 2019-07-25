import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import './rn-addons';

addDecorator(withKnobs);
addDecorator(withBackgrounds);
// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

import {name as appName} from './../app.json';
// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
