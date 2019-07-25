import React from 'react';
import { Text } from 'react-native';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

/**
 * 组件引入
 */
import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';


/**
 * 写故事咯
 */
storiesOf('Welcome', module).addParameters({
    backgrounds: [
        { name: 'twitter', value: '#00aced', default: true },
        { name: 'facebook', value: '#3b5998' },
    ],
}).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => {
          const name = text('Name', 'ferryvip');
          const age = number('Age', 18);
          const content = `我是 ${name} and I'm ${age} years old.`;
          return (<Button onPress={action('clicked-text', {name: 'option'})}>
              <Text>Hello , {content}</Text>
          </Button>)
  })
  .add('with some emoji', () => (
    <Button onPress={linkTo('to Storybook')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ),{notes: 'emoji 按钮 😀 😎 👍 💯'});
