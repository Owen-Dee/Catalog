import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Hello from './views/hello';
import StoreConfig from './store';

const store = StoreConfig();

ReactDOM.render(
	<Provider store={store}>
		<Hello />
	</Provider>,
	document.querySelector('#app')
);