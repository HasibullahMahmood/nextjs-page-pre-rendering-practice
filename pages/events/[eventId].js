import { Component } from 'react';
import { withRouter } from 'next/router';

import { getEventById } from '../../dummyData';
import EventSummary from '../../components/pages/event-detail/event-summary';
import EventLogistics from '../../components/pages/event-detail/event-logistics';
import EventContent from '../../components/pages/event-detail/event-content';

class EventDetailPage extends Component {
	render() {
		const { eventId } = this.props.router.query;
		const event = getEventById(eventId);

		if (!event) {
			return <p>Found No Event!</p>;
		}
		return (
			<>
				<EventSummary title={event.title} />
				<EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
				<EventContent>
					<p>{event.description}</p>
				</EventContent>
			</>
		);
	}
}

export default withRouter(EventDetailPage);
