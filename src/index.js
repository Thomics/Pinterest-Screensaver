import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

registerServiceWorker();