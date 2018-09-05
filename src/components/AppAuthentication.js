import React, { Component } from 'react';
import appVariables from '../config/config';
import axios from 'axios';

class AppAuthentication extends Component {

	connect() {
		axios({
			method:'get',
			url:'https://03b974a7-1992-4c80-af3f-92b0f84936cb.mock.pstmn.io',
			responseType:'stream'
		  })
			.then(function(response) {
			
				console.log(response);
		  });
	}
  
	render() {
		let appAuth = appVariables.appVariables,
			url = `${appAuth.apiDomain}/oauth/?response_type=code&redirect_uri=${appAuth.domain}/public/templates/app.authorized.html&code=:code/&client_id=${appAuth.clientID}&scope=read_public&state=appconnected`;

			this.connect();
		return (
			<a href={url} title="Connect app to Pinterest.">
				Connect your Pinterest
			</a>
		);
	}
}

export default AppAuthentication;