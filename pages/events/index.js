import { Component } from 'react';
import { withRouter } from 'next/router';

import EventsSearch from '../../components/pages-components/events/events-search';
import EventsList from '../../components/common/events-list/events-list';
import { getAllEvents } from '../../dummyData';

class EventsPage extends Component {
	searchHandler = (year, month) => {
		const path = `/events/${year}/${month}`;
		this.props.router.push(path);
	};

	render() {
		const events = getAllEvents();

		return (
			<div>
				<EventsSearch onSearch={this.searchHandler} />
				<EventsList items={events} />
			</div>
		);
	}
}

export default withRouter(EventsPage);
