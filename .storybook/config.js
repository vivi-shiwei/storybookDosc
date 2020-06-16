import { configure,addDecorator,addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { setConsoleOptions,withConsole  } from '@storybook/addon-console';
addDecorator(withInfo);
addParameters({
  viewport: { defaultViewport: 'iphone6' },
});
const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addParameters({
  a11y: {
    // ... axe options
    element: '#root', // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
});

addParameters({
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ], 
});
addDecorator((storyFn, conso) => withConsole()(storyFn)(conso));