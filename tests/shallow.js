import { render } from '@power-js/core';

export const shallow = function(component) {
  const container = document.createElement('div');

  render(component, container);

  return container.children[0];
};
