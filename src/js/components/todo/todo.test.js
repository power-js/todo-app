import Power from '@power-js/core';
import Todo from './todo';
import { shallow } from '../../../../tests/shallow';

describe('todo', () => {
  it('should render the proper html', () => {
    const container = shallow(<Todo total={1} />);

    expect(container).toMatchSnapshot();
  });

  it('should container the correct number of todo items', () => {
    const container = shallow(<Todo total={10} />);
    expect(container.querySelector('todoitems').children.length).toEqual(10);
  });
});
