import Power, { render } from '@power-js/core';
import Todo from './js/components/todo/todo';

import './style/app.scss';

render(<Todo total={1000} />, document.getElementById('app'));
