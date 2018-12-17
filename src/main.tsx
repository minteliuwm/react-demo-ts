import React from 'react';
import ReactDom from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './scss/index.scss';

import App from './routes/app';

ReactDom.render((
	<BrowserRouter>
		<Route path="/" component={App} />
	</BrowserRouter>
), document.getElementById('app'));
