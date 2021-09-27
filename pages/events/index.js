import { Component } from 'react';

import EventsSearch from '../../components/pages-components/events/events-search';
import EventsList from '../../components/common/events-list/events-list';
import { getAllEvents } from '../../dummyData';

class EventsPage extends Component {
	render() {
		const events = getAllEvents();
		return (
			<div>
				<EventsSearch />
				<EventsList items={events} />
			</div>
		);
	}
}

export default EventsPage;
