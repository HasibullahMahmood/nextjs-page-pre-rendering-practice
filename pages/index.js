import { Component } from 'react';

import EventsList from '../components/common/events-list/events-list';
import { getFeaturedEvents } from '../dummyData';

class HomePage extends Component {
	render() {
		const featuredEvents = getFeaturedEvents();
		return (
			<div>
				<h1>Home Page</h1>
				<EventsList items={featuredEvents} />
			</div>
		);
	}
}

export default HomePage;
