import React from 'react';

export default {
  title: 'Backgrounds',
}

export const noBackgrounds = () => (
  <button>Click me</button>
);
noBackgrounds.story = {
  parameters: {
    backgrounds: [],
  },
};

export const disabledBackgrounds = () => (
  <button>Click me</button>
);
disabledBackgrounds.story = {
  parameters: {
    backgrounds: { disabled: true },
  },
};