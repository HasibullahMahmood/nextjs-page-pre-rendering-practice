import { Component } from 'react';
import Header from './header';

class Layout extends Component {
	render() {
		return (
			<>
				<Header />
				<main>{this.props.children}</main>
			</>
		);
	}
}

export default Layout;
