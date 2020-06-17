import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, actions, configureActions } from '@storybook/addon-actions';
import { withConsole } from '@storybook/addon-console';

import Button from './button';

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);

stories.add('knobs', () => (
    <button disabled={boolean('不可用', false)} >
        {text('文案', '牛逼的knobs')}
    </button>
));

stories.add('as dynamic variables', () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);

    const content = `I am ${name} and I'm ${age} years old.`;
    return (<div>{content}</div>);
});

storiesOf('Actions', module).add('default view', () => (
    <button onClick={action('button-click')}>Hello World!</button>
));

const eventsFromNames = actions('onClick', 'onMouseOver');

// This will lead to { onClick: action('clicked'), ... }
const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' });

storiesOf('Button', module)
    .add('default view', () => <button {...eventsFromNames}>Hello World!</button>)
    .add('default view, different actions', () => (
        <button {...eventsFromObject}>Hello World!</button>
    ));
storiesOf('withConsole', module)
    .addDecorator((storyFn, consos) => withConsole()(storyFn)(consos))
    .add('with Log', () => <button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</button>)
    .add('with Warning', () => <button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</button>)
    .add('with Error', () => <button onClick={() => console.error('Test Error')}>Error Button</button>)
    .add('with Uncatched Error', () =>
        <button onClick={() => console.log('Data:', T.buu.foo)}>Throw Button</button>
    )