import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, actions, configureActions } from '@storybook/addon-actions';

import Button from './button';

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);

stories.add('button', () => (
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

storiesOf('Button', module).add('default view', () => (
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
