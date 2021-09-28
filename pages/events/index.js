import { Component } from 'react';
import { withRouter } from 'next/router';

import EventsSearch from '../../components/pages-components/events/events-search';
import EventsList from '../../components/common/events-list/events-list';
import { fetchAllEvents, getAllEvents } from '../../helpers/api-util';

class EventsPage extends Component {
	searchHandler = (year, month) => {
		const path = `/events/${year}/${month}`;
		this.props.router.push(path);
	};

	render() {
		const { events } = this.props;

		return (
			<div>
				<EventsSearch onSearch={this.searchHandler} />
				<EventsList items={events} />
			</div>
		);
	}
}

export async function getStaticProps() {
	const events = await fetchAllEvents();
	return {
		props: {
			events,
		},
		revalidate: 30,
	};
}

export default withRouter(EventsPage);
